from __future__ import unicode_literals

from django.db import models
from login_app.models import User

# Create your models here.
class Book(models.Model):
    title = models.CharField(max_length=100)
    author = models.CharField(max_length=100)
    user = models.ForeignKey(User, related_name='user_books')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class Review(models.Model):
    review = models.TextField(max_length=None)
    ratings = models.IntegerField(default=0)
    user = models.ForeignKey(User,on_delete=models.CASCADE, related_name='user_reviews')
    book = models.ForeignKey(Book,on_delete=models.CASCADE, related_name='book_reviews')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)