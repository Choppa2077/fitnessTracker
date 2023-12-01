from rest_framework import serializers
from .models import ProgramModel, WorkoutModel, ExerciseModel


class ExercisesModelSerializerCover(serializers.ModelSerializer):
    class Meta:
        model = ExerciseModel
        fields = ['id', 'name']


class ExercisesModelSerializerDetail(serializers.ModelSerializer):
    class Meta:
        model = ExerciseModel
        fields = '__all__'


class WorkoutModelSerializerCover(serializers.ModelSerializer):
    class Meta:
        model = WorkoutModel
        fields = ['id', 'name']


class WorkoutModelSerializerDetail(serializers.ModelSerializer):
    exercises = ExercisesModelSerializerCover(many=True)

    class Meta:
        model = WorkoutModel
        fields = ['id', 'name', 'exercises']


class ProgramModelSerializerCover(serializers.ModelSerializer):
    class Meta:
        model = ProgramModel
        fields = ['id', 'tittle', 'description']


class ProgramModelSerializerDetail(serializers.ModelSerializer):
    workouts = WorkoutModelSerializerCover(many=True)

    class Meta:
        model = ProgramModel
        fields = ['id', 'tittle', 'description', 'workouts']


class ProgramModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProgramModel
        fields = "__all__"
        extra_kwargs = {
            "workouts": {'required': False}
        }

    def create(self, validated_data):
        workouts = validated_data.pop('workouts', None)
        program = ProgramModel.objects.create(**validated_data)

        if workouts:
            program.workouts.set(workouts)

        return program

    def update(self, instance, validated_data):
        workouts = validated_data.pop('workouts', None)

        for key, value in validated_data.items():
            setattr(instance, key, value)
        instance.save()

        if workouts:
            instance.workouts.set(workouts)

        return instance


class WorkoutModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = WorkoutModel
        fields = "__all__"
        extra_kwargs = {
            "exercises": {'required': False}
        }

    def create(self, validated_data):
        exercises = validated_data.pop('exercises', None)
        workout = WorkoutModel.objects.create(**validated_data)

        if exercises:
            workout.exercises.set(exercises)

        return workout

    def update(self, instance, validated_data):
        exercises = validated_data.pop('exercises', None)

        for key, value in validated_data.items():
            setattr(instance, key, value)
        instance.save()

        if exercises:
            instance.exercises.set(exercises)

        return instance


class ExercisesModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = ExerciseModel
        fields = "__all__"

