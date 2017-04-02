from django.shortcuts import render, redirect, reverse
from django.contrib import messages
from login_app.models import User
from models import Book, Review
from django.db.models import Avg

# Create your views here.
def index(request):
    context = {
        'books': Book.objects.order_by('-created_at')[:3],
        'reviews': Review.objects.all(),
        'users': User.objects.all(),
    }
    return render(request, 'reviewer_app/index.html', context)

def book(request, book_id):
    try:
        context = {
            'book': Book.objects.get(id=book_id),
            'reviews': Review.objects.all().annotate(Avg('ratings')),
        }
        return render(request, 'reviewer_app/book.html', context)
    except:
        messages.add_message(request, messages.ERROR, 'There wa a problem with this book')
    return render(request, 'reviewer_app/book.html')

def books(request):
    return render(request, 'reviewer_app/books.html')

def edit(request, book_id):
    return render(request, 'reviewer_app/books.html')

def add(request):
    # try:
    context = {
        'books': Book.objects.all(),
        'authors': Book.objects.values('author').distinct()
    }
    if request.method == 'POST':
        title = request.POST['title']
        if request.POST['author_select']:
            author = request.POST['author_select']
        if request.POST['author_text']:
            author = request.POST['author_text']
        if request.POST['review']:
            review = request.POST['review']
        if request.POST['ratings']:
            ratings = request.POST['ratings']
        user = User.objects.get(id=request.session['user_id'])
        book = Book.objects.create(title=title, author=author, user=user)
        review = Review.objects.create(review=review, user=user, ratings=ratings,book=book)
        return redirect(reverse('reviewer:index'))
    # except:
        # messages.add_message(request, messages.ERROR, 'Something went wrong')
            
    return render(request, 'reviewer_app/add.html', context)

def users(request, user_id):
    return render(request, 'reviewer_app/users.html')

def delete_review(request, review_id):
    review = Review.objects.get(id=review_id)
    review.delete()
    return render(reverse('reviewer:index'))