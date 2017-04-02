from django.shortcuts import render, redirect
from models import Course
from datetime import datetime as dt
from django.core.urlresolvers import reverse
from ..login_app.models import User
from django.db.models import Count

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
    user = User.objects.get(id=request.session['user_id'])
    course = Course.objects.create(name=request.POST['course_name'], description=request.POST['course_desc'], user=user)
    return redirect('courses:index')

def destroy(request, course_id):
    context = {
        'course': Course.objects.get(id=course_id)
    }
    
    return render(request, 'courses_app/destroy.html', context)

def delete(request, course_id):
    course = Course.objects.get(id=course_id)
    course.delete()
    return redirect(reverse('courses:index'))

def users_courses(request):
    context = {
        'users': User.objects.all(),
        'courses': Course.objects.all()
    }
    return render(request, 'courses_app/users.html', context)

def add_user(request):
    if request.method == 'POST':
        course_id = request.POST['course_id']
        # user_id = request.POST['user_id']
        # course.user = User.objects.get(id=user_id)
        course = Course.objects.get(id=course_id)
        course.total_users = course.total_users + 1
        course.save()
    return redirect(reverse('courses:users_courses'))