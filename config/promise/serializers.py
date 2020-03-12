from rest_framework import serializers
from .models import *


class PromiseDetailSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')

    class Meta:
        model = Promise
        lookup_field = 'slug'
        fields = '__all__'


class PromiseListSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')

    class Meta:
        model = Promise
        fields = '__all__'


class UserSerializer(serializers.ModelSerializer):
    promise = serializers.PrimaryKeyRelatedField(many=True, queryset=Promise.objects.all())

    class Meta:
        model = User
        fields = '__all__'
