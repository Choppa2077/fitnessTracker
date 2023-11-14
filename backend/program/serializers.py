from rest_framework import serializers
from .models import ProgramModel
from workout.models import WorkoutModel
from workout.serializers import WorkoutSerializer
class ProgramSerializer(serializers.ModelSerializer):
    workouts = WorkoutSerializer(many=True)

    class Meta:
        model = ProgramModel
        fields = '__all__'

    def create(self, validated_data):
        wokrouts_data = validated_data.pop('workouts')
        workouts = []
        program = ProgramModel.objects.create(**validated_data)

        for i in wokrouts_data:
            try:
                e = WorkoutModel.objects.get_or_create(name=i['name'], defaults=i)[0]
                workouts.append(e)
            except:
                pass
        program.workouts.set(workouts)
        return program
    
    def update(self, instance, validated_data):
        wokrouts_data = validated_data.pop('workouts')
        workouts = []
        program = instance
        for(key,value) in validated_data.items():
            setattr(program, key, value)
        for i in wokrouts_data:
            try:
                e = WorkoutModel.objects.get_or_create(name=i['name'], defaults=i)[0]
                workouts.append(e)
            except:
                pass

        program.workouts.set(workouts)
        program.save()
        return program