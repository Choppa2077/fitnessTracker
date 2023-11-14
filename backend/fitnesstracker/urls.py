from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('login', views.login),
    path('signup', views.signup),
    path('test_token', views.test_token),
    path('exercise/', include('exercise.urls')),
    path('workouts/', include('workout.urls')),
    path('program/', include('program.urls')),
]
