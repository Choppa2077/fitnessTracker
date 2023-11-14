from django.urls import path
from .views import ProgramViewSet

urlpatterns = [
    path('create/', ProgramViewSet.as_view({'get':'list', 'post':'create'})),
    path('update/<int:id>', ProgramViewSet.as_view({'get':'list', 'put':'update'})),
]
