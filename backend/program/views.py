from rest_framework.viewsets import ReadOnlyModelViewSet, ModelViewSet
from rest_framework.generics import ListAPIView, DestroyAPIView, RetrieveUpdateAPIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import action
from rest_framework.views import APIView
from rest_framework.exceptions import NotFound
from rest_framework.permissions import IsAdminUser, IsAuthenticated

from django.db import transaction
from django.shortcuts import get_object_or_404

from .serializers import ProgramModelSerializer, WorkoutModelSerializer, ExercisesModelSerializer
from .serializers import (
    ProgramModelSerializerCover, ProgramModelSerializerDetail,
    WorkoutModelSerializerCover, WorkoutModelSerializerDetail,
    ExercisesModelSerializerCover, ExercisesModelSerializerDetail, SetModelSerializer, SystemExerciseSerializer)
from .models import ProgramModel, WorkoutModel, ExerciseModel, SystemExercises, SetModel


class ProgramModelAPIReadOnlyModelViewSet(ReadOnlyModelViewSet):
    queryset = ProgramModel.objects.all()
    serializer_class = ProgramModelSerializerCover

    def get_serializer_class(self):
        if self.action == 'list':
            return super().get_serializer_class()
        elif self.action == 'retrieve':
            return ProgramModelSerializerDetail


class WorkoutModelAPIReadOnlyModelViewSet(ReadOnlyModelViewSet):
    queryset = WorkoutModel.objects.all()
    serializer_class = WorkoutModelSerializerCover

    def get_serializer_class(self):
        if self.action == 'list':
            return super().get_serializer_class()
        elif self.action == 'retrieve':
            return WorkoutModelSerializerDetail


class ExercisesModelAPIReadOnlyModelViewSet(ReadOnlyModelViewSet):
    queryset = ExerciseModel.objects.all()
    serializer_class = ExercisesModelSerializerCover

    def get_serializer_class(self):
        if self.action == 'list':
            return super().get_serializer_class()
        elif self.action == 'retrieve':
            return ExercisesModelSerializerDetail


class SetsModelAPIReadOnlyModelViewSet(ReadOnlyModelViewSet):
    queryset = SetModel.objects.all()
    serializer_class = SetModelSerializer


class ProgramCreateUpdateAPIView(APIView):
    # permission_classes = [IsAdminUser]

    @transaction.atomic
    def post(self, request):
        try:
            # print("Step 1")
            program_data = self._check_and_get_data(request.data, 'program')
            # print("Step 2")
            workouts_data = self._check_and_get_data(program_data, 'workouts')

            # print("Step 3")
            program_data['workouts'] = self._create_update_workouts(workouts_data)
            # print("Step 4")
            program_serializer_data = self._create_update_program_model(program_data)

            # print("Step 5")
            return Response(data=program_serializer_data, status=status.HTTP_200_OK)
        except Exception as exception:
            transaction.rollback(True)
            return Response(data={'message': str(exception)}, status=status.HTTP_400_BAD_REQUEST)

    def _check_and_get_data(self, data, key):
        if key not in data:
            raise NotFound(f"Field {key} must be in dataset.")

        return data.pop(key, None)

    def _create_update_workouts(self, workouts_dataset):
        workout_serializer_ides = []

        for workout_data in workouts_dataset:
            # print(workout_data)
            exercises_data = self._check_and_get_data(workout_data, 'exercises')
            # print(exercises_data)
            workout_data['exercises'] = self._create_update_exercises_with_serializer(exercises_data)

            if 'id' in workout_data:
                instance = WorkoutModel.objects.get(id=workout_data['id'])
                serializer = WorkoutModelSerializer(instance=instance, data=workout_data)
            else:
                serializer = WorkoutModelSerializer(data=workout_data)

            serializer.is_valid(raise_exception=True)
            serializer.save()

            workout_serializer_ides.append(serializer.data['id'])
        return workout_serializer_ides

    def _create_update_exercises_with_serializer(self, dataset):
        exercises_serializer_ids = []
        # print("Step 1 in Exercises serializer")
        for data in dataset:
            # print(data)

            if 'id' in data:
                instance = ExerciseModel.objects.get(id=data['id'])
                serializer = ExercisesModelSerializer(instance=instance, data=data)
            else:
                serializer = ExercisesModelSerializer(data=data)

            serializer.is_valid(raise_exception=True)
            serializer.save()
            exercises_serializer_ids.append(serializer.data['id'])

        return exercises_serializer_ids

    def _create_update_program_model(self, data):
        if 'id' in data:
            instance = ProgramModel.objects.get(id=data['id'])
            serializer = ProgramModelSerializer(instance=instance, data=data)
        else:
            serializer = ProgramModelSerializer(data=data)

        serializer.is_valid(raise_exception=True)
        serializer.save()

        return serializer.data


