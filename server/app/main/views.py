from flask import render_template, current_app

from . import main


def send_react_spa():
    """Return the react index.html with a token from backend."""
    return render_template("main/index.html", flask_token=current_app.config.get("FLASK_TOKEN"))


@main.route('/', defaults={"path": ''})
@main.route('/<path:path>')
def index(path):
    return send_react_spa()


@main.route("/path")
def path():
    return {
        "static_folder": main.static_folder,
        "static_url_path": main.static_url_path
    }
