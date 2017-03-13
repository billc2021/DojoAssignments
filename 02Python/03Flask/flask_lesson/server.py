from flask import Flask, render_template, request, redirect, session, flash
app = Flask(__name__)
app.secret_key = 'thisisakey'

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/indiana')
def indiana():
    history = session['trip_history']
    history.insert(0, 'I visited Indiana')
    session['trip_history'] = history
    return render_template('indiana.html')

@app.route('/california')
def california():
    history = session['trip_history']
    history.insert(0, 'I visited California')
    session['trip_history'] = history
    return render_template('california.html')

@app.route('/newyork')
def newyork():
    history = session['trip_history']
    history.insert(0, 'I visited New York')
    session['trip_history'] = history
    return render_template('newyork.html')

@app.route('/login')
def login():
    return render_template('login.html')

@app.route('/auth', methods=['POST'])
def auth():
    email = request.form['html_email']
    password = request.form['html_password']
    session['email'] = email
    session['user_name'] = 'some_user'
    session['trip_history'] = []
    if email == 'user@gmail.com' and password == 'a':
        return redirect('/')
    else:
        return redirect('/login')
@app.route('/logout')
def logout():
    session.clear()
    return redirect('/')

app.run(debug=True)