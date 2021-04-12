from werkzeug.security import generate_password_hash, check_password_hash
from flask_mongoengine import Document, EmbeddedDocument
from mongoengine import StringField, IntField, ListField, BooleanField, DateField, EmbeddedDocumentListField, EmbeddedDocumentField, ReferenceField
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


class Outcome(EmbeddedDocument):
    outcome_electric_power = IntField(required=True, db_field="energia_electrica_egreso")
    outcome_water = IntField(required=True, db_field="agua_egreso")
    outcome_gas = IntField(required=True, db_field="gas_egreso")
    outcome_phone = IntField(required=True, db_field="telefono_egreso")
    outcome_food = IntField(required=True, db_field="alimentos_egreso")
    outcome_rent = IntField(required=True, db_field="renta_egreso")
    outcome_transportation = IntField(required=True, db_field="transporte_egreso")
    outcome_education = IntField(required=True, db_field="educacion_egreso")
    outcome_clothing = IntField(required=True, db_field="vestimenta_egreso")
    outcome_recreational = IntField(required=True, db_field="diversion_egreso")
    outcome_other = IntField(required=True, db_field="otros_egreso")


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
    tmp_suburb = StringField(required=True, db_field="colonia_temp") ######Falta Localidaaaad!!!!!
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
    ##Household goods
    electrodomestics = StringField(required=True, db_field="electrodomesticos")
    air_conditioner = StringField(required=True, db_field="refrigeracion")
    trnasportation = StringField(required=True, db_field="transporte")
    car_brand = StringField(required=False, db_field="marca_auto")
    car_model = StringField(required=False, db_field="modelo_auto")
    ##geographic area
    geographic_area = StringField(required=True, db_field="area_geografica")
    ##Outcome

    
    def __str__(self):
        return f"SocioeconomicForm({self.record_num})"

    def __repr__(self):
        return self.__str__()

##Embedded documents for medical form
class EmergencyContact(EmbeddedDocument):
    emergency_name = StringField(required=True, db_field="emergencia_nombre")
    emergency_phone = IntField(required=True, db_field="emergencia_tel")
    emergency_relationship = StringField(required=True, db_field="emergencia_parentesco")
class FamilyHistory(EmbeddedDocument):
    relationship = StringField(required=True, db_field="parentesco")
    living = BooleanField(required=True, db_field="vive")
    diseases = ListField(StringField(), required=False, db_field="enfermedades")
    cause_of_death = StringField(required=False, db_field="causa_defuncion")
class LivingPlaceMedical(EmbeddedDocument):
    place_type = StringField(required=True, db_field="tipo_vivienda")
    place_material = StringField(required=True, db_field="material_vivienda")
    place_inhabitants = IntField(required=True, db_field="habitantes_vivienda")
    place_rooms = IntField(required=True, db_field="habitaciones_vivienda")
    place_hazards = StringField(required=False, db_field="exposicion_biomasas_vivienda")
class DietMedical(EmbeddedDocument):
    quality_perception = StringField(required=True, db_field="percepcion_calidad")
    meals_day = IntField(required=True, db_field="comidas_dia")
    ## Preparacion alimentos????
    water_quantity = IntField(required=True, db_field="cantidad_agua") ##Int???
class Hygiene(EmbeddedDocument):
    showers_week = IntField(required=True, db_field="baños_semana")
    teeth_brushing_day = IntField(required=True, db_field="lavar_dientes_dia")
    ## Higiene del hogar????
class Animals(EmbeddedDocument):
    vaccinated = BooleanField(required=True, db_field="vacunados")
    ticks = BooleanField(required=True, db_field="garrapatas")
    diseases = ListField(StringField(), required=False, db_field="enfermedades")
    ## Higiene del hogar????
class NonPathological(EmbeddedDocument):
    living_place = EmbeddedDocumentField(LivingPlaceMedical, required=True, db_field="vivienda")
    diet = EmbeddedDocumentField(DietMedical, required=True, db_field="alimentacion")
    hygiene = EmbeddedDocumentField(Hygiene, required=True, db_field="higiene")
    ## actividad fisica ??
    ## pasatiempo??
    animals = EmbeddedDocumentField(Animals, required=True, db_field="animales")
    ## cartilla vacunacion ??
class ChronicDegenerativeDisease(EmbeddedDocument):
    disease_name = StringField(required=True, db_field="nombre_enfermedad")
    time_since_diagnosis = IntField(required=True, db_field="tiempo_desde_diagnostico") ##Int???
    treatment = StringField(required=True, db_field="tratamiento")
    complications = StringField(required=True, db_field="complicaciones")
    adherance_treatment = StringField(required=True, db_field="apego_tratamiento")
class DrugUse(EmbeddedDocument):
    starting_age = IntField(required=True, db_field="edad_inicio")
    quantity = IntField(required=True, db_field="cantidad")
    frequency = StringField(required=True, db_field="frecuencia")
class MaleSexualHealth(EmbeddedDocument):
    start_sexual_life = IntField(required=False, db_field="inicio_vida_sexual")
    sexual_partners = IntField(required=False, db_field="parejas_sexuales")
    std = ListField(StringField(), required=False, db_field="ets")
    contraceptive_methos = ListField(StringField(), required=False, db_field="metodos_anticonceptivos")
