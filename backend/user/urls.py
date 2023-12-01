from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView, TokenVerifyView

from .views import CreateUserCreateAPIView, ChangePasswordRetrieveUpdateAPIView, UpdateUserRetrieveUpdateAPIView

urlpatterns = [
    path('login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('login/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('verify/', TokenVerifyView.as_view(), name='token_verify'),

    path('', UpdateUserRetrieveUpdateAPIView.as_view(), name='auth-update-user-profile'),
    path('create-user/', CreateUserCreateAPIView.as_view(), name='create-user'),
    path('reset-password/', ChangePasswordRetrieveUpdateAPIView.as_view(), name='auth-update-password')
]
