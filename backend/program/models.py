from django.db import models
from workout.models import WorkoutModel
# Create your models here.
class ProgramModel(models.Model):
    tittle = models.CharField(max_length=70)
    description = models.TextField()
    workouts = models.ManyToManyField(WorkoutModel, blank=False, null=True)