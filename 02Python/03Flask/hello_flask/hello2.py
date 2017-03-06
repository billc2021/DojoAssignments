from flask import Flask, render_template  
                                          
app = Flask(__name__)                     
                                          
@app.route('/')
def hello_world():
  return render_template('index.html', name="Jay")    # Render the template and return it!

@app.route('/success')
def success():
  return render_template('success.html')

app.run(debug=True)                       # Run the app in debug mode.