from django.conf.urls import url
from views import *

urlpatterns = [
    url(r'^$', index),
    url(r'^generate$', generate),
    url(r'^reset$', reset)
]