from django.db import models
from exercise.models import ExerciseModel
from program.models import ProgramModel
# Create your models here.

class WorkoutModel(models.Model):
    name = models.CharField(max_length=60)
    program = models.ForeignKey(ProgramModel, on_delete=models.CASCADE, null=True)
    day = models.CharField(max_length=50, default='Monday')