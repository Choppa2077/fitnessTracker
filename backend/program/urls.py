from django.urls import path
from .views import ProgramCreateAPIView,ProgramDeleteAPIView,ProgramEditAPIView,ProgramListAPIView
from workout.views import WorkoutByProgramAPIView
urlpatterns = [
    path('',ProgramListAPIView.as_view()),
    path('create/',ProgramCreateAPIView.as_view()),
    path('update/<int:id>', ProgramEditAPIView.as_view()),
    path('delete/<int:id>', ProgramDeleteAPIView.as_view()),
    path('<int:program_id>/workouts', WorkoutByProgramAPIView.as_view()),
]
