import os


class Config:
    ENV = "production"
    DEBUG = False
    SECRET_KEY = os.getenv("SECRET_KEY", "secret")


    # Mongoengine settings
    MONGODB_SETTINGS = {
        "db": os.getenv("MONGO_DB"),
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
