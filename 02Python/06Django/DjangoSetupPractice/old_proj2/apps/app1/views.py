from django.shortcuts import render, HttpResponse

# Create your views here.
def index(request):
    return HttpResponse('Index page for what should be proj3')