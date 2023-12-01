from rest_framework import status
from rest_framework import generics
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import viewsets, status
from rest_framework.views import APIView
from django.shortcuts import get_object_or_404

from exercise.models import ExerciseModel
from exercise.serializers import ExerciseSerializer
from .models import WorkoutModel
from .serializers import WorkoutSerializer


class WorkoutViewSet(viewsets.ModelViewSet):
   serializer_class = WorkoutSerializer
   queryset = WorkoutModel.objects.all()
   lookup_field = 'id'
   
class WorkoutByProgramAPIView(generics.ListAPIView):
    serializer_class = WorkoutSerializer

    def get_queryset(self):
        program_id = self.kwargs['program']  # Assuming you pass program ID in URL
        return WorkoutModel.objects.filter(program_id=program_id)
