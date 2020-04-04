from django.contrib import admin
from django.urls import path
from django.conf.urls import url, include
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi
from .views import start

schema_view = get_schema_view(
    openapi.Info(
        title="Pomise API",
        default_version='v1',
        description="Test description",
        # terms_of_service="https://www.google.com/policies/terms/",
        # contact=openapi.Contact(email="contact@snippets.local"),
        # license=openapi.License(name="BSD License"),
    ),
    # validators=['ssv', 'flex'],
    # validators=['ssv', ],
    public=True,
    permission_classes=(permissions.AllowAny,),
)
urlpatterns = [
    url(r'^api/v1/data/', include('promise.urls')),
    url(r'^api/v1/data/', include('userdetail.urls')),
    url('admin/', admin.site.urls),
    url(r'^swagger(?P<format>\.json|\.yaml)$', schema_view.without_ui(cache_timeout=0), name='schema-json'),
    url(r'^swagger/$', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    url(r'^redoc/$', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
    path('', start),

]
