from django.shortcuts import render, HttpResponse, redirect, reverse
from django.contrib import messages
from models import Course, Enrollment
from ..login_and_registration.models import User
import bcrypt

def index(request):
    context = {}
    if 'user_id' in request.session:
        student_id = request.session['user_id']
        context = {
            'context_user_email': request.session['user_email'],
            'all_current_courses': Course.objects.exclude(enrollments__student_id=student_id).order_by('-created_at'),
            'all_my_courses': Enrollment.objects.filter(student_id=student_id)
        }
    return render(request, 'courses/index.html', context)


def create(request):
    server_name = request.POST['html_name']
    if len(server_name) == 0:
        messages.add_message(request, messages.ERROR, 'COURSE MUST HAVE A NAME!')
    else:
        # creating a course in the database
        Course.objects.create(name=server_name)
    return redirect('courses:home')


def enroll(request, class_id):
    # logged_in_user_id = request.session['user_id']
    # student = User.objects.get(id=logged_in_user_id)
    # course = Course.objects.get(id=class_id)
    # Enrollment.objects.create(course=course, student=student)
    # Enrollment.objects.create(course_id=course.id, student_id=student.id)
    
    Enrollment.objects.create(course_id=class_id, student_id=request.session['user_id'])
    return redirect('courses:home')

def drop(request, class_id):
    # first form
    url = reverse('courses:remove', class_id=class_id, student_id=request.session['user_id'])
    
    # second form
    parameters = {
        'student_id': request.session['user_id'],
        'class_id': class_id
    }
    url = reverse('courses:remove', kwargs=parameters)
    
    # reverse is short for 'reverse lookup'
    # reverse takes in two arguments:
    #   1) named route
    #   2) a dictionary of route parameters
    print "========================================="
    print "->", url
    print "-----------------------------------------"
    return redirect(url)

def remove_from_class(request, class_id, student_id):
    Enrollment.objects.filter(course_id=class_id, student_id=request.session['user_id']).delete()
    return redirect('courses:home')