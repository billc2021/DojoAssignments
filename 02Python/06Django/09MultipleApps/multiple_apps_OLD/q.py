import django 
from apps.multi_apps.models import User, Likes, Secret

# for u in User.objects.all():
# u = User.objects.filter(email='banks@brad.com')
us = User.objects.all().count()
# for u in us:
#     print u.first_name

ls = Likes.objects.all().count().order_by(user)
print ls