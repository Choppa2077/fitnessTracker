from django.db import models

# Create your models here.
class ProgramModel(models.Model):
    PROGRAM_TYPES = (
        ('Aerobics','Aerobics'),
        ('Lose Weight', 'Lose Weight'),
        ('Gain Muscle Mass', 'Gain Muscle Mass'),
        ('Be In Shape', 'Be In Shape'),
        ('Physical Activity', 'Physical Activity')
    )
    tittle = models.CharField(max_length=70)
    description = models.TextField()
    program_type = models.CharField(max_length=30,choices=PROGRAM_TYPES)