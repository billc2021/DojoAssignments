from django.conf.urls import url
from views import *

urlpatterns = [
    url(r'^$', index, name='index'),
    url(r'^destroy/(?P<course_id>\d+)$', destroy, name='destroy'),
    url(r'^delete/(?P<course_id>\d+)$', delete, name='delete'),
    url(r'^add_course$', add_course, name='add_course'),
    url(r'^users_courses$', users_courses, name='users_courses'),
    url(r'^add_user$', add_user, name='add_user'),
]