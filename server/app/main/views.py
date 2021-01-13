from flask import render_template

from . import main


@main.route("/")
def index():
    return render_template("main/index.html", flask_token="abc123")


@main.route("/path")
def path():
    return {
        "static_folder": main.static_folder,
        "static_url_path": main.static_url_path
    }
