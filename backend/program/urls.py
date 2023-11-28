from django.urls import path, include
from .views import WorkoutModelAPIViewSet, ProgramModelAPIViewSet, ExercisesModelAPIViewSet

from rest_framework.routers import SimpleRouter

program_router = SimpleRouter()
program_router.registry(r'', ProgramModelAPIViewSet)

workout_router = SimpleRouter()
workout_router.registry(r'workouts/', WorkoutModelAPIViewSet)

exercises_router = SimpleRouter()
exercises_router.registry(r'exercises/', ExercisesModelAPIViewSet)


urlpatterns = [
    path('', include(program_router.urls)),
    path('', include(workout_router.urls)),
    path('', include(exercises_router.urls)),
]
