from django.shortcuts import render, HttpResponse, redirect
from django.contrib import messages
from models import User, Secret, Like
import re
from datetime import datetime as dt
from django.db.models import Count
from django.utils.timesince import timesince

# Create your views here.
def index(request):
    if 'user_id' not in request.session:
        request.session['user_id'] = ""
    if 'email' not in request.session:
        request.session['email'] = ""
    return render(request, 'secrets/index.html')

def login(request):
    if request.method == 'POST':
        login = True
        srv_password = request.POST['html_password']
        srv_email = request.POST['html_email']

        # LENGTH OF EMAIL ADDRESS CHECKED
        if len(srv_email) < 1:
            messages.add_message(request, messages.INFO, ' Bad Login Attempt!')
            login = False
            return redirect('/')

        # LENGTH OF PASSWORD CHECKED
        if len(srv_password) < 8:
            messages.add_message(request, messages.INFO, ' Bad Login Attempt!')
            login = False
            return redirect('/')
        # SERVER AND DATABASE PASSWORDS CHECKED AGAINST EACH OTHER
        else:
            user = User.objects.get(email=srv_email)
            if srv_password != user.password:
                messages.add_message(request, messages.INFO, ' Bad Login Attempt!')
                login = False
                return redirect('/')

        if login == True:
            request.session['first_name'] = user.first_name
            request.session['email'] = srv_email
            request.session['user_id'] = user.id
            return redirect('/secrets')
        else:
            return redirect('/')
    else:
        messages.add_message(request, messages.INFO, ' Bad Login Attempt!')
        return redirect('/')

def register(request):
    srv_first_name = request.POST['html_first_name']
    srv_first_name = srv_first_name.lower()
    srv_last_name = request.POST['html_last_name']
    srv_last_name = srv_last_name.lower()
    srv_email = request.POST['html_email']
    srv_email = srv_email.lower()
    srv_password = request.POST['html_password']
    srv_password = srv_password.lower()
    srv_confirm = request.POST['html_confirm']
    srv_confirm = srv_confirm.lower()
    created_at = dt.now
    updated_at = dt.now
    EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

    is_valid = True

    if len(srv_first_name) < 1:
        messages.add_message(request, messages.INFO, ' Enter a First Name!')
        is_valid = False

    if len(srv_last_name) < 1:
        messages.add_message(request, messages.INFO, ' Enter a Last Name!')
        is_valid = False

    if len(srv_email) < 1:
        messages.add_message(request, messages.INFO, ' Please Enter an Email Address!')
        is_valid = False

    if not EMAIL_REGEX.match(srv_email):
        messages.add_message(request, messages.INFO, ' Invalid Email Entered!')
        is_valid = False

    if len(srv_password) < 8:
        messages.add_message(request, messages.INFO, ' Bad Password!')
        is_valid = False

    if len(srv_confirm) < 8:
        messages.add_message(request, messages.INFO, ' Bad Confirm Password!')
        is_valid = False

    if srv_password != srv_confirm:
        messages.add_message(request, messages.INFO, ' Passwords don\'t match!')
        is_valid = False

    if is_valid:
        try:
            new_user = User.objects.create(first_name=srv_first_name, last_name=srv_last_name, email=srv_email, password=srv_password, created_at=created_at, updated_at=updated_at)
            request.session['first_name'] = srv_first_name
            request.session['email'] = srv_email

            user = User.objects.get(email=srv_email)
            user_id = user.id
            request.session['user_id'] = user_id
            return redirect('/secrets')
        except:
            messages.add_message(request, messages.INFO, ' Email already exists!')

    return redirect('/')



def logout(request):
    request.session.clear()
    return redirect('/')

def secrets(request):
    secrets = Secret.objects.all().annotate(like_count=Count('secret_liked__id')).order_by('-created_at')[:5]
    user_id = request.session['user_id']
    print user_id
    likes = Like.objects.exclude(user__id=user_id)

    now = dt.now().time
    context = {
        'secrets': secrets,
        'likes': likes,
        'now': now,
    }
    return render(request, 'secrets/secrets.html', context)

def logout(request):
    request.session.clear()
    return redirect('secrets:index')

def post_secret(request):
    server_secret = request.POST['html_secret']
    user_id = request.session['user_id']
    secret_user = User.objects.get(id=user_id)

    secret_to_post = Secret.objects.create(secret=server_secret, user=secret_user)
    return redirect('/secrets')

def like(request):
    if request.method == 'POST':
        secret_id = request.POST['html_secret_id']
    if request.method == 'GET':
        secret_id = request.GET
    user_id = request.session['user_id']
    secret_user = User.objects.get(id=user_id)
    secret = Secret.objects.get(id=secret_id)
    like = Like.objects.create(user=secret_user, secret=secret)
    return redirect('/secrets')

def most_popular(request):
    secrets = Secret.objects.all().annotate(like_count=Count('secret_liked__id')).order_by('-created_at')
    context = {
        'secrets': secrets
    }

    return render(request, 'secrets/popular.html',context)

def delete(request, secret_id):
    d = Secret.objects.filter(id=secret_id)
    d.delete()
    return redirect('/secrets')

def back(request):
    return redirect('/secrets')
