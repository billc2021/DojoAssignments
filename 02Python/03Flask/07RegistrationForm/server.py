from flask import Flask, render_template, redirect, request, session, flash
import re

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

app = Flask(__name__)
app.secret_key = "secret!"

@app.route('/', methods=['GET'])
def index():
  return render_template("index.html")

@app.route('/process', methods=['POST'])
def submit():
    if len(request.form['email']) < 1:
        flash("Email cannot be blank!")
    elif not EMAIL_REGEX.match(request.form['email']):
        flash("Invalid Email Address!")
    elif len(request.form['first_name']) < 1:
        flash("First name must be filled out")
    elif not request.form['first_name'].isalpha():
        flash("First Name can only contain letters")
    elif len(request.form['last_name']) < 1:
        flash("Last name must be filled out")
    elif not request.form['last_name'].isalpha():
        flash("Last Name can only contain letters")
    elif request.form['password'] != request.form['confirm']:
        flash("Passwords don't match")
    else:
        flash("Success!")
    return redirect('/')


app.run(debug=True)
