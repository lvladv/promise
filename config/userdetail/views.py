from rest_framework.response import Response
from django.contrib.auth import get_user_model
# from config.promise.models import Promise
from .serializers import CustomUserSerializer
from rest_framework import generics, views
from rest_framework import permissions
from rest_framework import pagination
from django_filters import rest_framework as rest_filter
from rest_framework import filters

# from .permissions import IsOwnerOrReadOnly

User = get_user_model()


class UserPaginations(pagination.PageNumberPagination):
    page_size = 10
    page_query_description = 'page_size'
    max_page_size = 100


class UserList(generics.ListAPIView):
    permission_classes = [permissions.IsAuthenticated]
    queryset = User.objects.all()
    pagination_class = UserPaginations

    serializer_class = CustomUserSerializer


class UserDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [permissions.IsAuthenticated]
    queryset = User.objects.all()
    serializer_class = CustomUserSerializer

