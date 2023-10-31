from django.db import models
from exercise.models import ExerciseModel
# Create your models here.
class WorkoutModel(models.Model):
    name = models.CharField(max_length=255, default='workout')
    
class WorkoutExerciseModel(models.Model):
    workout_id = models.ForeignKey(WorkoutModel, on_delete=models.CASCADE)
    exercise_id = models.ForeignKey(ExerciseModel, on_delete=models.CASCADE)