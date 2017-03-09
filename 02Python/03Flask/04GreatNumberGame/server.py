from flask import Flask, render_template, request, redirect, session, url_for
import random

app = Flask(__name__)
app.secret_key = "b"

@app.route('/', methods=['POST', 'GET'])
def index():
    
    if 'winning_number' not in session:
        session['winning_number'] = random.randrange(1, 101)
        
    if 'guess' in request.form:
        guess = request.form['guess']
        guess = int(guess)
        if guess == session['winning_number']:
            result = 'WINNER'
            message = '{} was the winning number!'.format(guess)
            return render_template('index.html', result = result, message = message)
        if guess < session['winning_number']:
            result = 'Too Low'
            return render_template('index.html', result = result)
        if guess > session['winning_number']:
            result = 'Too High'
            return render_template('index.html', result = result)
    # else:
    return render_template('index.html') 

@app.route('/reset', methods=['POST'])
def reset():
    session.clear()
    return redirect('/')

app.run(debug=True)