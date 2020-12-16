from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
import mongoengine as me

from . import login


class User(UserMixin, me.Document):
    meta = {"collection": "user"}

    username = me.StringField(required=True)
    password = me.StringField(required=True)

    def __str__(self):
        return "User {}".format(self.username)

    def __repr__(self):
        return self.__str__()

    @staticmethod
    def create_new_user(username, password):
        return User(username=username, password=generate_password_hash(password))


@login.user_loader
def load_user(id):
    return User.objects(id=id).first()