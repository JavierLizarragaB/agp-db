import os


class Config:
    ENV = "production"
    DEBUG = False
    SECRET_KEY = os.getenv("SECRET_KEY", "secret")


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
