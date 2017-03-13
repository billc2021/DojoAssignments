from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/ninja/')
def ninja():
    return render_template('ninjas.html')

@app.route('/ninja/<color>')
def ninja_color(color):
    turtle = ""
    if color == 'blue':
        return render_template('leo.html')
    elif color == 'orange':
        return render_template('mich.html')
    elif color == 'red':
        return render_template('ralph.html')
    elif color == 'purple':
        return render_template('don.html')
    else:
        return render_template('april.html')
    

app.run(debug=True)