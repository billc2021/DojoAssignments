from django.shortcuts import render, redirect, HttpResponse

# Create your views here.
def index(request):
    return render(request, 'index.html')

def books(request, id=0):
    return HttpResponse(id)
    # return render(request,'books.html')

def users(request, id):
    return HttpResponse(id)
    # return render(request, 'users.html')

def register(request):
    if request.method == 'POST':
        return HttpResponse('Post Method for Registration')
    else:
        return HttpResponse('Post not detected for Registration')
    
def login(request):
    if request.method == 'POST':
        return HttpResponse('Post Method for Login')
    else:
        return HttpResponse('Post not detected for Login')

def books_add(request):
    return render(request, 'books_add.html')