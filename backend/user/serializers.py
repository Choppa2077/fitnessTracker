from rest_framework import serializers
from rest_framework.validators import UniqueValidator

from django.contrib.auth.models import User
from django.contrib.auth.password_validation import validate_password

from .models import UserProfile


class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = ['level', 'height', 'weight', 'age']

    def validate_height(self, value):
        if value <= 0:
            raise serializers.ValidationError("Height must be a positive integer.")
        return value

    def validate_weight(self, value):
        if value <= 0:
            raise serializers.ValidationError("Weight must be a positive integer.")
        return value

    def validate_age(self, value):
        if value <= 0:
            raise serializers.ValidationError("Age must be a positive integer.")
        return value


class CreateUserSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(
        validators=[UniqueValidator(queryset=User.objects.all())]
    )

    password = serializers.CharField(write_only=True, required=True, validators=[validate_password])
    password2 = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = User
        fields = ['email', 'first_name', 'password', 'password2']
        extra_kwargs = {
            'first_name': {'required': True},
            'email': {'required': True},
        }

    def validate(self, attrs):
        if attrs['password'] != attrs['password2']:
            raise serializers.ValidationError({"password": "Password fields didn't match."})

        return attrs

    def create(self, validated_data):
        user = User.objects.create(
            username=validated_data['email'],
            email=validated_data['email'],
            first_name=validated_data['first_name'],
        )

        UserProfile.objects.create(user=user)
        user.set_password(validated_data['password'])
        user.save()

        return user


class UpdateUserSerializer(serializers.ModelSerializer):
    userprofile = UserProfileSerializer(partial=True)

    class Meta:
        model = User
        fields = ['first_name', 'email', 'userprofile']

    def update(self, instance, validated_data):
        instance.first_name = validated_data['first_name']
        instance.email = validated_data['email']
        profile_data = validated_data.get('userprofile', {})
        profile = instance.userprofile

        if profile_data:
            for key, value in profile_data.items():
                setattr(profile, key, value)
            profile.save()

        instance.save()
        return instance


class ChangeUserPasswordSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, required=True, validators=[validate_password])
    password2 = serializers.CharField(write_only=True, required=True)
    old_password = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = User
        fields = ['old_password', 'password', 'password2']

    def validate(self, attrs):
        if attrs['password'] != attrs['password2']:
            raise serializers.ValidationError({"password": "Password fields didn't match."})

        return attrs

    def validate_old_password(self, value):
        user = self.context['request'].user
        if not user.check_password(value):
            raise serializers.ValidationError({"old_password": "Old password is not correct"})
        return value

    def update(self, instance, validated_data):
        instance.set_password(validated_data['password'])
        instance.save()

        return instance
