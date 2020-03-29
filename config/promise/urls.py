from django.conf.urls import url
from .views import PromiseCreateView, PromiseDetailView, PromiseListView
from django.conf.urls import include
from django.urls import path

urlpatterns = [
    # url(r'^auth/', include('djoser.urls')),
    # url(r'^auth/', include('djoser.urls.authtoken')),

    url(r'^auth/', include('djoser.urls')),
    url(r'^auth/', include('djoser.urls.jwt')),

    url(r'^promise/new/$', PromiseCreateView.as_view()),
    # url(r'^promise/', PromiseCreateView.as_view()),
    url(r'^promise/$', PromiseListView.as_view()),
    path('promise/<str:slug>/', PromiseDetailView.as_view()),

    # url(r'^promise/name/(?P<slug>[A-Za-z]+.)/$', PromiseDetailView.as_view()),
    # path('promise/users/detail/<str:nickname>/', UserInfoDetailView.as_view()),
    # url(r'^promise/users/create/(?P<nickname>[A-Za-z]+.)/$', UserInfoCreateView.as_view()),
    # url(r'^promise/users/create/$', UserInfoCreateView.as_view()),
    # url(r'^prom/(?P<pk>[0-9]+)/$', PromiseDetailView.as_view()),
    # url(r'^prom/owner/(?P<name>[A-Za-z]+)/$', PromiseDetailView.as_view()),
    # url(r'^prom/(?P<name>[0-9A-Za-z]+)/$', PromiseDetailView.as_view()),
    # url(r'^promx/', PromiseDetailView.as_view()),
    # url(r'^promq/update/(?P<pk>[0-9]+)/$', PromisePutView.as_view()),

]
