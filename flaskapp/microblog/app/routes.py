from flask import render_template
from app import app 

@app.route('/')
@app.route('/index')
def index():
    user = {'username': 'Sona'}
    posts = [
        {
            'author': {'username': 'Panda'},
            'body': 'Beautiful day in Japan!'
        },
        {
            'author': {'username': 'Sona'},
            'body': 'those Tights are so cute!!'
        }
    ]
    return render_template('index.html', title='Home',user=user, posts=posts)
