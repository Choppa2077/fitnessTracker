# Generated by Django 4.2.6 on 2023-12-01 05:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('program', '0003_remove_programmodel_workouts'),
        ('user', '0003_rename_name_user_username'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='programs',
            field=models.ManyToManyField(blank=True, to='program.programmodel'),
        ),
    ]