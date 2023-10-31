from rest_framework import status
from rest_framework import generics
from rest_framework.decorators import api_view
from rest_framework.response import Response

from django.shortcuts import get_object_or_404

from exercise.models import ExerciseModel
from .models import WorkoutModel, WorkoutExerciseModel
from .serializers import WorkoutSerializer, WorkoutExerciseSerializer


class WorkoutCreateAPIView(generics.CreateAPIView):
    queryset = WorkoutModel.objects.all()
    serializer_class = WorkoutSerializer
    def perform_create(self, serializer):
        # Create the workout
        workout = serializer.save()
        
        # Extract exercise data from the request
        exercise_data = self.request.data.get('exercises', [])

        # Create and associate exercises with the workout
        for exercise_item in exercise_data:
            exercise = ExerciseModel.objects.get(pk=exercise_item['exercise_id'])
            WorkoutExerciseModel.objects.create(workout=workout, exercise=exercise)

        return Response(serializer.data, status=status.HTTP_201_CREATED)
    
class WorkoutAddExerciseAPIView(generics.CreateAPIView):
    queryset = WorkoutExerciseModel.objects.all()
    serializer_class = WorkoutExerciseSerializer

    def perform_create(self, serializer):
        # Get the associated workout based on the primary key (pk) in the URL
        workout_pk = self.kwargs.get('pk')
        workout = WorkoutModel.objects.get(pk=workout_pk)

        # Set the workout_id to the pk of the associated workout
        serializer.validated_data['workout_id'] = workout.pk
        serializer.save()

        return Response(serializer.data, status=status.HTTP_201_CREATED)


class WorkoutDeleteExerciseAPIView(generics.DestroyAPIView):
    serializer_class = WorkoutExerciseSerializer

    def get_queryset(self):
        workout_pk = self.kwargs.get('workout_pk')
        workout = get_object_or_404(WorkoutModel, pk=workout_pk)
        return WorkoutExerciseModel.objects.filter(workout=workout)

    def perform_destroy(self, instance):
        instance.delete()