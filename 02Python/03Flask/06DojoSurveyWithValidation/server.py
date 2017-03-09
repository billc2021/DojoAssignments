from flask import Flask, render_template, request, redirect, flash
app = Flask(__name__)
app.secret_key = 'KeepItSecretKeepItSafe'

@app.route('/')
def index():

    return render_template('index.html')

@app.route('/result', methods=['POST'])
def result():
    if len(request.form['name']) < 1:
        flash("Name field cannot be empty!")
        return redirect('/')
    if len(request.form['comment']) < 1:
        flash("Comment field cannot be empty!")
        return redirect('/')
    if len(request.form['comment']) > 120:
        flash("Too many characters in the comment field")
        return redirect('/')

    name = request.form['name']
    location = request.form['location']
    language = request.form['language']
    comment = request.form['comment']
    return render_template('result.html', name = name, location = location, comment = comment, language = language)

@app.route('/error')
def error():
    return render_template('error.html')

    
app.run(debug=True)