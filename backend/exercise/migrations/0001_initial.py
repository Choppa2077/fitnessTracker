# Generated by Django 4.2.6 on 2023-10-30 16:18

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ExerciseModel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('description', models.TextField()),
                ('count_of_sets', models.IntegerField()),
                ('rest_between_sets', models.DurationField()),
                ('rest_between_exercices', models.DurationField()),
                ('image_url', models.URLField(max_length=255)),
            ],
        ),
    ]
