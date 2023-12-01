from django.db import models
from django.contrib.auth.models import User
from backend.program.models import ProgramModel


class UserProfile(models.Model):
    class LevelStatus(models.TextChoices):
        BEGINNER = 'beginner', 'Beginner'
        AVERAGE = 'average', 'Average'
        ADVANCED = 'advanced', 'Advanced'

    user = models.OneToOneField(User, on_delete=models.CASCADE)
    level = models.CharField(max_length=10, choices=LevelStatus.choices, default=LevelStatus.BEGINNER)
    height = models.IntegerField(blank=True, null=True)
    weight = models.IntegerField(blank=True, null=True)
    age = models.IntegerField(blank=True, null=True)
    programs = models.ManyToManyField(ProgramModel)
