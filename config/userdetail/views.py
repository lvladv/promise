from django.contrib.auth import get_user_model
from rest_framework import generics
from rest_framework import pagination
from rest_framework import permissions
from .models import UserCategory
# from config.promise.models import Promise
from .serializers import CustomUserSerializer, CategoryUserSerializer
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


class CategoryFilter(rest_filter.FilterSet):
    # slug = rest_filter.CharFilter(field_name='slug', lookup_expr='icontains')
    owner = rest_filter.CharFilter(field_name='owner_id__username')
    # primose_name = rest_filter.CharFilter(field_name='name', lookup_expr='icontains')
    class Meta:
        model = UserCategory
        fields = ['owner']

    @property
    def qs(self):
        parent = super(CategoryFilter, self).qs
        # print(self.request.user)
        return parent.filter(owner_id__username=self.request.user)




class CategoryCreateView(generics.CreateAPIView):
    permission_classes = [permissions.IsAuthenticated]
    queryset = UserCategory.objects.all()
    serializer_class = CategoryUserSerializer

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class CategoryListView(generics.ListAPIView):
    permission_classes = [permissions.IsAuthenticated]
    queryset = UserCategory.objects.all()
    serializer_class = CategoryUserSerializer
    filter_backends = (rest_filter.DjangoFilterBackend, filters.SearchFilter)
    filterset_class = CategoryFilter


class CategoryDetailView(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [permissions.IsAuthenticated]
    queryset = UserCategory.objects.all()
    serializer_class = CategoryUserSerializer
