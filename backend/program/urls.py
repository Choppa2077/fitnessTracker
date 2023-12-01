from django.urls import path, include
from .views import (WorkoutModelAPIReadOnlyModelViewSet, ProgramModelAPIReadOnlyModelViewSet,
                    ExercisesModelAPIReadOnlyModelViewSet, ProgramCreateUpdateAPIView,
                    ProgramModelAPIViewSet, WorkoutModelAPIViewSet, ExercisesModelAPIViewSet,
                    SetsModelAPIViewSet, SetsModelAPIReadOnlyModelViewSet, SystemExercisesByMuscleGroupAPIView)
from rest_framework.routers import SimpleRouter

program_router = SimpleRouter()
program_router.register(r'programs', ProgramModelAPIReadOnlyModelViewSet)

workout_router = SimpleRouter()
workout_router.register('workouts', WorkoutModelAPIReadOnlyModelViewSet)

exercises_router = SimpleRouter()
exercises_router.register(r'exercises', ExercisesModelAPIReadOnlyModelViewSet)

sets_router = SimpleRouter()
sets_router.register(r'sets', SetsModelAPIReadOnlyModelViewSet)

admin_program_router = SimpleRouter()
admin_program_router.register(r'admin/program', ProgramModelAPIViewSet)

admin_workout_router = SimpleRouter()
admin_workout_router.register(r'admin/workout', WorkoutModelAPIViewSet)

admin_exercises_router = SimpleRouter()
admin_exercises_router.register(r'admin/exercises', ExercisesModelAPIViewSet)

admin_sets_router = SimpleRouter()
admin_sets_router.register(r'admin/sets', SetsModelAPIViewSet)

urlpatterns = [
    path('', include(program_router.urls)),
    path('', include(workout_router.urls)),
    path('', include(exercises_router.urls)),
    path('', include(exercises_router.urls)),
    path('', include(exercises_router.urls)),
    path('', include(sets_router.urls)),

    path('', include(admin_program_router.urls)),
    path('', include(admin_workout_router.urls)),
    path('', include(admin_exercises_router.urls)),
    path('', include(admin_sets_router.urls)),

    path('muscle_group/<str:muscle_group>/', SystemExercisesByMuscleGroupAPIView.as_view(),
         name='muscle-group-exercises'),
    path('program-update-create/', ProgramCreateUpdateAPIView.as_view(),
         name='update-create-program-with-workouts-exercises'),
]
