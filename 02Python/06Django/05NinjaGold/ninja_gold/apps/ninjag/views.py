from django.shortcuts import render, HttpResponse, redirect
import random

# Create your views here.
def index(request):
    if 'gold' not in request.session:
        gold = 0
        request.session['gold'] = gold
        request.session['messages'] = []
    return render(request, 'index.html')

def process_money(request):
    gold_pieces_won = 0
    location = request.POST['building']
    if location == 'farm':
        gold = request.session['gold']
        gold_pieces_won = random.randrange(10, 20)
        gold += gold_pieces_won
        message = request.session['messages']
        message.insert(0, 'You earned {} pieces of gold from {}!'.format(gold_pieces_won, location))
        request.session['messages'] = message
        request.session['gold'] = gold
    
    if location == 'cave':
        gold = request.session['gold']
        gold_pieces_won = random.randrange(5, 10)
        gold += gold_pieces_won
        message = request.session['messages']
        message.insert(0, 'You earned {} pieces of gold from {}!'.format(gold_pieces_won, location))
        request.session['messages'] = message
        request.session['gold'] = gold

    if location == 'casino':
        gold = request.session['gold']
        gold_pieces_won = random.randrange(0, 50)
        win_or_loose = gold_pieces_won = random.randrange(1, 11)
        message = request.session['messages']
        if win_or_loose <= 5:
            gold_pieces_won *= -1
            gold += gold_pieces_won
            luck = 'lost' 
        else:
            luck = 'earned'
            gold += gold_pieces_won
        message.insert(0, 'You {} {} pieces of gold from {}!'.format(luck, gold_pieces_won, location))
        request.session['gold'] = gold
        request.session['messages'] = message

    return redirect('/')