from django.urls import path
from . import views
urlpatterns = [
    path('create/', views.ExerciseModelCreateAPIView.as_view()),
    path('', views.ExerciseModelListAPIView.as_view()),
    path('edit/<int:pk>/', views.ExerciseModelEditAPIView.as_view()),
]
