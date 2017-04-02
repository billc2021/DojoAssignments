from django.shortcuts import render, redirect, reverse
from models import Product
from django.contrib import messages

# Create your views here.
def pets(request):
    try:
        context = {
            'products': Product.objects.all()
        }
        return render(request, 'restfull_app/index.html', context)
    except:
        messages.add_message(request, messages.INFO, 'No Products')
        return render(request, 'restfull_app/index.html')

def show(request, id):
    print 'ID is {}'.format(id)
    context = {
        'product': Product.objects.get(id=id)
    }
    return render(request, 'restfull_app/show.html', context)

def new(request):
    return render(request, 'restfull_app/new.html')

def edit(request, id):
    if request.method == 'POST':
        name = request.POST['name']
        desc = request.POST['desc']
        price = request.POST['price']
        product = Product.objects.get(id=id)
        product.name = name
        product.desc = desc
        product.price = price
        product.save()
        product_id = {'id': id}
        return redirect(reverse('restfull:show', kwargs=product_id))
    else:
        context = {
            'product': Product.objects.get(id=id)
        }
        return render(request, 'restfull_app/edit.html', context)

def create(request):
    if request.method == 'POST':
        name = request.POST['name']
        # print 'name is = {}'.format(name)
        desc = request.POST['desc']
        # print 'desc is = {}'.format(desc)
        price = request.POST['price']
        # print 'price is = {}'.format(price)
        product = Product.objects.create(name=name, desc=desc, price=price)
        return redirect(reverse('restfull:pets'))
    else:
        return render(request, 'restfull_app/new.html')

def update(request, id):
    return render(request, 'restfull_app/edit.html')

def destroy(request, id):
    pass
