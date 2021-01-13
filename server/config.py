import os


class Config:
    ENV = "production"
    DEBUG = False
    SECRET_KEY = os.getenv("SECRET_KEY", "secret")
    FLASK_TOKEN = os.getenv("FLASK_TOKEN", "abc123")
    WTF_CSRF_SECRET_KEY = SECRET_KEY


    # Mongoengine settings
    MONGODB_SETTINGS = {
        "db": os.getenv("MONGO_DBNAME"),
        "host": os.getenv("MONGO_URI")
    }


class DevelopmentConfig(Config):
    ENV = "development"
    DEBUG = True

    


class TestConfig(Config):
    pass


config = {
    "production": Config,
    "development": DevelopmentConfig,
    "testing": TestConfig
}

current_config = config.get(os.getenv("FLASK_ENV"), "development")
