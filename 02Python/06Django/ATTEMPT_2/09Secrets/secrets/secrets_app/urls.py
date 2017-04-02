from django.conf.urls import url
from views import *

urlpatterns = [
    url(r'^$', index, name='index'),
    url(r'^post_secret$', post_secret, name='post_secret'),
    url(r'^most_popular$', most_popular, name='most_popular'),
    url(r'^likes/(?P<secret_id>\d+)$', likes, name='likes'),
    url(r'^delete/(?P<secret_id>\d+)$', delete, name='delete'),
]