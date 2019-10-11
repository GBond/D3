# -*- coding: utf-8 -*-

from scripts import tabledef
from scripts import forms
from scripts import helpers
from flask import Flask, redirect, url_for, render_template, request, session
import json
import sys
import os

app = Flask(__name__,  static_url_path='')

# Heroku
#from flask_heroku import Heroku
#heroku = Heroku(app)

# ======== Routing =========================================================== #
# -------- Home loan ------------------------------------------------------------- #
@app.route('/', methods=['GET', 'POST'])
def applyHome():
      
        form = forms.LoginForm(request.form)
        if request.method == 'POST':
            name = request.form['username'].lower()
            email = request.form['email']
            phone = request.form['phone']
            amount = request.form['amount']
            year = request.form['year']
            # if form.validate():
            #   if helpers.credentials_valid(username, password):
            #        session['logged_in'] = True
            #        session['username'] = username
            #        return json.dumps({'status': 'Login successful'})
            #    return json.dumps({'status': 'Invalid user/pass'})
            return json.dumps({'status': 'name: ' + name + ' email: ' + email + ' phone: ' + amount + ' year: ' + year })
             
        return render_template('home-loan.html', form=form)



# -------- Signup ---------------------------------------------------------- #
# Future section, not ready
@app.route('/signup', methods=['GET', 'POST'])
def signup():
    
        form = forms.LoginForm(request.form)
        if request.method == 'POST':
            username = request.form['username'].lower()
            password = helpers.hash_password(request.form['password'])
            email = request.form['email']
            if form.validate():
                if not helpers.username_taken(username):
                    helpers.add_user(username, password, email)
                    session['logged_in'] = True
                    session['username'] = username
                    return json.dumps({'status': 'Signup successful'})
                return json.dumps({'status': 'Username taken'})
            return json.dumps({'status': 'User/Pass required'})
        return render_template('login.html', form=form)


# -------- Settings ---------------------------------------------------------- #
# Future section, not ready
@app.route('/settings', methods=['GET', 'POST'])
def settings():
    if session.get('logged_in'):
        if request.method == 'POST':
            password = request.form['password']
            if password != "":
                password = helpers.hash_password(password)
            email = request.form['email']
            helpers.change_user(password=password, email=email)
            return json.dumps({'status': 'Saved'})
        user = helpers.get_user()
        return render_template('settings.html', user=user)
    return redirect(url_for('login'))


# ======== Main ============================================================== #
if __name__ == "__main__":
    app.secret_key = os.urandom(12)  # Generic key for dev purposes only
    app.run(debug=True, use_reloader=True)
