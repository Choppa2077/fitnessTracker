from rest_framework.viewsets import ReadOnlyModelViewSet

from .serializers import (
    ProgramModelSerializerCover, ProgramModelSerializerDetail,
    WorkoutModelSerializerCover, WorkoutModelSerializerDetail,
    ExercisesModelSerializerCover, ExercisesModelSerializerDetail)
from .models import ProgramModel, WorkoutModel, ExerciseModel


class ProgramModelAPIViewSet(ReadOnlyModelViewSet):
    queryset = ProgramModel.objects.all()
    serializer_class = ProgramModelSerializerCover

    def get_serializer_class(self):
        if self.action == 'list':
            return super().get_serializer_class()
        elif self.action == 'retrieve':
            return ProgramModelSerializerDetail


class WorkoutModelAPIViewSet(ReadOnlyModelViewSet):
    queryset = WorkoutModel.objects.all()
    serializer_class = WorkoutModelSerializerCover

    def get_serializer_class(self):
        if self.action == 'list':
            return super().get_serializer_class()
        elif self.action == 'retrieve':
            return WorkoutModelSerializerDetail


class ExercisesModelAPIViewSet(ReadOnlyModelViewSet):
    queryset = ExerciseModel.objects.all()
    serializer_class = ExercisesModelSerializerCover

    def get_serializer_class(self):
        if self.action == 'list':
            return super().get_serializer_class()
        elif self.action == 'retrieve':
            return ExercisesModelSerializerDetail
