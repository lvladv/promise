from promise.models import Promise
from promise.serializers import PromiseSerializer
from .models import UserCategory
from rest_framework import serializers
from .models import *

class CategoryUserSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')

    class Meta:
        model = UserCategory
        # lookup_field = 'name'
        fields = '__all__'


class CustomUserSerializer(serializers.ModelSerializer):
    # TODO: Change to primary-key field or full data fields
    promise = serializers.PrimaryKeyRelatedField(many=True, queryset=Promise.objects.all())
    # promise = PromiseSerializer(many=True)
    usercategory = serializers.PrimaryKeyRelatedField(many=True, queryset=UserCategory.objects.all())
    # usercategory = CategoryUserSerializer(many=True)

    class Meta:
        model = User
        # fields = '__all__'
        exclude = ('password', 'last_login', 'is_superuser', 'is_staff', 'is_active', 'user_permissions', 'groups')



