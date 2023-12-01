from django.urls import path
from . import views
urlpatterns = [
    path('create/', views.ExerciseModelCreateAPIView.as_view()),
    path('', views.ExerciseModelListAPIView.as_view()),
    path('edit/<int:pk>/', views.ExerciseModelEditAPIView.as_view()),
    path('muscle_group/<str:muscle_group>/', views.SystemExercisesByMuscleGroupAPIView.as_view(), name='muscle-group-exercises'),
    path('delete/<int:exercise_id>/', views.DeleteExerciseByIDAPIView.as_view(), name='delete-exercise-by-id'),
]
