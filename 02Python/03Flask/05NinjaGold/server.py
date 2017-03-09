from flask import Flask, render_template, request, redirect, session, url_for
import random

app = Flask(__name__)
app.secret_key = "ninjaGold"

@app.route('/')
def index():
    if 'gold' not in session:
        gold = 0
        session['gold'] = gold
        session['messages'] = []
    return render_template('index.html')

@app.route('/process_money', methods=['POST'])
def process_money():
    gold_pieces_won = 0
    location = request.form['building']
    
    if location == 'farm':
        gold = session['gold']
        gold_pieces_won = random.randrange(10, 20)
        gold += gold_pieces_won
        session['gold'] = gold
        message = session['messages']
        message.insert(0, 'You earned {} gold from {}!'.format(location, gold_pieces_won))
        session['messages'] = message

    if location == 'cave':
        gold = session['gold']
        gold_pieces_won = random.randrange(5, 10)
        gold += gold_pieces_won
        session['gold'] = gold
        message = session['messages']
        message.insert(0, 'You earned {} gold from {}!'.format(location, gold_pieces_won))
        session['messages'] = message

    if location == 'house': 
        gold = session['gold']
        gold_pieces_won = random.randrange(2, 5)
        gold += gold_pieces_won
        session['gold'] = gold
        message = session['messages']
        message.insert(0, 'You earned {} gold from {}!'.format(location, gold_pieces_won))
        session['messages'] = message

    if location == 'casino':
        gold = session['gold']
        gold_pieces_won = random.randrange(0, 50)
        win_or_loose = gold_pieces_won = random.randrange(1, 11)
        message = session['messages']
        if win_or_loose <= 5:
            gold_pieces_won *= -1
            gold += gold_pieces_won
            message.insert(0, 'You lost {} gold from {}!'.format(location, gold_pieces_won))
        else:
            message.insert(0, 'You earned {} gold from {}!'.format(location, gold_pieces_won))
            gold += gold_pieces_won
        session['gold'] = gold
        message = session['messages']
        
        session['messages'] = message
        
    return redirect('/')

app.run(debug=True)