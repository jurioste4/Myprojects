from flask import render_template
from app import app 
from app.forms import LoginForm

@app.route('/')
@app.route('/login')
def login():
    form = LoginForm()
    
    return render_template('login.html', title='Sign In', form=form)
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


