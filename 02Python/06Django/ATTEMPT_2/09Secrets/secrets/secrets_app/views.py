from django.shortcuts import render, redirect, reverse
from django.contrib import messages
from models import Secret, Like
from django.db.models import Count
from login_app.models import User 

# Create your views here.
def index(request):
    try:
        likes = Like.objects.all()
        flags = []
        for like in likes:
            if like.user_id == request.session['user_id']:
                flag = 'false'
                secret = like.secret_id
            else:
                flag = 'true'
                secret = like.secret_id

            like_flag = {
                'flag': flag, 'secret': secret 
                }

            flags.append(like_flag)
            
        context = {
            'secrets': Secret.objects.all().annotate(total_likes=Count('secrets__id')).order_by('-created_at')[:5],
            'flags': flags
            }
        return render(request, 'secrets_app/index.html', context)
    except:
        messages.add_message(request, messages.INFO, 'No Secrets')
    return render(request, 'secrets_app/index.html')

def post_secret(request):
    secret = request.POST['secret']
    user = User.objects.get(id=request.session['user_id'])
    try:
        Secret.objects.create(secret=secret, user=user)
    except:
        messages.add_message(request, messages.ERROR, 'Lucy, we have a problem')
    return redirect(reverse('secrets:index'))

def most_popular(request):
    context = {
        'secrets': Secret.objects.all().annotate(like_count=Count('secrets__id')).order_by('-created_at')
    }

    return render(request, 'secrets_app/popular.html', context)
    # return render(request, 'secrets_app/popular.html')

def likes(request, secret_id):
    secret = Secret.objects.get(id=secret_id)
    user = User.objects.get(id=request.session['user_id'])
    like = Like.objects.create(secret=secret, user=user)
    parameters = {
        'secret_id': secret_id
    }
    return redirect(reverse('secrets:index'))

def delete(request, secret_id):
    d = Secret.objects.filter(id=secret_id)
    d.delete()
    return redirect(reverse('secrets:index'))