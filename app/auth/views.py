from flask import render_template, redirect, url_for, flash
from flask_login import login_user

from . import auth
from .forms import LoginForm
from ..models import User




@auth.route("/login", methods=["GET", "POST"])
def login():
    form = LoginForm()

    if form.validate_on_submit():
        
        if form.data.username == "pescoboza" and form.data.password == "heriberto123":

            user = User.create_new_user("pescoboza", "heriberto123")
            login_user(user)
            flash("You logged in.")
            return redirect(url_for("main.index"))
        else:
            flash("Invalid login.")

    return render_template("auth/login.html")
