from django.shortcuts import render, redirect, HttpResponse
import re
from models import Email
from django.contrib import messages


# Create your views here.
def index(request):
    return render(request, 'email_app/index.html')

def validate(request):
    if request.method == 'POST':
        email = request.POST['email']
        if re.match(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$', email):
            email = Email.objects.create(email_address=email)
            messages.add_message(request, messages.INFO, 'The email address your entered ({}) is a VALID email address! Than You!'.format(request.POST['email']))
            return redirect('/success')
        else:
            messages.add_message(request, messages.ERROR, 'Email in invalid')
            return redirect('/')

def success(request):
    context = {'emails': Email.objects.all()}
    return render(request, 'email_app/success.html', context)