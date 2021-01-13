from flask import render_template

from . import main


@main.route("/path")
def path():
    return {
        "static_folder": main.static_folder,
        "static_url_path": main.static_url_path
    }


@main.route("/fefe")
def fefe():
    return render_template("main/fefe.html")


@main.route("/")
def index():
    return render_template("main/index.html", flask_token="abc123")
    # return redirect(url_for("main.app"))
