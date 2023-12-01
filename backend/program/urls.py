from django.urls import path
from .views import ProgramCreateAPIView,ProgramDeleteAPIView,ProgramEditAPIView,ProgramListAPIView
from workout.views import WorkoutByProgramAPIView
urlpatterns = [
<<<<<<< HEAD
    path('',ProgramListAPIView.as_view()),
    path('create/',ProgramCreateAPIView.as_view()),
    path('update/<int:id>', ProgramEditAPIView.as_view()),
    path('delete/<int:id>', ProgramDeleteAPIView.as_view()),
    path('<int:program_id>/workouts', WorkoutByProgramAPIView.as_view()),
=======
    path('create/', ProgramViewSet.as_view({'get':'list', 'post':'create'})),
    path('update/<int:id>', ProgramViewSet.as_view({'get':'list', 'put':'update'})),
    path('',ProgramViewSet.as_view({'get':'list'})),
>>>>>>> f83a49d61cf9a07eb7c25c485eb7415cdaeb6664
]
