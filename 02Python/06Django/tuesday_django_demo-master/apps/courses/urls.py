from django.conf.urls import url
from views import *

urlpatterns = [
    url(r'^$', index, name='home'),
    url(r'^create/$', create, name='create'),
    url(r'^enroll/(?P<class_id>\d+)$', enroll, name='enroll'),
    url(r'^drop/(?P<class_id>\d+)$', drop, name='drop'),
]