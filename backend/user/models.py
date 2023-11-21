from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from program.models import ProgramModel
# Create your models here.

class User(AbstractBaseUser, PermissionsMixin):
    username = models.CharField(max_length=100, verbose_name=("User Name"))
    email = models.EmailField(max_length=255, unique=True, verbose_name=("Email Address"))
    password = models.CharField(max_length=100)
    programs = models.ManyToManyField(ProgramModel)
    is_active = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)


    USERNAME_FIELD = "email"


    def __str__(self):
        return self.email

class UserProfile(models.Model):
    LEVEL_CHOICES = (
        ('beginner', 'Beginner'),
        ('average', 'Average'),
        ('advanced', 'Advanced'),
    )
    user = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True)
    height = models.IntegerField()
    weight = models.IntegerField()
    age = models.IntegerField()
    level = models.CharField(max_length=10, choices=LEVEL_CHOICES)


