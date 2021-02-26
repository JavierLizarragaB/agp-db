from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
import mongoengine as me

from . import login


class User(UserMixin, me.Document):
    meta = {"collection": "usuario"}

    username = me.StringField(required=True, db_field="usuario")
    password = me.StringField(required=True, db_field="contrasena")

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


class Patient(me.Document):
    meta: {"collection": "pacientes"}

    folio = me.StringField(required=True, db_field="folio")
    first_name = me.StringField(required=True, db_field="primer_nombre")
    second_name = me.StringField(required=False, db_field="segundo_nombre")
    paternal_lastname = me.StringField(
        required=False, db_field="apellido_paterno")
    maternal_lastname = me.StringField(
        required=False, db_field="apellido_materno")

    def __str__(self):
        return f"Patient({self.first_name + ' ' + self.paternal_lastname})"

    def __repr__(self):
        return self.__str__()
