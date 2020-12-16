from flask import Flask, register


def create_app(config):
    app = Flask()

    from main import main as main_bp
    app.register_blueprint(main_bp)

    return app
