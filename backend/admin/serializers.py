from rest_framework import serializers
from backend.program.models import WorkoutModel, ProgramModel, ExerciseModel


class ProgramModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProgramModel
        fields = "__all__"


class WorkoutModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = WorkoutModel
        fields = "__all__"


class ExercisesModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = ExerciseModel
        fields = "__all__"


class WorkoutSerializer(serializers.ModelSerializer):
    exercises = ExercisesModelSerializer(many=True)

    class Meta:
        model = WorkoutModel
        fields = '__all__'
        read_only = 'exercises'

    def create(self, validated_data):
        exercises_data = validated_data.pop('exercises')
        exercises = []
        admin = WorkoutModel.objects.create(**validated_data)

        for i in exercises_data:
            try:
                e = ExerciseModel.objects.get_or_create(name=i['name'], defaults=i)[0]
                exercises.append(e)
            except:
                pass
        admin.exercises.set(exercises)
        return admin

    def update(self, instance, validated_data):
        exercises_data = validated_data.pop('exercises')
        exercises = []
        admin = instance
        for(key, value) in validated_data.items():
            setattr(admin, key, value)
        for i in exercises_data:
            try:
               e = ExerciseModel.objects.get_or_create(name=i['name'], defaults=i)[0]
               exercises.append(e)
            except:
                pass
        admin.exercises.set(exercises)
        admin.save()
        return admin
