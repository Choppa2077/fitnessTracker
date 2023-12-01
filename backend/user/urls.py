from django.urls import path
from . import views
urlpatterns = [
    path('create/', views.UserProfileCreateAPIView.as_view()),
    path('',views.UserProfileListAPIView.as_view()),
    path('edit/<int:pk>/',views.UserProfileEditAPIView.as_view()),
    path('<str:email>',views.UserGET.as_view()),
]