class ProgramModelAPIViewSet(ModelViewSet):
    # permission_classes = [IsAdminUser]
    queryset = ProgramModel.objects.all()
    serializer_class = ProgramModelSerializer

    def get_serializer_class(self):
        if self.action == 'retrieve':
            return ProgramModelSerializerDetail
        elif self.action == 'list':
            return ProgramModelSerializerCover
        else:
            return super().get_serializer_class()

    @action(detail=True, methods=['post'], url_path='adding-workout-to-program')
    def adding_exercises_to_workout(self, request, pk):
        program = ProgramModel.objects.get(id=pk)

        workouts_id = request.data['workouts']
        for workout_id in workouts_id:
            workout = get_object_or_404(WorkoutModel, id=workout_id)
            program.workouts.add(workout)
            program.save()

        return Response(data={'message': 'All given workouts added.'}, status=status.HTTP_200_OK)

    @action(detail=True, methods=['delete'], url_path='delete-workout-from-program')
    def delete_exercises_from_workout(self, request, pk):
        program = ProgramModel.objects.get(id=pk)

        workouts_id = request.data['workouts']
        for workout_id in workouts_id:
            workout = get_object_or_404(WorkoutModel, id=workout_id)
            program.workouts.remove(workout)
            program.save()

        return Response(data={'message': 'All given workouts removed'}, status=status.HTTP_200_OK)


class WorkoutModelAPIViewSet(ModelViewSet):
    # permission_classes = [IsAdminUser]
    queryset = WorkoutModel.objects.all()
    serializer_class = WorkoutModelSerializer

    def get_serializer_class(self):
        if self.action == 'retrieve':
            return WorkoutModelSerializerDetail
        elif self.action == 'list':
            return WorkoutModelSerializerCover
        else:
            return super().get_serializer_class()

    @action(detail=True, methods=['post'], url_path='adding-exercises-to-workout')
    def adding_exercises_to_workout(self, request, pk):
        workout = WorkoutModel.objects.get(id=pk)

        exercises_id = request.data['exercises']
        for exercise_id in exercises_id:
            exercise = get_object_or_404(ExerciseModel, id=exercise_id)
            workout.exercises.add(exercise)
            workout.save()

        return Response(data={'message': 'All given exercises added.'}, status=status.HTTP_200_OK)

    @action(detail=True, methods=['delete'], url_path='delete-exercises-from-workout')
    def delete_exercises_from_workout(self, request, pk):
        workout = WorkoutModel.objects.get(id=pk)

        exercises_id = request.data['exercises']
        for exercise_id in exercises_id:
            exercise = get_object_or_404(ExerciseModel, id=exercise_id)
            workout.exercises.remove(exercise)
            workout.save()

        return Response(data={'message': 'All given exercises removed'}, status=status.HTTP_200_OK)


class ExercisesModelAPIViewSet(ModelViewSet):
    # permission_classes = [IsAdminUser]
    queryset = ExerciseModel.objects.all()
    serializer_class = ExercisesModelSerializer

    def get_serializer_class(self):
        if self.action == 'retrieve':
            return ExercisesModelSerializerDetail
        elif self.action == 'list':
            return ExercisesModelSerializerCover
        else:
            return super().get_serializer_class()

    @action(detail=True, methods=['post'], url_path='adding-set-model-to-exercises')
    def adding_set_model_to_exercises(self, request, pk):
        exercise = ExerciseModel.objects.get(id=pk)

        sets_id = request.data['sets']
        for set_id in sets_id:
            set_model = get_object_or_404(SetModel, id=set_id)
            exercise.sets.add(set_model)
            exercise.save()

        return Response(data={'message': 'All given sets added.'}, status=status.HTTP_200_OK)

    @action(detail=True, methods=['delete'], url_path='delete-set-model-from-exercises')
    def delete_set_model_from_exercises(self, request, pk):
        exercise = ExerciseModel.objects.get(id=pk)

        sets_id = request.data['sets']
        for set_id in sets_id:
            set_model = get_object_or_404(SetModel, id=set_id)
            exercise.sets.remove(set_model)
            exercise.save()

        return Response(data={'message': 'All given sets removed'}, status=status.HTTP_200_OK)


class SetsModelAPIViewSet(ModelViewSet):
    # permission_classes = [IsAdminUser]
    queryset = SetModel.objects.all()
    serializer_class = SetModelSerializer


class SystemExercisesByMuscleGroupAPIView(ListAPIView):
    serializer_class = SystemExerciseSerializer

    def get_queryset(self):
        muscle_group = self.kwargs['muscle_group']
        return SystemExercises.objects.filter(muscle_group=muscle_group)

