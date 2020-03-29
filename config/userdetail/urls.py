from django.conf.urls import url
from .views import UserList, UserDetail
from django.conf.urls import include
from django.urls import path



urlpatterns = [
    url(r'^users/$', UserList.as_view()),
    url(r'^users/(?P<pk>[0-9]+)/$', UserDetail.as_view()),

]
