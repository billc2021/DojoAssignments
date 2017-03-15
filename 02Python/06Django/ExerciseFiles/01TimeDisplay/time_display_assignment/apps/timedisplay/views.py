from django.shortcuts import render, HttpResponse
from datetime import datetime as dt

# Create your views here.
def index(request):
    current_time = dt.now
    return render(request, 'index.html', {'time':dt.now()})
