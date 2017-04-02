from django.shortcuts import render, redirect, HttpResponse
from django.core.urlresolvers import reverse

# Create your views here.
def index(request):
    return render(request, 'dninjas/index.html')

def ninjas(request):
    return render(request, 'dninjas/ninjas.html')

def ninja(request, color):
    if color == 'blue':
        context = {
            "turtle" : "leonardo"
        }
    elif color == 'orange':
        context = {
            "turtle" : "michelangelo"
        }
    elif color == 'red':
        context = {
            "turtle" : "raphael"
        }
    elif color == 'purple':
        context = {
            "turtle" : "donatello"
        }
    else:
        context = {
            "turtle" : "april"
        }
    return render(request, 'dninjas/ninja.html', context)
