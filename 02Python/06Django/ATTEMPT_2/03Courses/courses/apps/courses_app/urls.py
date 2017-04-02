from django.conf.urls import url
from views import *

urlpatterns = [
    url(r'^$', index),
    url(r'^destroy/(?P<course_id>\d+)$', destroy),
    url(r'^delete/(?P<course_id>\d+)$', delete),
    url(r'^add_course$', add_course)
]