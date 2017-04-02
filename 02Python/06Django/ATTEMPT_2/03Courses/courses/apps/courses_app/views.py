from django.shortcuts import render, redirect
from models import Course
from datetime import datetime as dt

# Create your views here.
def index(request):
    try:
        context = {
            'courses': Course.objects.all()
        }
        return render(request, 'courses_app/index.html', context)
    except:
        return render(request, 'courses_app/index.html')
    

def add_course(request):
    course = Course.objects.create(name=request.POST['course_name'], description=request.POST['course_desc'])
    return redirect('/')

def destroy(request, course_id):
    context = {
        'course': Course.objects.get(id=course_id)
    }
    
    return render(request, 'courses_app/destroy.html', context)

def delete(request, course_id):
    course = Course.objects.get(id=course_id)
    course.delete()
    return redirect('/')