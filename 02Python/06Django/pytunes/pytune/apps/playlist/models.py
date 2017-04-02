from __future__ import unicode_literals

from django.db import models

# Create your models here.
class Playlist(models.Model):
    name = models.CharField(max_length=64, unique=True)
    rating = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class Song(models.Model):
    title = models.CharField(unique=True, max_length=64)
    playlist = models.ForeignKey(Playlist, related_name='songs')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)