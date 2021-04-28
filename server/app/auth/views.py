from flask import render_template, redirect, url_for, flash, jsonify, request,  current_app
from flask_login import login_user
import datetime
import jwt
from functools import wraps


from . import auth
from .forms import LoginForm
from ..models import User


def token_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        ticket = request.args.get("token")

        if not ticket:
            flash("Credenciales no encontrada.")
            return redirect(url_for("auth.login"))

        print(ticket)
        print(current_app.config['SECRET_KEY'])
        try:
            jwt.decode(ticket, current_app.config['SECRET_KEY'], algorithms=["HS256"])
        except:
            flash("Credenciales inválidas.->")
            return redirect(url_for("auth.login"))
        
        return f(*args, **kwargs)
    return decorated

@auth.route("/private")
@token_required
def private():
    flash("yes yes route.")
    return render_template("auth/private.html")

@auth.route("/login", methods=["GET", "POST"])
def login():
    form = LoginForm()


    if form.validate_on_submit():
        user = User.objects(username=form.username.data).first()

        if user is None:
            flash("Credenciales inválidas.<-")
            return redirect(url_for("auth.login"))

        login_user(user)
        token = jwt.encode({'user' : user.username, 'exp' : datetime.datetime.utcnow() + datetime.timedelta(minutes=280)}, current_app.config['SECRET_KEY'], algorithm="HS256")
        flash(token)
        
        flash("Ha iniciado sesión como {}.".format(user.username))
        return redirect(url_for("auth.login"))
        

    return render_template("auth/login.html", form=form)
