import os


class Config:
    ENV = "production"
    DEBUG = False
    SECRET_KEY = os.getenv("SECRET_KEY", "secret")
    FLASK_TOKEN = os.getenv("FLASK_TOKEN", "abc123")
    WTF_CSRF_SECRET_KEY = SECRET_KEY
    JSON_AS_ASCII = False  # Support UTF-8 in json responses
    ##CORS_HEADERS = 'Content-Type'

    # Mongoengine settings
    MONGODB_SETTINGS = {
        "alias": "default",
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