class CancerTest(EmbeddedDocument):
    date = DateField(required=True, db_field="fecha")
    resultado = BooleanField(required=True, db_field="resultado")
class FemaleSexualHealth(EmbeddedDocument):
    menarche = DateField(required=False, db_field="menarca")
    ## ritmo ??
    start_sexual_life = IntField(required=False, db_field="inicio_vida_sexual")
    high_risk_partners = IntField(required=False, db_field="parejas_alto_riesgo")
    sexual_partners = IntField(required=False, db_field="parejas_sexuales")
    std = ListField(StringField(), required=False, db_field="ets")
    gestations = IntField(required=False, db_field="gestas")
    deliveries = IntField(required=False, db_field="partos")
    abortions = IntField(required=False, db_field="abortos")
    date_last_delivery = DateField(required=False, db_field="fecha_ultimo_parto")
    age_first_pregnancy = IntField(required=False, db_field="edad_primer_embarazo")
    family_planning_methods = ListField(StringField(), required=False, db_field="metodos_planificacion_familiar")
    date_last_menstruation = DateField(required=False, db_field="fecha_ultima_regla")
    ## Menopausia ??
    breastfeeding = BooleanField(required=True, db_field="lactancia_materna")
    last_pap_smear = EmbeddedDocument(CancerTest, required=False, db_field="ultimo_papanicolaou")
    last_hybrid_test = EmbeddedDocument(CancerTest, required=False, db_field="ultima_prueba_hibridos")
    last_mammography = EmbeddedDocument(CancerTest, required=False, db_field="ultima_mamografia")
class Pathological(EmbeddedDocument):
    chronic_degenerative_diseases = EmbeddedDocumentListField(FamilyHistory, required=False, db_field="enfermedades_cronicodegenerativas")
    infectious_contagious_diseases = ListField(StringField(), required=False, db_field="enfermedades_infectocontagiosas")
    surgeries = ListField(StringField(), required=False, db_field="cirugias")
    jail = BooleanField(required=True, db_field="carcel")
    blood_transfusions = BooleanField(required=True, db_field="transfusiones_sanguineas") ## Bool ??
    allergies = ListField(StringField(), required=False, db_field="alergias")
    trauma = ListField(StringField(), required=False, db_field="traumatismos")
    alcoholism = EmbeddedDocument(DrugUse, required=False, db_field="alcoholismo")
    smoking = EmbeddedDocument(DrugUse, required=False, db_field="tabaquismo")
    drug_addictions = EmbeddedDocument(DrugUse, required=False, db_field="toxicomanias")
    ## Generic Embedded Document !!
    sexual_health = GenricEmbeddedDocument(required=True, db_field="salud_sexual")

class MedicalForm(Document):
    meta = {"collection": "formato_medico"}

    ##Date and record number
    date_modified = DateField(default=datetime.datetime.utcnow, db_field="ultima_modificacion")
    record_num = IntField(required=True, unique=True, db_field="num_expediente")
    ##General data
    name = StringField(required=True, db_field="nombre")
    sex = StringField(required=True, db_field="sexo")
    birth_date = DateField(required=True, db_field="fecha_naciemiento")
    age = IntField(required=True, db_field="edad")
    birth_place = StringField(required=True, db_field="lugar_nacimiento")
    email = StringField(required=True, db_field="correo")
    ##Address
    street = StringField(required=True, db_field="calle")
    num = IntField(required=True, db_field="num")
    suburb = StringField(required=True, db_field="colonia")
    locality = StringField(required=True, db_field="colonia") #localidad??
    municipality = StringField(required=True, db_field="muicipio")
    zip_code = IntField(required=True, db_field="cp")
    phone = IntField(required=True, db_field="tel")
    phone2 = IntField(required=False, db_field="tel2")
    ##Derechohabiencia ???
    insurance = StringField(required=True, db_field="derechohabiencia")
    #Scholarship
    scholarship = StringField(required=True, db_field="escolaridad")
    ##More general data
    ocupation = StringField(required=True, db_field="ocupacion")
    religion = StringField(required=True, db_field="religion")
    civil_state = StringField(required=True, db_field="estado_civil")
    ##Emergency contact
    emergency_contact = EmbeddedDocumentField(EmergencyContact, required=True, db_field="emergencia_contacto")
    ##Hereditary family history
    family_history = EmbeddedDocumentListField(FamilyHistory, required=True, db_field="antecedentas_familiares")
    
    ##Non-pathological personal history
    non_pathological_history = EmbeddedDocumentField(NonPathological, required=True, db_field="antecedentes_no_patologicos")

    ##Pathological personal history
    pathological_history = EmbeddedDocumentField(Pathological, required=True, db_field="antecedentes_patologicos")

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
    social_forms = ListField(ReferenceField(SocioeconomicForm, required=False, db_field="formularios_socioeconomicos"))
    
    def __str__(self):
        return f"Patient({self.name + ' ' + self.paternal_last_name})"

    def __repr__(self):
        return self.__str__()
