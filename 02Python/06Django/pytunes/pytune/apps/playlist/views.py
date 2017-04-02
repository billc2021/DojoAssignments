from django.shortcuts import render, redirect, HttpResponse
from django.contrib import messages
from datetime import datetime as dt
from models import Playlist

# Create your views here.
def index(request):
    context = {
        'playlist': Playlist.objects.all()
    }
    return render(request,'pytunes/index.html', context)

def add(request):
    server_name = request.POST['playlist_name']
    server_created_at = dt.now()
    server_updated_at = dt.now()

    try:
        Playlist.objects.create(name=server_name ,created_at=server_created_at, updated_at=server_updated_at, rating=0)
    except:
        # pass
        messages.error(request, 'Name is a duplicate')
    return redirect('pytunes:index')

def add_song(request, playlist_id):
    if request.method == 'POST':
        server_name = request.POST['song_name']
        server_playlist = playlist_id
        server_created_at = dt.now()
        server_updated_at = dt.now()

        try:
            pass
            Song.objects.create(name=server_name ,created_at=server_created_at, updated_at=server_updated_at, playlist=server_playlist)
        except:
            # pass
            messages.error(request, 'Bad Attempt')
        return redirect('pytunes:index')

    print 'playlist id is {}'.format(playlist_id)
    context = {
        'playlist': Playlist.objects.get(id=playlist_id)
    }
    return render(request, 'pytunes/index.html')