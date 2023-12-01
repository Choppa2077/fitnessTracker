from django.urls import path

from workout.views import WorkoutViewSet
from exercise.views import ExerciseByWorkoutAPIView

urlpatterns = [
    path('create/', WorkoutViewSet.as_view({
    'get': 'list',
    'post': 'create',
    })),
    path('',WorkoutViewSet.as_view({'get':'list'})),
    path('delete/<int:id>', WorkoutViewSet.as_view({'get':'list','delete':'destroy'})),
    path('update/<int:id>', WorkoutViewSet.as_view({'get':'list', 'put':'update'})),
    path('<int:workout_id>/exercises/', ExerciseByWorkoutAPIView.as_view(), name='exercise-by-workout'),
    
]