from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
import mongoengine as me




class User(UserMixin, me.Document):
    username = me.StringField(required=True)
    password = me.StringField(required=True)

    @staticmethod
    def create_new_user(username, password):
        return User(username=username, password=generate_password_hash(password))