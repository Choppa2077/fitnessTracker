from django.urls import path

from workout.views import WorkoutViewSet

urlpatterns = [
    path('create/', WorkoutViewSet.as_view({
    'get': 'list',
    'post': 'create',
    })),
    path('delete/<int:id>', WorkoutViewSet.as_view({'get':'list','delete':'destroy'})),
    path('update/<int:id>', WorkoutViewSet.as_view({'get':'list', 'put':'update'})),
]