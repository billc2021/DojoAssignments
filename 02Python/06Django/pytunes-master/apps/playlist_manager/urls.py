from django.conf.urls import url
from views import *

urlpatterns = [
    url(r'^$', index, name='index'),
    url(r'^add$', add_playlist, name='add'),
    url(r'^add_song/else/(?P<playlist_id>\d+)/something$', add_song, name='addsong'),
]
