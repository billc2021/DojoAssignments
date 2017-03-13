from flask import Flask, request, redirect, render_template, session, flash
from mysqlconnection import MySQLConnector
import re
from datetime import datetime as dt

app = Flask(__name__)
app.secret_key = "secret"
mysql = MySQLConnector(app, 'walldb')

email_regex = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

@app.route('/')
def index():
    if 'user_id' in session:
        return redirect('/board')
    return render_template('index.html')

@app.route('/login')
def login():
    if 'user_id' in session:
        return redirect('/board')
    return redirect('/')

@app.route('/auth', methods=['POST'])
def auth():
    email = request.form['email']
    password = request.form['password']
    parameters = {}
    parameters['email'] = email
    users = mysql.query_db('select * from users where email = :email', parameters)
    if len(users) == 1:
        user = users[0]
        if user['password'] == password:
            setup_session(user['id'], user['first_name'], user['first_name'], user['email'])
            return redirect('/')
    
    flash('bad login, please try again')
    return redirect('/')

@app.route('/register', methods=['POST'])
def register():
    is_valid = True

    first_name = request.form['first_name']
    last_name = request.form['last_name']
    email = request.form['email']
    password = request.form['password']
    confirm = request.form['confirm']

    if email_regex.search(email) is None:
        flash('bad email address')
        is_valid = False
    if len(password) < 8:
        flash('password must be 8 characters or longer')
        is_valid = False
    if password != confirm:
        flash('passwords do not match')
        is_valid = False
        
    if is_valid:
        parameters = {
            'first_name': first_name,
            'last_name': last_name,
            'email': email,
            'password': password,
            'created_at': dt.now(),
            'updated_at': dt.now()
        }
        create_user_sql = 'insert into users (first_name,last_name, email, password, created_at, updated_at) values (:first_name, :last_name, :email, :password, :created_at, updated_at)'
        user_id = mysql.query_db(create_user_sql, parameters)
        setup_session(user_id, first_name, last_name, email)

        return redirect('/board')
    else:
        return redirect('/')

@app.route('/board')
def board():
    messages = []
    comments = []
    messages = mysql.query_db('select users.first_name, users.last_name, messages.message, messages.created_at as message_at, messages.id from messages left join users on users.id = messages.user_id')
    # for message in messages:
    #     messages.append(message['message'])
    #     comments.append(message['comment'])
    comments = mysql.query_db('select comments.comment, users.first_name, users.last_name, comments.id, comments.created_at as comment_at, comments.message_id, comments.user_id from comments join users on comments.user_id = users.id')
    print "Messages are ==> {}".format(messages)
    print "=======>"
    print "Comments are ==> {}".format(comments)
    return render_template('board.html', messages = messages, comments = comments) 

@app.route('/logout', methods=['POST', 'GET'])
def logout():
    session.clear()
    return redirect('/')

@app.route('/post_msg', methods=['POST'])
def post_msg():
    message = request.form['new_message']
    if len(message) > 0:
        user_id = session['user_id']
        parameters = {
            'message': message,
            'created_at': dt.now(),
            'updated_at': dt.now(),
            'user_id': user_id
        }
        message_to_post_sql = 'insert into messages (message, created_at, updated_at, user_id) values (:message, :created_at, updated_at, :user_id)'
        message_to_post = mysql.query_db(message_to_post_sql, parameters)
        # session['message_id'] = message_id
    flash('please enter a message before submittng')
    return redirect('/board')

@app.route('/post_comment', methods=['POST'])
def post_comment():
    comment = request.form['new_comment']
    if len(comment) > 0:
        user_id = session['user_id']
        message_id = request.form['message_id']
        parameters = {
            'comment': comment,
            'created_at': dt.now(),
            'updated_at': dt.now(),
            'user_id': user_id,
            'message_id': message_id
        }
        comment_to_post_sql = 'insert into comments (comment, created_at, updated_at, user_id, message_id) values (:comment, :created_at, updated_at, :user_id, :message_id)'
        comment_post = mysql.query_db(comment_to_post_sql, parameters)
    flash('please enter a comment before submittng')
    return redirect('/board')

@app.route('/delete', methods=['POST'])
def delete():
    comment_created = request.form['commented_at']
    if dt.now() - comment_created < 30:
        comment_id = request.form['commentID']
        parameters = {
            'id': comment_id,
        }
        delete_sql = 'delete from comments where id = :id'
        delete_statement = mysql.query_db(delete_sql, parameters)
        return redirect('/board')
    flash('Comment is too old to be deleted')

def setup_session(user_id, first_name, last_name, email):
    session['user_id'] = user_id
    session['first_name'] = first_name
    session['last_name'] = last_name
    session['email'] = email
    

app.run(debug=True)