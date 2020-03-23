from rest_framework import serializers
from .models import *


class PromiseSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')

    class Meta:
        model = Promise
        lookup_field = 'slug'
        fields = '__all__'

# class PromiseListSerializer(serializers.ModelSerializer):
#     owner = serializers.ReadOnlyField(source='owner.username')
#
#     class Meta:
#         model = Promise
#         fields = '__all__'
