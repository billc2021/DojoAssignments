from __future__ import unicode_literals

from django.db import models

# Create your models here.
class User(models.Model):
    name = models.CharField(max_length=100)
    alias = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    password = models.CharField(max_length=20)
    created_at = models.DateField(auto_now_add=True)
    updated_at = models.DateField(auto_now=True)

class Message(models.Model):
    message = models.TextField()
    user_name = models.ForeignKey(User, related_name='user_message')
    created_at = models.DateField(auto_now_add=True)
    updated_at = models.DateField(auto_now=True)

class Comment(models.Model):
    comment = models.TextField()
    user_name = models.ForeignKey(User, related_name='user_comment')
    message_id = models.ForeignKey(Message, related_name='message_id')
    created_at = models.DateField(auto_now_add=True)
    updated_at = models.DateField(auto_now=True)