from rest_framework import serializers
from .models import ExerciseModel, SystemExercises, SetModel
class ExerciseSerializer(serializers.ModelSerializer):
    class Meta:
        model = ExerciseModel
        fields = '__all__'

class SystemExerciseSerializer(serializers.ModelSerializer):
    class Meta:
        model = SystemExercises
        fields = '__all__'

class SetSerializer(serializers.ModelSerializer):
    class Meta:
        models = SetModel
        fields = '__all__'
