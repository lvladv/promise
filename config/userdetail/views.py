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
import logging

User = get_user_model()


loggger = logging.getLogger(__name__)

logging.basicConfig(
    level=logging.DEBUG,
    format='%(asctime)s %(levelname)s [%(module)s] %(process)d:%(thread)d %(message)s',
)


def get_client_ip(request):
    x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
    if x_forwarded_for:
        ip = x_forwarded_for.split(',')[-1].strip()
    else:
        ip = request.META.get('REMOTE_ADDR')
    return ip


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
        loggger.info(f'CategoryCreateView: user: {str(self.request.user)}:{str(get_client_ip(self.request))}, query_params: {str(self.request.query_params.dict())}, data: {str(self.request.data.dict())}')

        serializer.save(owner=self.request.user)


class CategoryListView(generics.ListAPIView):
    # TODO modity to UserCategory.objects.filter(?)
    permission_classes = [permissions.IsAuthenticated]
    queryset = UserCategory.objects.all()
    serializer_class = CategoryUserSerializer
    filter_backends = (rest_filter.DjangoFilterBackend, filters.SearchFilter)
    filterset_class = CategoryFilter

    def get(self, request, *args, **kwargs):
        loggger.info(f'CategoryListView: user: {str(self.request.user)}:{str(get_client_ip(self.request))}, query_params: {str(self.request.query_params.dict())}')
        # return Promise.objects.filter(owner_id__username=self.request.user)
        return self.list(request, *args, **kwargs)


class CategoryDetailView(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [permissions.IsAuthenticated]
    queryset = UserCategory.objects.all()
    serializer_class = CategoryUserSerializer

    def get(self, request, *args, **kwargs):
        loggger.info(f'CategoryDetailView [GET]: user: {str(self.request.user)}:{str(get_client_ip(self.request))}, query_params: {str(self.request.query_params.dict())}')
        return self.retrieve(request, *args, **kwargs)

    def put(self, request, *args, **kwargs):
        loggger.info(f'CategoryDetailView [PUT]: user: {str(self.request.user)}:{str(get_client_ip(self.request))}, query_params: {str(self.request.query_params.dict())}, data: {str(self.request.data.dict())}')
        return self.update(request, *args, **kwargs)

    def patch(self, request, *args, **kwargs):
        loggger.info(f'CategoryDetailView [PATCH]: user: {str(self.request.user)}:{str(get_client_ip(self.request))}, query_params: {str(self.request.query_params.dict())}, data: {str(self.request.data.dict())}')
        return self.partial_update(request, *args, **kwargs)

    def delete(self, request, *args, **kwargs):
        loggger.info(f'CategoryDetailView [DELETE]: user: {str(self.request.user)}:{str(get_client_ip(self.request))}, query_params: {str(self.request.query_params.dict())}')
        return self.destroy(request, *args, **kwargs)
