from django.conf.urls import url
from views import *

urlpatterns = [
    url(r'^$', index, name='index'),
    url(r'^book/(?P<book_id>\d+)$', book, name='book'),
    url(r'^books/add$', add, name='add'),
    url(r'^books/(?P<book_id>\d+)$', edit, name='edit'),
    url(r'^users/(?P<user_id>\d+)$', users, name='users'),
    url(r'^delete_review/(?P<review_id>\d+)$', delete_review, name='delete_review')
]