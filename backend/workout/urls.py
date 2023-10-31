from django.urls import path

from workout.views import WorkoutCreateAPIView, WorkoutAddExerciseAPIView, WorkoutDeleteExerciseAPIView

urlpatterns = [
    path('create/', WorkoutCreateAPIView.as_view()),
    path('<int:workout_pk>/add-exercise/', WorkoutAddExerciseAPIView.as_view()),
    path('<int:workout_pk>/delete-exercise/<int:pk>/', WorkoutDeleteExerciseAPIView.as_view()),
]