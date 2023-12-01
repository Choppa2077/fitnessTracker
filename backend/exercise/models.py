from django.db import models
from user.models import User
# Create your models here.


class SetModel(models.Model):
    reps = models.IntegerField()
    weight = models.IntegerField()
class ExerciseModel(models.Model):
    workout = models.ForeignKey('workout.WorkoutModel', on_delete=models.CASCADE, null=True)
    name = models.CharField(max_length=50)
    description = models.TextField()
    sets = models.ManyToManyField(SetModel, null=True,blank=True)
    rest_between_sets = models.DurationField()
    rest_between_exercices = models.DurationField()
    image_url = models.URLField(max_length=255)

class SystemExercises(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    muscle_group = models.CharField(max_length=100)
    image = models.ImageField()