from django.urls import path, include
from .views import (WorkoutModelAPIReadOnlyModelViewSet, ProgramModelAPIReadOnlyModelViewSet,
                    ExercisesModelAPIReadOnlyModelViewSet, ProgramCreateUpdateAPIView)

from rest_framework.routers import SimpleRouter

program_router = SimpleRouter()
program_router.register(r'overview/', ProgramModelAPIReadOnlyModelViewSet)

workout_router = SimpleRouter()
workout_router.register('workouts/', WorkoutModelAPIReadOnlyModelViewSet)

exercises_router = SimpleRouter()
exercises_router.register(r'exercises/', ExercisesModelAPIReadOnlyModelViewSet)


urlpatterns = [
    path('api/', include(program_router.urls)),
    path('api/', include(workout_router.urls)),
    path('api/', include(exercises_router.urls)),

    path('api/program-update-create/', ProgramCreateUpdateAPIView.as_view()),
]
