from django.shortcuts import render, redirect, reverse
from django.contrib import messages
from models import User
import re, bcrypt

# Create your views here.
def index(request):
    return render(request, 'login_app/index.html')

def register(request):
    first_name = request.POST['first_name']
    last_name = request.POST['last_name']
    email = request.POST['email']
    password = request.POST['password']
    confirm = request.POST['confirm']
    EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
    is_valid = True

    if len(first_name) < 1:
        messages.add_message(request, messages.ERROR, ' Please enter a first name')
        is_valid = False
    if len(last_name) < 1:
        messages.add_message(request, messages.ERROR, ' Please enter a last name')
        is_valid = False
    if not EMAIL_REGEX.match(email):
        messages.add_message(request, messages.ERROR, ' Invalid email entered')
        is_valid = False
    if len(password) < 8:
        messages.add_message(request, messages.ERROR, ' Password too short')
        is_valid = False
    if confirm != password:
        messages.add_message(request, messages.ERROR, ' Password and confirm password do not match')
        is_valid = False

    if is_valid:
        try:
            hashed_password = bcrypt.hashpw(password.encode(), bcrypt.gensalt())
            user = User.objects.create(first_name=first_name, last_name=last_name, email=email,password=hashed_password)
            request.session['user_id'] = user.id
            request.session['first_name'] = user.first_name
            request.session['email'] = user.email
            return redirect(reverse('secrets:index'))
        except:
            messages.add_message(request, messages.ERROR, ' Email already exists')
    
    return redirect(reverse('login:index'))

def login(request):
    email = request.POST['email']
    password = request.POST['password']

    try:
        user = User.objects.get(email=email)
        if user.password != bcrypt.hashpw(password.encode("UTF-8"), user.password.encode("UTF-8")):
            messages.add_message(request, messages.ERROR, ' Bad login attempt')
            return redirect(reverse('secrets:index'))
        else:
            request.session['user_id'] = user.id
            request.session['first_name'] = user.first_name
            request.session['email'] = user.email
            return redirect(reverse('secrets:index'))
    except:
        messages.add_message(request, messages.ERROR, ' Bad login attempt')
    return redirect(reverse('login:index'))

def logout(request):
    request.session.clear()
    return redirect(reverse('login:index'))
    
