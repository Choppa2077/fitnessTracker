from django.shortcuts import get_list_or_404

from rest_framework import generics
from rest_framework.response import Response
from rest_framework.decorators import api_view

from . serializers import ExerciseSerializer
from . models import ExerciseModel
# Create your views here.

class ExerciseModelCreateAPIView(generics.CreateAPIView):
    queryset = ExerciseModel.objects.all()
    serializer_class = ExerciseSerializer
class ExerciseModelListAPIView(generics.ListAPIView):
    queryset = ExerciseModel.objects.all()
    serializer_class= ExerciseSerializer
class ExerciseModelEditAPIView(generics.RetrieveUpdateAPIView):
    queryset = ExerciseModel.objects.all()
    serializer_class = ExerciseSerializer