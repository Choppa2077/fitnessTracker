from django.urls import path, include
from .views import (WorkoutModelAPIViewSet, ProgramModelAPIViewSet,
                    ExercisesModelAPIViewSet, ProgramCreateUpdateAPIView)

from rest_framework.routers import SimpleRouter

program_router = SimpleRouter()
program_router.register(r'overview/', ProgramModelAPIViewSet)

workout_router = SimpleRouter()
workout_router.register('workouts/', WorkoutModelAPIViewSet)

exercises_router = SimpleRouter()
exercises_router.register(r'exercises/', ExercisesModelAPIViewSet)


urlpatterns = [
    path('api/', include(program_router.urls)),
    path('api/', include(workout_router.urls)),
    path('api/', include(exercises_router.urls)),

    path('api/program-update-create/', ProgramCreateUpdateAPIView.as_view()),
]
