import os
from flask import Flask
from flask_mongoengine import MongoEngine
from flask_login import LoginManager
from flask_bootstrap import Bootstrap



db = MongoEngine()
login = LoginManager()
login.login_view = "auth.login"
bootstrap = Bootstrap()

def create_app(config):
    app = Flask(__name__)
    app.config.from_object(config)
    app.config['SECRET_KEY'] = os.getenv("SECRET_KEY")

    db.init_app(app)
    login.init_app(app)
    bootstrap.init_app(app)

    from .main import main as main_bp
    app.register_blueprint(main_bp)

    from .auth import auth as auth_bp
    app.register_blueprint(auth_bp)

    return app
