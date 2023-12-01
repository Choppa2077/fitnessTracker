from django.shortcuts import render
from rest_framework import viewsets, generics
from .serializers import ProgramSerializer
from .models import ProgramModel
# Create your views here.


class ProgramCreateAPIView(generics.CreateAPIView):
    queryset = ProgramModel.objects.all()
    serializer_class = ProgramSerializer
class ProgramEditAPIView(generics.UpdateAPIView):
    queryset = ProgramModel.objects.all()
    serializer_class = ProgramSerializer
    lookup_url_kwarg = 'id'

class ProgramDeleteAPIView(generics.DestroyAPIView):
    queryset = ProgramModel.objects.all()
    serializer_class = ProgramSerializer
    lookup_url_kwarg = 'id'
class ProgramListAPIView(generics.ListAPIView):
    queryset = ProgramModel.objects.all()
    serializer_class = ProgramSerializer