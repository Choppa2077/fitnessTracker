from rest_framework.permissions import IsAuthenticated
from django.contrib.auth.models import User
from django.db import transaction

from rest_framework.generics import CreateAPIView, RetrieveUpdateAPIView, UpdateAPIView
from .serializers import CreateUserSerializer, UpdateUserSerializer, ChangeUserPasswordSerializer


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
