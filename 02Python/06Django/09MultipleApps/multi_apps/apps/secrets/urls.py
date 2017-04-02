from django.conf.urls import url
from views import *

urlpatterns = [
    url(r'^$', index, name='index'),
    url(r'^register$', register, name='register'),
    url(r'^login$', login, name='login'),
    url(r'^secrets$', secrets, name='secrets'),
    url(r'^logout$', logout, name='logout'),
    url(r'^post_secret$', post_secret, name='post_secret'),
    url(r'^like$', like, name='like'),
    url(r'^most_popular$', most_popular, name='most_popular'),
    url(r'^delete/(?P<secret_id>\d+)$', delete, name='delete'),
    url(r'^back$', back, name='back'),
]