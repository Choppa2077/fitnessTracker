from rest_framework.permissions import IsAuthenticated
from rest_framework.generics import CreateAPIView, RetrieveUpdateAPIView, UpdateAPIView
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from django.db import transaction
from .models import User
from django.shortcuts import get_object_or_404
from django.apps import apps

from .serializers import (CreateUserSerializer, UpdateUserSerializer,
                          ChangeUserPasswordSerializer, ProgramModelSerializerCover)


class CreateUserCreateAPIView(CreateAPIView):
    queryset = User.objects.all()
    serializer_class = CreateUserSerializer

    @transaction.atomic
    def post(self, request, *args, **kwargs):
        return super().post(request, *args, **kwargs)


class UpdateUserRetrieveUpdateAPIView(RetrieveUpdateAPIView):
    queryset = User.objects.all()
    permission_classes = [IsAuthenticated]
    serializer_class = UpdateUserSerializer

    def get_object(self):
        return self.request.user

    @transaction.atomic
    def put(self, request, *args, **kwargs):
        return super().put(request, *args, **kwargs)


class ChangePasswordRetrieveUpdateAPIView(UpdateAPIView):
    queryset = User.objects.all()
    permission_classes = [IsAuthenticated]
    serializer_class = ChangeUserPasswordSerializer

    def get_object(self):
        return self.request.user

    @transaction.atomic
    def put(self, request, *args, **kwargs):
        return super().put(request, *args, **kwargs)


class AddDeleteProgramToUserAPIView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user_profile = request.user.userprofile
        programs = user_profile.programs.all()

        serializer = ProgramModelSerializerCover(programs, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        try:
            user_profile, program_instance = self._get_program_user_profile_instance(request)

            user_profile.programs.add(program_instance)
            user_profile.save()
            return Response(data={'message': "Program added to user profile"}, status=status.HTTP_200_OK)
        except Exception as exception:
            return Response(data={'message': str(exception)}, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request):
        try:
            user_profile, program_instance = self._get_program_user_profile_instance(request)

            user_profile.favorites.remove(program_instance)
            user_profile.save()
            return Response(data={'message': "Program removed from user profile"}, status=status.HTTP_200_OK)

        except Exception as exception:
            return Response(data={'message': str(exception)}, status=status.HTTP_400_BAD_REQUEST)

    def _get_program_user_profile_instance(self, request):
        user_profile = request.user.userprofile
        program_id = request.data.get('program_id')

        ProgramModel = apps.get_model('program', 'ProgramModel')
        program = get_object_or_404(ProgramModel, id=program_id)
        return user_profile, program

