from werkzeug.security import generate_password_hash, check_password_hash
from flask_mongoengine import Document, EmbeddedDocument
from mongoengine import StringField, IntField, ListField, BooleanField, DateField, EmbeddedDocumentListField, EmbeddedDocumentField
from flask_login import UserMixin
from datetime import datetime

from . import login


class User(UserMixin, Document):
    meta = {"collection": "usuario"}

    username = StringField(required=True, db_field="usuario")
    user_name = StringField(required=True, db_field="nombre")
    user_paternal_last_name = StringField(
        required=False, db_field="apellido_paterno")
    user_maternal_last_name = StringField(
        required=False, db_field="apellido_materno")
    password = StringField(required=True, db_field="contrasena")
    type = IntField(required=True, db="tipo")

    def __str__(self):
        return "User {}".format(self.username)

    def __repr__(self):
        return self.__str__()

    @staticmethod
    def create_new_user(username, user_name, user_paternal_last_name, user_maternal_last_name, password, type):
        return User(username=username, user_name=user_name, user_paternal_last_name=user_paternal_last_name, user_maternal_last_name=user_maternal_last_name, password=generate_password_hash(password), type=type)


@login.user_loader
def load_user(id):
    return User.objects(id=id).first()


class FamilyStructure(EmbeddedDocument):
    family_member_name = StringField(required=True, db_field="nombre_familiar")
    family_member_age = StringField(required=True, db_field="edad_familiar")
    family_member_relationship = StringField(required=True, db_field="parentesco_familiar")
    family_member_civil_state = StringField(required=True, db_field="estado_civil_familiar")
    family_member_ocupation = StringField(required=True, db_field="ocupacion_familiar")
    family_member_income = StringField(required=True, db_field="ingreso_familiar")


class Diet(EmbeddedDocument):
    red_meat = StringField(required=True, db_field="carnes_rojas")
    chicken = StringField(required=True, db_field="pollo")
    fish = StringField(required=True, db_field="pescado")
    grain = StringField(required=True, db_field="grano")
    dairy = StringField(required=True, db_field="lacteos")
    bread_pasta = StringField(required=True, db_field="pan_pasta")
    fruit_vegtables = StringField(required=True, db_field="frutas_verduras")


class LivingPlace(EmbeddedDocument):
    place_type = StringField(required=True, db_field="tipo_vivienda")
    place_services = StringField(required=True, db_field="servicios_vivienda")
    place_material = StringField(required=True, db_field="material_vivienda")
    place_distribution = ListField(StringField(), required=True, db_field="distribucion_vivienda")
    place_person_per_room = StringField(required=True, db_field="personas_por_cuarto_vivienda")
    place_location = StringField(required=True, db_field="zona_vivienda")
    place_hazzards = StringField(required=False, db_field="exposicion_biomasas_vivienda")


class SocioeconomicForm(Document):
    meta = {"collection": "formato_socioeconomico"}

    date_modified = DateField(default=datetime.datetime.utcnow, db_field="ultima_modificacion")
    record_num = IntField(required=True, unique=True, db_field="num_expediente")
    chemotherapy = BooleanField(required=True, db_field="quimioterapia")
    hostel = BooleanField(required=True, db_field="albergue")
    admission_date = DateField(required=True, db_field="fecha_ingreso")
    discharge_date = DateField(required=True, db_field="fecha_egreso")
    ##General data
    name = StringField(required=True, db_field="nombre")
    age = IntField(required=True, db_field="edad")
    sex = StringField(required=True, db_field="sexo")
    civil_state = StringField(required=True, db_field="estado_civil")
    birth_date = DateField(required=True, db_field="fecha_naciemiento")
    birth_place = StringField(required=True, db_field="lugar_nacimiento")
    scholarship = StringField(required=True, db_field="escolaridad")
    religion = StringField(required=True, db_field="religion")
    ocupation = StringField(required=True, db_field="ocupacion")
    income = IntField(required=False, db_field="ingreso")
    ######????Servicio Medico????
    ######????DX Medico????
    ##Temporal address
    tmp_street = StringField(required=True, db_field="calle_temp")
    tmp_num = IntField(required=True, db_field="num_temp")
    tmp_suburb = StringField(required=True, db_field="colonia_temp")
    tmp_municipality = StringField(required=True, db_field="muicipio_temp")
    tmp_zip_code = IntField(required=True, db_field="cp_temp")
    tmp_phone = IntField(required=True, db_field="tel_temp")
    tmp_phone2 = IntField(required=False, db_field="tel_temp2")
    ##Responsable address
    responsable_family_member = StringField(required=True, db_field="familiar_responsable")
    street = StringField(required=True, db_field="calle")
    num = IntField(required=True, db_field="num")
    suburb = StringField(required=True, db_field="colonia")
    municipality = StringField(required=True, db_field="muicipio")
    zip_code = IntField(required=True, db_field="cp")
    phone = IntField(required=True, db_field="tel")
    phone2 = IntField(required=False, db_field="tel2")
    relationship = StringField(required=True, db_field="parentesco")
    ##Family Structure
    family_structure = EmbeddedDocumentListField(FamilyStructure, required=False, db_field="estructura_familiar")
    ##Diet
    diet = EmbeddedDocumentField(Diet, required=True, db_field="dieta")
    ##Living place
    living_place = EmbeddedDocumentField(LivingPlace, required=True, db_field="vivienda")

    
    def __str__(self):
        return f"SocioeconomicForm({self.record_num})"

    def __repr__(self):
        return self.__str__()


class Patients(Document):
    meta = {"collection": "pacientes"}

    folio = StringField(required=True, unique=True, db_field="folio")
    name = StringField(required=True, db_field="nombre")
    paternal_last_name = StringField(
        required=False, db_field="apellido_paterno")
    maternal_last_name = StringField(
        required=False, db_field="apellido_materno")
    sex = StringField(
        required=True, db_field="sexo")
    ##companions = ListField(EmbeddedDocumentField(), required=False, db_field="acompañante")
    ##medical_forms = ListField(EmbeddedDocumentField(), required=False, db_field="formularios_medicos")
    social_forms = EmbeddedDocumentListField(SocioeconomicForm, required=False, db_field="formularios_socioeconomicos")
    
    def __str__(self):
        return f"Patient({self.name + ' ' + self.paternal_last_name})"

    def __repr__(self):
        return self.__str__()
