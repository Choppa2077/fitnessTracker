# Generated by Django 4.2.6 on 2023-11-28 06:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('workout', '0003_workoutmodel_exercises_alter_workoutmodel_name_and_more'),
        ('program', '0002_remove_programmodel_program_type_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='programmodel',
            name='workouts',
            field=models.ManyToManyField(blank=True, null=True, to='workout.workoutmodel'),
        ),
    ]