from rest_framework.response import Response
from django.contrib.auth import get_user_model
from .permissions import IsOwnerOrReadOnly
from .models import Promise
from .serializers import PromiseSerializer
from rest_framework import generics, views
from rest_framework import permissions
from rest_framework import pagination
from datetime import datetime, timedelta
from django_filters import rest_framework as rest_filter
from rest_framework import filters



class PromisePaginations(pagination.PageNumberPagination):
    page_size = 15
    page_query_description = 'page_size'
    max_page_size = 100


class PromiseFilter(rest_filter.FilterSet):
    # slug = rest_filter.CharFilter(field_name='slug', lookup_expr='icontains')
    owner = rest_filter.CharFilter(field_name='owner_id__username')
    # primose_name = rest_filter.CharFilter(field_name='name', lookup_expr='icontains')
    class Meta:
        model = Promise
        fields = ['owner']

    @property
    def qs(self):
        parent = super(PromiseFilter, self).qs
        # print(self.request.user)
        return parent.filter(owner_id__username=self.request.user)


class PromiseCreateView(generics.CreateAPIView):
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = PromiseSerializer
    queryset = Promise.objects.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class PromiseListView(generics.ListAPIView):
    permission_classes = [permissions.IsAuthenticated]
    queryset = Promise.objects.all().order_by('-create_time')
    # queryset = Promise.objects.filter(create_time__lte=datetime.datetime.now())
    serializer_class = PromiseSerializer
    pagination_class = PromisePaginations
    # filter_backends = (filters.SearchFilter,)
    filter_backends = (rest_filter.DjangoFilterBackend, filters.SearchFilter)
    # filterset_fields = 'owner'
    filterset_class = PromiseFilter
    search_fields = ['owner_id__username', 'name']  # ?search


class PromiseDetailView(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = PromiseSerializer
    queryset = Promise.objects.all()
    lookup_field = 'slug'
    # lookup_field = ('name', 'owner')
    #
    # def get(self, request, owner=None, name=None, format=None):
    #     lookup = {'name': name} if owner is None else {'owner': owner}
    #     vessel = get_object_or_404(Promise, **lookup)
    #     serializer = PromiseDetailSerializer(vessel, context={'request': request})
    #     return Response(serializer.data)

# from django.shortcuts import render
# def start(request):
#     # return render(request, '/home/ubpc/promise/frontend/build/index.html')
#     return render(request, 'index.html')


# class PromiseDetailView(views.APIView):
#     # permission_classes = (permissions.IsAuthenticatedOrReadOnly,
#     #                       IsOwnerOrReadOnly,)
#
#
#     # permission_classes = [permissions.IsAuthenticated]
#
#
#     #
#     # serializer_class = PromiseDetailSerializer
#     # queryset = Promise.objects.all()
#
#
#     def get(self, request):
#         # promise = request.GET.get('id')
#         lookup_field = 'name'
#         # id = request.GET['id']
#         # filter_id = Promise.objects.filter(id=id)
#         # serializer = PromiseDetailSerializer(filter_id, many=True)
#         serializer = PromiseDetailSerializer(lookup_field)
#         return Response(serializer.data)
#
#     def post(self, request):
#
#         serializer = PromiseDetailSerializer(data=request.data)
#         if serializer.is_valid(raise_exception=True):
#             serializer.save(owner=request.user)
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         else:
#             return Response(serializer.error_messages,status=status.HTTP_400_BAD_REQUEST)
#
#         serializer = PromiseDetailSerializer(data=request.data)
#         if serializer.is_valid(raise_exception=True):
#             serializer.save(owner=request.user)
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#
#
#     def put(self, request, pk, format=None):
#         # device = request.get_object(pk)
#         device = request.GET['id']
#         print(device)
#         serializer = PromiseDetailSerializer(device, data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
#
#
#
# class PromisePutView(generics.UpdateAPIView):
#     # permission_classes = [permissions.IsAuthenticated]
#
#     serializer_class = PromiseDetailSerializer
#     queryset = Promise.objects.all()
#

# Not needed
