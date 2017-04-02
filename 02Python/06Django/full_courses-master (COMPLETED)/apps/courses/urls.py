from django.conf.urls import url
from views import *

urlpatterns = [
    url(r'^$', index, name='home'),
    url(r'^create/$', create, name='create'),
    url(r'^enroll/(?P<class_id>\d+)$', enroll, name='enroll'),
    url(r'^drop/(?P<class_id>\d+)$', drop, name='drop'),
    url(r'^delete/from/(?P<class_id>\d+)/student/(?P<student_id>\d+)$', remove_from_class, name='remove'),
]