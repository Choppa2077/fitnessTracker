from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('api/rest/', include('rest_framework.urls')),

    path('api/profile/', include('user.urls')),
    path('api/', include('program.urls')),
]
