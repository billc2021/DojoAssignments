from django.shortcuts import render, redirect, HttpResponse
from django.contrib import messages
from models import User
from datetime import datetime as dt
import re, bcrypt

# Create your views here.
def success(request):
    return render(request, 'login_app/success.html')

def index(request):
    if 'user_id' not in request.session:
        request.session['user_id'] = ""
    if 'email' not in request.session:
        request.session['email'] = ""
    return render(request, 'login_app/index.html')

def login(request):
    if request.method == 'POST':
        login = True
        password = request.POST['html_password']
        email = request.POST['html_email']
        
        try: 
            user = User.objects.get(email=email)
            print user.password
            if user.password != bcrypt.hashpw(password.encode("UTF-8"), user.password.encode("UTF-8")):
                messages.add_message(request, messages.INFO, ' Bad Login Attempt!')
                login = False
                return redirect('/')
            else:
                request.session['first_name'] = user.first_name
                request.session['email'] = email
                request.session['user_id'] = user.id
                messages.add_message(request, messages.INFO, 'You have successfully logged in')
                return redirect('/success')
        except:
            messages.add_message(request, messages.INFO, 'Bad Login Attempt')
            return redirect('/')
    else:
        messages.add_message(request, messages.INFO, ' Bad Login Attempt!')
        return redirect('/')

def register(request):
    is_valid = True
    first_name = request.POST['html_first_name']
    first_name = first_name.lower()
    last_name = request.POST['html_last_name']
    last_name = last_name.lower()
    email = request.POST['html_email']
    email = email.lower()
    password = request.POST['html_password']
    confirm = request.POST['html_confirm']

    EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
    is_valid = True
    if len(first_name) < 1:
        messages.add_message(request, messages.INFO, ' Enter a First Name!')
        is_valid = False

    if len(last_name) < 1:
        messages.add_message(request, messages.INFO, ' Enter a Last Name!')
        is_valid = False

    if len(email) < 1:
        messages.add_message(request, messages.INFO, ' Please Enter an Email Address!')
        is_valid = False

    if not EMAIL_REGEX.match(email):
        messages.add_message(request, messages.INFO, ' Invalid Email Entered!')
        is_valid = False

    if len(password) < 8:
        messages.add_message(request, messages.INFO, ' Bad Password!')
        is_valid = False
        
    if len(confirm) < 8:
        messages.add_message(request, messages.INFO, ' Bad Confirm Password!')
        is_valid = False
    
    if password != confirm:
        messages.add_message(request, messages.INFO, ' Passwords don\'t match!')
        is_valid = False
        
    if is_valid:
        try:
            hashed_password = bcrypt.hashpw(password.encode(), bcrypt.gensalt())
            new_user = User.objects.create(first_name=first_name, last_name=last_name, email=email, password=hashed_password)
            request.session['first_name'] = first_name
            request.session['email'] = email

            user = User.objects.get(email=email)
            user_id = user.id
            request.session['user_id'] = user_id
            messages.add_message(request, messages.INFO, 'You have registered successfully')
            return redirect('/success')
        except:
            messages.add_message(request, messages.INFO, ' Email already exists!')
            
    return redirect('/')

def success(request):
    context = {
        'user': User.objects.get(id=request.session['user_id'])
    }
    return render(request, 'login_app/success.html', context)

def logout(request):
    request.session.clear()
    return redirect('/')