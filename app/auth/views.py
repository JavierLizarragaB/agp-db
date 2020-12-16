from flask import render_template, redirect, url_for, flash
from flask_login import login_user

from . import auth
from .forms import LoginForm
from ..models import User




@auth.route("/login", methods=["GET", "POST"])
def login():
    form = LoginForm()


    if form.validate_on_submit():
        user = User.objects(username=form.username.data).first()

        if user is None:
            flash("Credenciales inválidas.")
            return redirect(url_for("auth.login"))

        login_user(user)
        flash("Ha iniciado sesión como {}.".format(user.username))
        return redirect(url_for("main.index"))
        

    return render_template("auth/login.html", form=form)
