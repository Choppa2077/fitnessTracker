from rest_framework import serializers
from .models import WorkoutModel, WorkoutExerciseModel

class WorkoutSerializer(serializers.ModelSerializer):
    class Meta:
        model = WorkoutModel
        fields = '__all__'

class WorkoutExerciseSerializer(serializers.ModelSerializer):
    class Meta:
        model = WorkoutExerciseModel
        fields = '__all__'