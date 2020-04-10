from rest_framework import serializers
from .models import *
from promise.models import Promise


class CustomUserSerializer(serializers.ModelSerializer):
    promise = serializers.PrimaryKeyRelatedField(many=True, queryset=Promise.objects.all())

    class Meta:
        model = User
        # fields = '__all__'
        exclude = ('password', )


