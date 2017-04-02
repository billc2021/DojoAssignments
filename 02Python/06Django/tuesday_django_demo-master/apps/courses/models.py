from __future__ import unicode_literals

from django.db import models
from ..login_and_registration.models import User

class Course(models.Model):
    name = models.CharField(max_length=64)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class Enrollment(models.Model):
    # column header will become 'course_id'
    course = models.ForeignKey(Course, related_name='enrollments')
    # column header will become 'student_id'
    student = models.ForeignKey(User)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)