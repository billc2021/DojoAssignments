from django.conf.urls import url
from views import *

urlpatterns = [
    url(r'^$', index),
    url(r'^ninjas/$', ninjas),
    url(r'^ninjas/(?P<color>\w+)/$', ninja)
]