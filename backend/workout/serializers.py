# from rest_framework import serializers
# from .models import WorkoutModel
# from exercise.serializers import ExerciseSerializer
# from exercise.models import ExerciseModel
#
# class ExerciseShowSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = ExerciseModel
#         fields = [
#             'id',
#             'name',
#         ]
#
#
#
# class WorkoutSerializer(serializers.ModelSerializer):
#     exercises = ExerciseSerializer(many=True)
#
#     class Meta:
#         model = WorkoutModel
#         fields = '__all__'
#         read_only = 'exercises'
#
#     def create(self, validated_data):
#         exercises_data = validated_data.pop('exercises')
#         exercises = []
#         workout = WorkoutModel.objects.create(**validated_data)
#
#         for i in exercises_data:
#             try:
#                 e = ExerciseModel.objects.get_or_create(name=i['name'], defaults=i)[0]
#                 exercises.append(e)
#             except:
#                 pass
#         workout.exercises.set(exercises)
#         return workout
#
#     def update(self, instance, validated_data):
#         exercises_data = validated_data.pop('exercises')
#         exercises = []
#         workout = instance
#         for(key, value) in validated_data.items():
#             setattr(workout, key, value)
#         for i in exercises_data:
#             try:
#                e = ExerciseModel.objects.get_or_create(name=i['name'], defaults=i)[0]
#                exercises.append(e)
#             except:
#                 pass
#         workout.exercises.set(exercises)
#         workout.save()
#         return workout
#