from flask import Flask, render_template, request, redirect, session, url_for
app = Flask(__name__)
app.secret_key = "aRandomString"

@app.route('/')
def index():
    # if 'count' in session:
    #     session['count'] += 1
    # else:
    #     session['count'] = 0
    session['count'] += 1
    return render_template('index.html')

@app.route('/count', methods=['GET', 'POST'])
def count():
    session['count'] += 1
    return redirect(url_for('index'))

@app.route('/reset', methods=['GET', 'POST'])
def reset():
    session['count'] = -1
    return redirect(url_for('index'))
    
app.run(debug=True)