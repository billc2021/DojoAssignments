from django.shortcuts import render, HttpResponse, redirect
from django.contrib import messages
from models import User, Quote, Favorite
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
    return render(request, 'index.html')


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
            request.session['name'] = user.name
            request.session['email'] = srv_email
            request.session['user_id'] = user.id
            return redirect('/quotes')
        else:
            return redirect('/')
    else:
        messages.add_message(request, messages.INFO, ' Bad Login Attempt!')
        return redirect('/')

def register(request):
    srv_name = request.POST['html_name']
    srv_name = srv_name.lower()
    srv_alias = request.POST['html_alias']
    srv_alias = srv_alias.lower()
    srv_email = request.POST['html_email']
    srv_email = srv_email.lower()
    srv_password = request.POST['html_password']
    srv_password = srv_password.lower()
    srv_confirm = request.POST['html_confirm']
    srv_confirm = srv_confirm.lower()
    srv_dob = request.POST['html_dob']
    created_at = dt.now
    updated_at = dt.now
    EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

    is_valid = True

    if len(srv_name) < 1:
        messages.add_message(request, messages.INFO, ' Enter a First Name!')
        is_valid = False

    if len(srv_alias) < 1:
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
        # try:
        new_user = User.objects.create(name=srv_name, alias=srv_alias, email=srv_email, password=srv_password, created_at=created_at, updated_at=updated_at, birth=srv_dob)
        request.session['name'] = srv_name
        request.session['email'] = srv_email

        user = User.objects.get(email=srv_email)
        user_id = user.id
        request.session['user_id'] = user_id
        return redirect('/quotes')
        # except:
        messages.add_message(request, messages.INFO, ' Email already exists!')
            
    return redirect('/')

        

def logout(request):
    request.session.clear()
    return redirect('/')
         
def logout(request):
    request.session.clear()
    return redirect('/')

def quotes(request):
    context = {
        'quotes': Quote.objects.all(),
        'favs': Favorite.objects.all()
    }

    # user_id = request.session['user_id']
    
    # try:
    #     quote_user = User.objects.get(id=user_id)
    #     return redirect('/quotes')
    # except:
    #     messages.add_message(request, messages.INFO, ' No quotes!')

    return render(request, 'quotes.html', context)

def add_quote(request):
    quote = request.POST['html_quote']
    user_id = request.session['user_id']
    quote_by = request.POST['html_quote_by']
    quote_user = User.objects.get(id=user_id)   
    quote = Quote.objects.create(quote=quote, quote_by=quote_by, user=quote_user, updated_at=dt.now(), created_at=dt.now())
    return redirect('/quotes')

def add_fav(request):
    quote_id = request.POST['quote_id']
    quote = Quote.objects.get(id=quote_id)
    user_id = request.session['user_id']
    user = User.objects.get(id=user_id)
    favorites = Favorite.objects.create(user=user, quote=quote)
    return redirect('/quotes')

def remove_fav(request, quote_id):
    d = Favorite.objects.get(id=quote_id)
    d.delete()
      
    # quote = Quote.objects.create(quote=quote, quote_by=quote_by, user=quote_user, updated_at=dt.now(), created_at=dt.now())
    return redirect('/quotes')