from django.db import models
# Create your models here.
class ProgramModel(models.Model):
    tittle = models.CharField(max_length=70)
    description = models.TextField()
