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


class ProgramModelSerializerCover(serializers.ModelSerializer):
    class Meta:
        model = ProgramModel
        fields = ['id', 'name']


class ProgramModelSerializerDetail(serializers.ModelSerializer):
    workouts = WorkoutModelSerializerCover(many=True)

    class Meta:
        model = ProgramModel
        fields = ['id', 'name', 'workouts']


class WorkoutModelSerializerDetail(serializers.ModelSerializer):
    exercises = ExercisesModelSerializerCover(many=True)

    class Meta:
        model = WorkoutModel
        fields = ['id', 'name', 'exercises']

