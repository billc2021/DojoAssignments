from django.shortcuts import render, redirect, HttpResponse

# Create your views here.
def index(request):
    return render(request, 'index.html')

def ninjas(request):
    return render(request, 'ninjas.html')

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
    return render(request, 'ninja.html', context)
