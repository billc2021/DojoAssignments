from django.shortcuts import render, redirect, HttpResponse

# Create your views here.
def index(request):
    if 'count' not in request.session:
        request.session['count'] = 1
    return render(request, 'survey/index.html') 

def result(request):
    return render(request, 'survey/result.html')

def process(request):
    if request.method == 'GET':
        return HttpResponse('Method is GET')
    elif request.method == 'POST':
        request.session['count'] +=1
        request.session['server_name'] = request.POST['html_name']
        request.session['loation'] = request.POST['html_location']
        request.session['language'] = request.POST['html_language']
        request.session['comment'] = request.POST['html_comment']
        return redirect('survey:result')

def back(request):
    return redirect('survey:index')