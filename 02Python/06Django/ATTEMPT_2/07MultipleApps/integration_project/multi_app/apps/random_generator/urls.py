from django.conf.urls import url
from views import *

urlpatterns = [
    url(r'^$', index, name='index'),
    url(r'^generate$', generate, name='generate'),
    url(r'^reset$', reset, name='reset')
]