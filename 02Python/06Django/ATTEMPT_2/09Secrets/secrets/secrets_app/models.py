from __future__ import unicode_literals

from django.db import models
from login_app.models import User 

# Create your models here.
class Secret(models.Model):
    secret = models.TextField(max_length=1000)
    user = models.ForeignKey(User)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class Like(models.Model):
    secret = models.ForeignKey(Secret, related_name='secrets')
    user = models.ForeignKey(User, related_name='users')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)