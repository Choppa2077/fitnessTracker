from django.shortcuts import render
from rest_framework import viewsets
from .serializers import ProgramSerializer
from .models import ProgramModel
# Create your views here.


class ProgramViewSet(viewsets.ModelViewSet):
    serializer_class = ProgramSerializer
    queryset = ProgramModel.objects.all()
    lookup_field = 'id'