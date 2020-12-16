import os


class ProductionConfig:
    SECRET_KEY = os.getenv("SECRET_KEY")


class DevelopmentConfig(ProductionConfig):
    SECRET_KEY = "secret"


class TestingConfig(ProductionConfig):
    pass


config = {
    "production": ProductionConfig,
    "development": DevelopmentConfig,
    "testing": TestingConfig
}

current_config = config.get(os.getenv("FLASK_ENV"), "development")
