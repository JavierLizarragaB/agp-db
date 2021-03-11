from werkzeug.security import generate_password_hash, check_password_hash
from flask_mongoengine import Document
from mongoengine import StringField
from flask_login import UserMixin

from . import login


class User(UserMixin, Document):
    meta = {"collection": "usuario"}

    username = StringField(required=True, db_field="usuario")
    password = StringField(required=True, db_field="contrasena")

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


class Patients(Document):
    meta = {"collection": "pacientes"}

    folio = StringField(required=True, unique=True, db_field="folio")
    first_name = StringField(required=True, db_field="primer_nombre")
    paternal_last_name = StringField(
        required=False, db_field="apellido_paterno")
    maternal_last_name = StringField(
        required=False, db_field="apellido_materno")
    sex = StringField(
      	required=True, db_field="sexo")
    companions = ListField(StringField(), required=False, db_field"acompañante")
    medical_forms = ListField(StringField(), required=False, db_field="formularios_medicos")
    social_forms = ListField(StringField(), required=False, db_field="formularios_socioeconomicos")
    
    def __str__(self):
        return f"Patient({self.first_name + ' ' + self.paternal_last_name})"

    def __repr__(self):
        return self.__str__()
