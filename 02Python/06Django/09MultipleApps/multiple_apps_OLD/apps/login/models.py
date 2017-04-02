from __future__ import unicode_literals

from django.db import models

# Create your models here.
class User(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=10)
    created_at = models.DateField(auto_now_add=True)
    updated_at = models.DateField(auto_now=True)

class Secret(models.Model):
    secret = models.CharField(max_length=1000)
    created_at = models.DateField(auto_now_add=True)
    updated_at = models.DateField(auto_now=True)
    user = models.ForeignKey(User, related_name='user_secrets')

class Likes(models.Model):
    user = models.ForeignKey(User, related_name='user_likes')
    secret = models.ForeignKey(Secret, related_name='secrets')
    created_at = models.DateField(auto_now_add=True)
    updated_at = models.DateField(auto_now=True)