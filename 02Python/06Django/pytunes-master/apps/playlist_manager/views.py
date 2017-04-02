from django.shortcuts import render, redirect, HttpResponse, reverse
from django.contrib import messages
from .models import *
from django.db.models import Count

# Create your views here.
def index(request):
    context = {
        'title': 'The World\'s Greatest Playlist Manager',
        'playlists': Playlist.objects.all().annotate(song_count=Count('songs__playlist'))
    }
    return render(request, 'playlist_manager/index.html', context)

def add_playlist(request):
    playlist_name = request.POST['playlist_name']
    try:
        Playlist.objects.create(name=playlist_name, rating=0)
    except:
        messages.error(request, 'Name is duplicate. Be more original.')
    return redirect('pytunes:index')

def add_song(request, playlist_id):
    if request.method == 'POST':
        addsong = request.POST['song_name']
        try:
            Song.objects.create(title=addsong, playlist_id=playlist_id)
        except:
            messages.error(request, 'Song title is a duplicate. There is only one song on earth with that name. Pick a new song.')
        route_parameters = {'playlist_id': playlist_id}
        url = reverse('pytunes:addsong', kwargs=route_parameters)
        return redirect(url)
    context = {
        'playlist': Playlist.objects.get(id=playlist_id),
        'songs': Song.objects.filter(playlist_id=playlist_id)
    }
    return render(request, 'playlist_manager/songs.html', context)