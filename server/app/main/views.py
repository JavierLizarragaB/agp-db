from flask import render_template, current_app

from . import main


@main.route("/")
def index():
    return render_template("main/index.html", flask_token=current_app.config.get("FLASK_TOKEN"))


@main.route("/path")
def path():
    return {
        "static_folder": main.static_folder,
        "static_url_path": main.static_url_path
    }


@main.errorhandler(404)
def pass_not_found_to_client():
    return render_template("main/index.html", flask_token=current_app.config.get("FLASK_TOKEN"))
