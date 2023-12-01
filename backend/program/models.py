from django.db import models


class SetModel(models.Model):
    reps = models.IntegerField()
    weight = models.IntegerField()


class SystemExercises(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    muscle_group = models.CharField(max_length=100)
    image = models.ImageField()


class ExerciseModel(models.Model):
    sets = models.ManyToManyField(SetModel)
    name = models.CharField(max_length=50)
    description = models.TextField()
    count_of_sets = models.IntegerField()
    rest_between_sets = models.DurationField()
    rest_between_exercises = models.DurationField()
    image_url = models.URLField(max_length=255)


class WorkoutModel(models.Model):
    name = models.CharField(max_length=60)
    exercises = models.ManyToManyField(ExerciseModel)


class ProgramModel(models.Model):
    tittle = models.CharField(max_length=70)
    description = models.TextField()
    workouts = models.ManyToManyField(WorkoutModel)

