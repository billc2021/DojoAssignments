from django.conf.urls import url
from views import *

urlpatterns = [
    url(r'^$', index, name='index'),
    url(r'^success$', success, name='success'),
    url(r'^login$', login, name='login'),
    url(r'^register$', register, name='register'),
    url(r'^logout$', logout, name='logout'),
]