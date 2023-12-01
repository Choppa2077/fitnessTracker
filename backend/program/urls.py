from django.urls import path, include
from .views import (WorkoutModelAPIReadOnlyModelViewSet, ProgramModelAPIReadOnlyModelViewSet,
                    ExercisesModelAPIReadOnlyModelViewSet, ProgramCreateUpdateAPIView,
                    ProgramModelAPIViewSet, WorkoutModelAPIViewSet, ExercisesModelAPIViewSet)

from rest_framework.routers import SimpleRouter

program_router = SimpleRouter()
program_router.register(r'program/', ProgramModelAPIReadOnlyModelViewSet)

workout_router = SimpleRouter()
workout_router.register('workouts/', WorkoutModelAPIReadOnlyModelViewSet)

exercises_router = SimpleRouter()
exercises_router.register(r'exercises/', ExercisesModelAPIReadOnlyModelViewSet)

admin_program_router = SimpleRouter()
admin_program_router.register(r'admin/program', ProgramModelAPIViewSet)

admin_workout_router = SimpleRouter()
admin_workout_router.register(r'admin/workout', WorkoutModelAPIViewSet)

admin_exercises_router = SimpleRouter()
admin_exercises_router.register(r'admin/exercises', ExercisesModelAPIViewSet)


urlpatterns = [
    path('', include(program_router.urls)),
    path('', include(workout_router.urls)),
    path('', include(exercises_router.urls)),
    path('', include(exercises_router.urls)),

    path('', include(admin_program_router.urls)),
    path('', include(admin_workout_router.urls)),
    path('', include(admin_exercises_router.urls)),

    path('program-update-create/', ProgramCreateUpdateAPIView.as_view()),
]
