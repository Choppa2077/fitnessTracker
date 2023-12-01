from django.shortcuts import get_list_or_404

from rest_framework import generics
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import generics, status
from . serializers import ExerciseSerializer, SetSerializer, SystemExerciseSerializer
from . models import ExerciseModel,SystemExercises
# Create your views here.

class ExerciseModelListAPIView(generics.ListAPIView):
    queryset = ExerciseModel.objects.all()
    serializer_class= ExerciseSerializer
class ExerciseModelEditAPIView(generics.RetrieveUpdateAPIView):
    queryset = ExerciseModel.objects.all()
    serializer_class = ExerciseSerializer
class ExerciseModelCreateAPIView(generics.CreateAPIView):
    queryset = ExerciseModel.objects.all()
    serializer_class = ExerciseSerializer

class ExerciseByWorkoutAPIView(generics.ListAPIView):
    serializer_class = ExerciseSerializer

    def get_queryset(self):
        workout_id = self.kwargs['workout_id']  # Assuming you pass workout_id in URL
        return ExerciseModel.objects.filter(workout=workout_id)
    
class SetByExerciseAPIView(generics.ListAPIView):
    serializer_class = SetSerializer

    def get_queryset(self):
        exercise_id = self.kwargs['exercise_id']  # Assuming you pass exercise_id in URL
        return ExerciseModel.objects.get(exercise=exercise_id).sets.all()
    
class SystemExercisesByMuscleGroupAPIView(generics.ListAPIView):
    serializer_class = SystemExerciseSerializer

    def get_queryset(self):
        muscle_group = self.kwargs['muscle_group']  # Assuming you pass muscle_group in URL
        return SystemExercises.objects.filter(muscle_group=muscle_group)

class DeleteExerciseByIDAPIView(generics.DestroyAPIView):
    queryset = SystemExercises.objects.all()  # Assuming SystemExercises is the Exercise model

    def delete(self, request, *args, **kwargs):
        exercise_id = self.kwargs.get('exercise_id')  # URL parameter name for exercise ID
        try:
            exercise_to_delete = self.queryset.get(id=exercise_id)
            exercise_to_delete.delete()
            return Response({'message': 'Exercise deleted successfully'}, status=status.HTTP_204_NO_CONTENT)
        except SystemExercises.DoesNotExist:
            return Response({'message': 'Exercise not found'}, status=status.HTTP_404_NOT_FOUND)
        except Exception as e:
            return Response({'message': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)