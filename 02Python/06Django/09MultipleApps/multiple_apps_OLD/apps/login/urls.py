from django.conf.urls import url
from views import *

urlpatterns = [
    url(r'^$', index),
    url(r'^secrets$', secrets),
    url(r'^login$', login),
    url(r'^register$', register),
    url(r'^logout$', logout),
    url(r'^post$', post),
    url(r'^like$', like),
]