from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def hello_world():
    return render_template('home.html')

@app.route('/acting')
def acting():
	return render_template('home.html', title = 'Acting')

@app.route('/CS')
def compSci():
	return render_template('home.html', title = 'CS Development')

@app.route('/contact')
def contact():
	return render_template('home.html', title = 'Contact')

if __name__ == '__main__':
	app.run(debug = True)