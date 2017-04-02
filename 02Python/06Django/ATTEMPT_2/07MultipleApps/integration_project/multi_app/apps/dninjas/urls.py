from django.conf.urls import url
from views import *


urlpatterns = [
    url(r'^$', index, name='index'),
    url(r'^ninjas/$', ninjas, name='ninjas'),
    url(r'^ninjas/(?P<color>\w+)/$', ninja, name='ninja')
]