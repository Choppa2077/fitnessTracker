from django.db import models
# Create your models here.
class ProgramModel(models.Model):
    tittle = models.CharField(max_length=70)
    description = models.TextField()
<<<<<<< HEAD
=======
    workouts = models.ManyToManyField(WorkoutModel, blank=False, null=True)
>>>>>>> f83a49d61cf9a07eb7c25c485eb7415cdaeb6664
