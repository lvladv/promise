from django.conf.urls import url
from .views import UserList, UserDetail, CategoryCreateView, CategoryDetailView, CategoryListView
from django.conf.urls import include
from django.urls import path



urlpatterns = [
    url(r'^users/$', UserList.as_view()),
    url(r'^users/(?P<pk>[0-9]+)/$', UserDetail.as_view()),
    url(r'category/$', CategoryListView.as_view()),
    url(r'category/new/$', CategoryCreateView.as_view()),

]
