import django
from apps.login_and_registration.models import User
import bcrypt


all_users = User.objects.all()

for user in all_users:
    if len(user.password) < 60:
        hashed_password = bcrypt.hashpw(user.password.encode("UTF-8"), bcrypt.gensalt())
        user.password = hashed_password
        user.save()

