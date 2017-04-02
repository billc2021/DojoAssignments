from django.conf.urls import url
from views import *

urlpatterns = [
    url(r'^$', index),
    url(r'^books/$', books),
    url(r'^books/(?P<id>\d+)/$', books),
    url(r'^books/^add/$', books_add),
    url(r'^users/(?P<id>\d+)/$', users),
    url(r'^register$', register),
    url(r'^login$', login),
]