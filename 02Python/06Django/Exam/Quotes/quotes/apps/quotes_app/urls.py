from django.conf.urls import url
from views import *

urlpatterns = [
    url(r'^login$', login),
    url(r'^register$', register),
    url(r'^logout$', logout),
    url(r'^$', index),
    url(r'^quotes$', quotes),
    url(r'^add_quote$', add_quote),
    url(r'add_fav$', add_fav),
    url(r'^remove_fav/(?P<quote_id>\d+)$', remove_fav),
]