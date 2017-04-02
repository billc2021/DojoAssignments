from django.conf.urls import url
from views import *

urlpatterns = [
    url(r'^$', pets, name='pets'),
    url(r'^pets/(?P<id>\d+)$', show, name='show'),
    url(r'^pets/new$', new, name='new'),
    url(r'^pets/(?P<id>\d+)/edit$', edit, name='edit'),
    url(r'^pets$', pets, name='pets'),
    url(r'^pets/(?P<id>\d+)$', update, name='update'),
    url(r'^pets/(?P<id>\d+)/destroy$', destroy, name='destroy'),
    url(r'^pets/create$', create, name='create'),
]