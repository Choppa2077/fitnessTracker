from rest_framework import serializers
from .models import ExerciseModel
class ExerciseSerializer(serializers.ModelSerializer):
    class Meta:
        model = ExerciseModel
        fields = [
            'id',
            'name',
            'description',
            'count_of_sets',
            'rest_between_sets',
            'rest_between_exercices',
            'image_url'
        ]