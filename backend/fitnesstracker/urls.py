from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('api/rest/', include('rest_framework.urls')),

    path('profile/', include('user.urls')),
    path('program/', include('program.urls')),

    path('exercise/', include('exercise.urls')),
    path('workouts/', include('admin.urls')),
]
