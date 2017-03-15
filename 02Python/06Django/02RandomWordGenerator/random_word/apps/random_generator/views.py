from django.shortcuts import render, redirect
import random, string

# Create your views here.
def index(request):
    if 'count' not in request.session:
        request.session['count'] = 1
    return render(request, 'index.html')

def generate(request):
    pass 
    if 'count' in request.session:
        request.session['count'] += 1
        word = ''.join([random.choice(string.ascii_letters + string.digits) for n in xrange(14)])
        request.session['word'] = word
    return redirect('/')

def reset(request):
    request.session.clear()
    return redirect('/')