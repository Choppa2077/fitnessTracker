from django.shortcuts import render
from .models import UserProfile, User
from .serializers import UserProfileSerializer,UserSerializer

from rest_framework import generics 

# Create your views here.

class UserProfileCreateAPIView(generics.CreateAPIView):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer

class UserProfileListAPIView(generics.ListAPIView):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer

class UserProfileEditAPIView(generics.RetrieveAPIView):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer

class UserGET(generics.ListAPIView):
    serializer_class = UserSerializer
    def get_queryset(self):
        email = self.kwargs['email']  # Assuming you pass muscle_group in URL
        return User.objects.filter(email=email)