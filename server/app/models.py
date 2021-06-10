from typing_extensions import Required
from werkzeug.security import generate_password_hash, check_password_hash
from mongoengine import Document, EmbeddedDocument
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

# Classes for form

### ----------------------------------- Tierra de Nadie ----------------------------------- ###
class FamilyStructure(EmbeddedDocument):
    family_member_name = StringField(required=False, db_field="nombre_familiar")
    family_member_age = StringField(required=False, db_field="edad_familiar")
    family_member_relationship = StringField(required=False, db_field="parentesco_familiar")
    family_member_civil_state = StringField(required=False, db_field="estado_civil_familiar")
    family_member_ocupation = StringField(required=False, db_field="ocupacion_familiar")
    family_member_income = StringField(required=False, db_field="ingreso_familiar")


class FamilyHistory(EmbeddedDocument):
    relationship = StringField(required=False, db_field="parentesco")
    living = BooleanField(required=False, db_field="vive")
    diseases = ListField(StringField(), required=False, db_field="enfermedades")
    cause_of_death = StringField(required=False, db_field="causa_defuncion")

class Address(EmbeddedDocument):
    street = StringField(required=False, db_field="calle")
    num = IntField(required=False, db_field="num")
    suburb = StringField(required=False, db_field="colonia")
    locality = StringField(required=False, db_field="localidad")
    municipality = StringField(required=False, db_field="muicipio")
    zip_code = IntField(required=False, db_field="cp")
    phone = IntField(required=False, db_field="tel")
    phone2 = IntField(required=False, db_field="tel2")


class ResponsableFamilyMember(EmbeddedDocument):
    responsable_name = StringField(required=False, db_field="nombre_responsable")
    responsable_address = EmbeddedDocumentField(Address, db_field="direccion_responsable")
    responsable_relationship = StringField(required=False, db_field="parentesco_responsable")


class Diet(EmbeddedDocument):
    red_meat = StringField(required=False, db_field="carnes_rojas")
    chicken = StringField(required=False, db_field="pollo")
    fish = StringField(required=False, db_field="pescado")
    grain = StringField(required=False, db_field="grano")
    dairy = StringField(required=False, db_field="lacteos")
    bread_pasta = StringField(required=False, db_field="pan_pasta")
    fruit_vegtables = StringField(required=False, db_field="frutas_verduras")


class LivingPlace(EmbeddedDocument):
    place_type = StringField(required=False, db_field="tipo_vivienda")
    place_services = StringField(required=False, db_field="servicios_vivienda")
    place_material = StringField(required=False, db_field="material_vivienda")
    place_distribution = ListField(StringField(), required=False, db_field="distribucion_vivienda")
    place_person_per_room = StringField(required=False, db_field="personas_por_cuarto_vivienda")
    place_location = StringField(required=False, db_field="zona_vivienda")
    place_exposition = StringField(required=False, db_field="exposicion_biomasas")


class HouseholdGoods(EmbeddedDocument):
    electrodomestics = StringField(required=False, db_field="electrodomesticos")
    air_conditioner = StringField(required=False, db_field="refrigeracion")

class FamilyTransportation(EmbeddedDocument):
    transportation = StringField(required=False, db_field="transporte")
    car_brand = StringField(required=False, db_field="marca_auto")
    car_model = StringField(required=False, db_field="modelo_auto")


class Outcome(EmbeddedDocument):
    outcome_electric_power = IntField(required=False, db_field="energia_electrica_egreso")
    outcome_water = IntField(required=False, db_field="agua_egreso")
    outcome_gas = IntField(required=False, db_field="gas_egreso")
    outcome_phone = IntField(required=False, db_field="telefono_egreso")
    outcome_food = IntField(required=False, db_field="alimentos_egreso")
    outcome_rent = IntField(required=False, db_field="renta_egreso")
    outcome_transportation = IntField(required=False, db_field="transporte_egreso")
    outcome_education = IntField(required=False, db_field="educacion_egreso")
    outcome_clothing = IntField(required=False, db_field="vestimenta_egreso")
    outcome_recreational = IntField(required=False, db_field="diversion_egreso")
    outcome_other = IntField(required=False, db_field="otros_egreso")


class SubstanceAbuse(EmbeddedDocument):
    household_member_substance = BooleanField(required=False, db_field="consume_miembro_vivienda")
    substance_consumed = StringField(required=False, db_field="sustancia_consumida")
    consuming_member = StringField(required=False,  db_field="miembro_consumidor")
    consuming_frequency = StringField(required=False, db_field="frecuencia_consumo")

class SocioeconomicForm(Document):
    meta = {"collection": "formato_socioeconomico"}

    date_modified = DateField(default=datetime.utcnow, db_field="ultima_modificacion")
    record_num = IntField(required=False, unique=False, db_field="num_expediente")
    chemotherapy = BooleanField(required=False, db_field="quimioterapia")
    hostel = BooleanField(required=False, db_field="albergue")
    admission_date = DateField(required=False, db_field="fecha_ingreso")
    discharge_date = DateField(required=False, db_field="fecha_egreso")
    ##General data
    name = StringField(required=False, db_field="nombre")
    age = IntField(required=False, db_field="edad")
    sex = StringField(required=False, db_field="sexo")
    civil_state = StringField(required=False, db_field="estado_civil")
    birth_date = DateField(required=False, db_field="fecha_naciemiento")
    birth_state = StringField(required=False, db_field="entidad_nacimiento")
    birth_city = StringField(required=False, db_field="ciudad_nacimiento")
    scholarship = StringField(required=False, db_field="escolaridad")
    religion = StringField(required=False, db_field="religion")
    ocupation = StringField(required=False, db_field="ocupacion")
    income = IntField(required=False, db_field="ingreso")
    ######????Servicio Medico????
    ######????DX Medico????
    ##Address
    permanent_address = EmbeddedDocumentField(Address, required=False, db_field="direccion_permanente")
    ##Temporal address
    temp_address = EmbeddedDocumentField(Address, required=False, db_field="direccion_temporal")
    ##Responsable
    responsable_family_member = EmbeddedDocumentField(ResponsableFamilyMember, required=False, db_field="familiar_responsable")
    
    ## Family Data
    
    ### Family Structure
    family_structure = EmbeddedDocumentListField(FamilyStructure, required=False, db_field="estructura_familiar")
    ### Family History
    family_history = EmbeddedDocumentListField(FamilyHistory, required=False, db_field= "antecedentes_familiares")
    ### Number of sicks
    number_sicks = StringField(required=False, db_field="numero_de_enfermos")
    ### Substance abuse
    substance_abuse = EmbeddedDocumentField(SubstanceAbuse, required=False, db_field="consume_sustancias_toxicas")

    ## Home and economy

    ### Living place
    living_place = EmbeddedDocumentField(LivingPlace, required=False, db_field="vivienda")
    ### Household goods
    household_goods = EmbeddedDocumentField(HouseholdGoods, required=False, db_field="bienes_hogar")
    ### Family Transportation
    family_transportation = EmbeddedDocumentField(FamilyTransportation, required=False, db_field="transporte_familiar")
    ### Geographic area
    geographic_area = StringField(required=False, db_field="area_geografica")
    ### Family sick members
    sick_members = StringField(required=False, db_field="familiares_enfermos")
    ### Outcome
    outcome = EmbeddedDocumentField(Outcome, required=False, db_field="egresos")

    ##Diet
    diet = EmbeddedDocumentField(Diet, required=False, db_field="dieta")
    
    
    
    
    
    
    ##AGP questions
    heard_from_us = StringField(required=False, db_field="conocio_agrupacion")
    past_help = StringField(required=False, db_field="apoyo_anterior")
    help_type = StringField(required=False, db_field="tipo_apoyo")
    observations = StringField(required=False, db_field="observaciones")
    social_plan =StringField(required=False, db_field="plan_social")
    socioeconomic_classification1 = StringField(required=False, db_field="clasificacion_socioeconomica1")
    socioeconomic_classification2 = StringField(required=False, db_field="clasificacion_socioeconomica2")
    socioeconomic_classification3 = StringField(required=False, db_field="clasificacion_socioeconomica3")
    social_worker = StringField(required=False, db_field="trabajador_social")
    
    def __str__(self):
        return f"SocioeconomicForm({self.record_num})"

    def __repr__(self):
        return self.__str__()

##Embedded documents for medical form
class EmergencyContact(EmbeddedDocument):
    emergency_name = StringField(required=False, db_field="emergencia_nombre")
    emergency_phone = IntField(required=False, db_field="emergencia_tel")
    emergency_relationship = StringField(required=False, db_field="emergencia_parentesco")


class DietMedical(EmbeddedDocument):
    quality_perception = StringField(required=False, db_field="percepcion_calidad")
    meals_day = IntField(required=False, db_field="comidas_dia")
    ## Preparacion alimentos????
    water_quantity = IntField(required=False, db_field="cantidad_agua") ##Int???
class Hygiene(EmbeddedDocument):
    showers_week = IntField(required=False, db_field="baños_semana")
    teeth_brushing_day = IntField(required=False, db_field="lavar_dientes_dia")
    ## Higiene del hogar????
class Animals(EmbeddedDocument):
    vaccinated = BooleanField(required=False, db_field="vacunados")
    ticks = BooleanField(required=False, db_field="garrapatas")
    diseases = ListField(StringField(), required=False, db_field="enfermedades")
    ## Higiene del hogar????
class NonPathological(EmbeddedDocument):
    living_place = EmbeddedDocumentField(LivingPlaceMedical, required=False, db_field="vivienda")
    diet = EmbeddedDocumentField(DietMedical, required=False, db_field="alimentacion")
    hygiene = EmbeddedDocumentField(Hygiene, required=False, db_field="higiene")
    ## actividad fisica ??
    ## pasatiempo??
    animals = EmbeddedDocumentField(Animals, required=False, db_field="animales")
    ## cartilla vacunacion ??
class ChronicDegenerativeDisease(EmbeddedDocument):
    disease_name = StringField(required=False, db_field="nombre_enfermedad")
    time_since_diagnosis = StringField(required=False, db_field="tiempo_desde_diagnostico")
    treatment = StringField(required=False, db_field="tratamiento")
    complications = StringField(required=False, db_field="complicaciones")
    adherance_treatment = StringField(required=False, db_field="apego_tratamiento")
class DrugUse(EmbeddedDocument):
    starting_age = IntField(required=False, db_field="edad_inicio")
    quantity = IntField(required=False, db_field="cantidad")
    frequency = StringField(required=False, db_field="frecuencia")
class MaleSexualHealth(EmbeddedDocument):
    start_sexual_life = IntField(required=False, db_field="inicio_vida_sexual")
    sexual_partners = IntField(required=False, db_field="parejas_sexuales")
    std = ListField(StringField(), required=False, db_field="ets")
    contraceptive_methos = ListField(StringField(), required=False, db_field="metodos_anticonceptivos")
class CancerTest(EmbeddedDocument):
    date = DateField(required=False, db_field="fecha")
    result = BooleanField(required=True, db_field="resultado")
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
    breastfeeding = BooleanField(required=False, db_field="lactancia_materna")
    last_pap_smear = EmbeddedDocumentField(CancerTest, required=False, db_field="ultimo_papanicolaou")
    last_hybrid_test = EmbeddedDocumentField(CancerTest, required=False, db_field="ultima_prueba_hibridos")
    last_mammography = EmbeddedDocumentField(CancerTest, required=False, db_field="ultima_mamografia")
class Pathological(EmbeddedDocument):
    chronic_degenerative_diseases = EmbeddedDocumentListField(FamilyHistory, required=False, db_field="enfermedades_cronicodegenerativas")
    infectious_contagious_diseases = ListField(StringField(), required=False, db_field="enfermedades_infectocontagiosas")
    surgeries = ListField(StringField(), required=False, db_field="cirugias")
    jail = BooleanField(required=False, db_field="carcel")
    blood_transfusions = BooleanField(required=False, db_field="transfusiones_sanguineas") ## Bool ??
    allergies = ListField(StringField(), required=False, db_field="alergias")
    trauma = ListField(StringField(), required=False, db_field="traumatismos")
    alcoholism = EmbeddedDocumentField(DrugUse, required=False, db_field="alcoholismo")
    smoking = EmbeddedDocumentField(DrugUse, required=False, db_field="tabaquismo")
    drug_addictions = EmbeddedDocumentField(DrugUse, required=False, db_field="toxicomanias")
    ## Generic Embedded Document !!
    ##sexual_health = EmbeddedDocumentField(required=True, db_field="salud_sexual")
class Skin(EmbeddedDocument):
    color_changes = ListField(StringField(), required=False, db_field="cambios_coloracion")
    other_changes = ListField(StringField(), required=False, db_field="otros_cambios")
class OphthalmicSystem(EmbeddedDocument):
    vision_changes = ListField(StringField(), required=False, db_field="cambios_vision")
    uses_glasses = BooleanField(required=False, db_field="usa_lentes")
    reason_glasses = StringField(required=False, db_field="razon_lentes")
class EntSystem(EmbeddedDocument):
    hearing_changes = ListField(StringField(), required=False, db_field="cambios_audicion")
    ear_pain = BooleanField(required=False, db_field="dolor_oido")
    vertigo = BooleanField(required=False, db_field="vertigo")
    fluid_leaking_ear = BooleanField(required=False, db_field="salida_liquido_oido")
    smelling_changes = BooleanField(required=False, db_field="cambios_olfato")
    fluid_leaking_nose = BooleanField(required=False, db_field="salida_liquido_nariz")
    nose_pain = BooleanField(required=False, db_field="dolor_nariz")
    teeth_conditions = ListField(StringField(), required=False, db_field="condiciones_dientes")
    gum_conditions = ListField(StringField(), required=False, db_field="condiciones_encias")
    gum_conditions = ListField(StringField(), required=False, db_field="condiciones_encias")
    tongue_conditions = ListField(StringField(), required=False, db_field="condiciones_lengua")
    speaking_problems = StringField(required=False, db_field="problemas_hablar")
    thirst = BooleanField(required=False, db_field="sed")
    speaking_eating_pain = BooleanField(required=False, db_field="dolor_comer_hablar")
    bad_breath = BooleanField(required=False, db_field="mal_aliento")
    excess_salivation = BooleanField(required=False, db_field="exceso_salivacion")
class DigestiveSystem(EmbeddedDocument):
    esophagus_conditions = ListField(StringField(), required=False, db_field="condiciones_esofago")
    stomache_conditions = ListField(StringField(), required=False, db_field="condiciones_estomago")
    evacuation_changes = ListField(StringField(), required=False, db_field="cambios_evacuaciones")
    liver_bile_conditions = ListField(StringField(), required=False, db_field="condiciones_higado_biliares")
    pancreas_conditions = ListField(StringField(), required=False, db_field="condiciones_pancreas")
class RespiratoryApparatus(EmbeddedDocument):
    breathing_conditions = ListField(StringField(), required=False, db_field="condiciones_respiratorias")
    fatigue = BooleanField(required=False, db_field="fatiga")
    breathing_problems = BooleanField(required=False, db_field="problemas_respirar")
    breathing_changes = BooleanField(required=False, db_field="cambios_respiracion")
class CardiovascularApparatus(EmbeddedDocument):
    dyspnoea = BooleanField(required=False, db_field="disnea")
    orthopnea = BooleanField(required=False, db_field="ortopnea")
    number_pillows = IntField(required=False, db_field="numero_almohadas")
    lipothymia = BooleanField(required=False, db_field="lipotimia")
    syncope = BooleanField(required=False, db_field="sincope")
    edema = BooleanField(required=False, db_field="edema")
    cyanosis = BooleanField(required=False, db_field="cianosis")
    chest_pain = BooleanField(required=False, db_field="color_toracico")
    palpitations = BooleanField(required=False, db_field="palpitaciones")
    caludication = BooleanField(required=False, db_field="claudicacion")
class GenitourinarySystem(EmbeddedDocument):
    urinating_changes = ListField(StringField(), required=False, db_field="cambios_miccionar")
    urinating_pain = BooleanField(required=False, db_field="dolor_miccionar")
    jet_changes = ListField(StringField(), required=False, db_field="cambios_chorro")
    menstruation_changes = ListField(StringField(), required=False, db_field="cambios_menstruacion")
    dyspareunia = BooleanField(required=False, db_field="dispareunia")
    libido_changes = BooleanField(required=False, db_field="cambios_libido")
class MusculoskeletalSystem(EmbeddedDocument):
    muscle_pain = BooleanField(required=False, db_field="dolor_muscular")
    joint_pain = BooleanField(required=False, db_field="dolor_articular")
    joint_stiffness = BooleanField(required=False, db_field="rigidez_articular")
    nodules = BooleanField(required=False, db_field="nodulos")
    bone_pain = BooleanField(required=False, db_field="dolor_osea")
    ambulation_changes = ListField(StringField(), required=False, db_field="cambios_deambulacion")
class HematologicalSystem(EmbeddedDocument):
    weakness = BooleanField(required=False, db_field="debilidad")
    color_changes = ListField(StringField(), required=False, db_field="cambios_coloracion")
    hematological_conditions = ListField(StringField(), required=False, db_field="condiciones_hematologicas")
    lymphadenopathy  = BooleanField(required=False, db_field="adenopatias")
class NervousSystem(EmbeddedDocument):
    headache = BooleanField(required=False, db_field="cefalea")
    seizures = BooleanField(required=False, db_field="convulciones")
    memory_changes = ListField(StringField(), required=False, db_field="cambios_memoria")
    sphincters_changes = ListField(StringField(), required=False, db_field="cambios_esfinteres")
    loss_of_feeling = BooleanField(required=False, db_field="perdida_sensacion")
    loss_of_movement = BooleanField(required=False, db_field="perdida_movimiento")
    loss_of_balance = BooleanField(required=False, db_field="perdida_equilibrio")
    language_disorders = ListField(StringField(), required=False, db_field="trastornos_lenguaje")
    gait_changes = ListField(StringField(), required=False, db_field="cambios_marcha")
    tremors = BooleanField(required=False, db_field="temblores")
    paralysis = BooleanField(required=False, db_field="paralisis")
    parasthesia = BooleanField(required=False, db_field="parestesias")
    paresis = BooleanField(required=False, db_field="paresias")
class PsychicSystem(EmbeddedDocument):
    distress = BooleanField(required=False, db_field="angustia")
    depression = BooleanField(required=True, db_field="depresion")
    interest_changes = BooleanField(required=False, db_field="cambios_interes")
    guilt = BooleanField(required=False, db_field="culpa")
    suicidal_thoughts = BooleanField(required=False, db_field="ideas_suicidas")
    hallucinations = BooleanField(required=False, db_field="alucinaciones")
    delirium = BooleanField(required=False, db_field="delirio")
class ApparatusAndSystems(EmbeddedDocument):
    skin = EmbeddedDocumentField(Skin, required=False, db_field="piel")
    ophthalmic_system = EmbeddedDocumentField(OphthalmicSystem, required=False, db_field="sistema_oftalmologico")
    ent_system = EmbeddedDocumentField(OphthalmicSystem, required=False, db_field="sistema_otorrinolaringologico")
    digestive_system = EmbeddedDocumentField(DigestiveSystem, required=False, db_field="sistema_digestivo")
    respiratory_apparatus = EmbeddedDocumentField(RespiratoryApparatus, required=False, db_field="aparato_respiratorio")
    cardiovascular_apparatus = EmbeddedDocumentField(CardiovascularApparatus, required=False, db_field="aparato_cardiovascular")
    genitourinary_system = EmbeddedDocumentField(GenitourinarySystem, required=False, db_field="sistema_genitourinario")
    musculoskeletal_system = EmbeddedDocumentField(MusculoskeletalSystem, required=False, db_field="sistema_musculo_esqueletico")
    hematological_system = EmbeddedDocumentField(HematologicalSystem, required=False, db_field="sistema_hematologico")
    nervous_system = EmbeddedDocumentField(NervousSystem, required=False, db_field="sistema_nervioso")
    psychic_system = EmbeddedDocumentField(PsychicSystem, required=False, db_field="sistema_psiquico")
class FollowUp(EmbeddedDocument):
    treatment_changes = ListField(StringField(), required=False, db_field="cambios_tratamiento")
    current_symptoms = ListField(StringField(), required=False, db_field="sintomas_actuales")
    treatment_effects = ListField(StringField(), required=False, db_field="efectos_tratamiento")
    ##Seguimiento psicologia
    ##Diagnostico actual

class MedicalForm(Document):
    meta = {"collection": "formato_medico"}

    ##Date and record number
    date_modified = DateField(default=datetime.utcnow, db_field="ultima_modificacion")
    record_num = IntField(required=True, unique=True, db_field="num_expediente")
    ##General data
    name = StringField(required=False, db_field="nombre")
    sex = StringField(required=False, db_field="sexo")
    birth_date = DateField(required=False, db_field="fecha_naciemiento")
    age = IntField(required=False, db_field="edad")
    birth_place = StringField(required=False, db_field="lugar_nacimiento")
    email = StringField(required=False, db_field="correo")
    ##Address
    street = StringField(required=False, db_field="calle")
    num = IntField(required=False, db_field="num")
    suburb = StringField(required=False, db_field="colonia")
    locality = StringField(required=False, db_field="localidad") #localidad??
    municipality = StringField(required=False, db_field="muicipio")
    zip_code = IntField(required=False, db_field="cp")
    phone = IntField(required=False, db_field="tel")
    phone2 = IntField(required=False, db_field="tel2")
    ##Derechohabiencia ???
    insurance = StringField(required=False, db_field="derechohabiencia")
    #Scholarship
    scholarship = StringField(required=False, db_field="escolaridad")
    ##More general data
    ocupation = StringField(required=False, db_field="ocupacion")
    religion = StringField(required=False, db_field="religion")
    civil_state = StringField(required=False, db_field="estado_civil")
    ##Emergency contact
    emergency_contact = EmbeddedDocumentField(EmergencyContact, required=False, db_field="emergencia_contacto")
    
    ##Non-pathological personal history
    non_pathological_history = EmbeddedDocumentField(NonPathological, required=True, db_field="antecedentes_no_patologicos")

    ##Pathological personal history
    pathological_history = EmbeddedDocumentField(Pathological, required=False, db_field="antecedentes_patologicos")

    ##Apparatus and body systems
    apparatus_and_systems = EmbeddedDocumentField(ApparatusAndSystems, required=False, db_field="aparatos_y_sistemas")

    ##Exploracion fisica

    ##Follow-up
    follow_up = EmbeddedDocumentField(FollowUp, required=False, db_field="seguimiento")

    def __str__(self):
        return f"MedicalForm({self.record_num})"

    def __repr__(self):
        return self.__str__()
### ----------------------------------- End Tierra de Nadie ----------------------------------- ###

### ----------------------------------- Datos Paciente Classes ----------------------------------- ###
class Address(EmbeddedDocument):
    street = StringField(required=False, db_field="calle")
    num = IntField(required=False, db_field="num")
    suburb = StringField(required=False, db_field="colonia")
    locality = StringField(required=False, db_field="localidad")
    municipality = StringField(required=False, db_field="muicipio")
    zip_code = IntField(required=False, db_field="cp")
    phone = IntField(required=False, db_field="tel")
    phone2 = IntField(required=False, db_field="tel2")

class ResponsableFamilyMember(EmbeddedDocument):
    responsable_name = StringField(required=False, db_field="nombre_responsable")
    responsable_address = EmbeddedDocumentField(Address, db_field="direccion_responsable")
    responsable_relationship = StringField(required=False, db_field="parentesco_responsable")

class ChronicDegenerativeDisease(EmbeddedDocument):
    disease_name = StringField(required=False, db_field="nombre_enfermedad")
    time_since_diagnosis = StringField(required=False, db_field="tiempo_desde_diagnostico")
    treatment = StringField(required=False, db_field="tratamiento")
    complications = StringField(required=False, db_field="complicaciones")
    adherance_treatment = StringField(required=False, db_field="apego_tratamiento")

class SubstanceConsumption(EmbeddedDocument):
    cosnumption = BooleanField(required=False, db_field="consumo")
    starting_age = StringField(required=False, db_field="edad_inicio")
    quantity = StringField(required=False, db_field="cantidad")
    frequency = StringField(required=False, db_field="frecuencia")
    last_consumption = StringField(required=False, db_field="ultimo consumo")

class Background(EmbeddedDocument):
    has_background = BooleanField(required=False, db_field="tiene_antecedente")
    notes = StringField(required=False, db_field="notas")

class Pathological(EmbeddedDocument):
    chronic_degenerative_diseases = StringField(required=False, db_field="enfermedades_cronicodegenerativas")
    infectious_contagious_diseases = StringField(required=False, db_field="enfermedades_infectocontagiosas")
    surgeries = EmbeddedDocumentField(Background, required=False, db_field="cirugias")
    jail = EmbeddedDocumentField(Background, required=False, db_field="carcel")
    blood_transfusions = EmbeddedDocumentField(Background, required=False, db_field="transfusiones_sanguineas")
    allergies = EmbeddedDocumentField(Background, required=False, db_field="alergias")
    trauma = EmbeddedDocumentField(Background, required=False, db_field="traumatismos")
    alcoholism = EmbeddedDocumentField(SubstanceConsumption, required=False, db_field="alcoholismo")
    smoking = EmbeddedDocumentField(SubstanceConsumption, required=False, db_field="tabaquismo")
    drug_addictions = EmbeddedDocumentField(SubstanceConsumption, required=False, db_field="toxicomanias")

class MaleSexualHealth(EmbeddedDocument):
    start_sexual_life = IntField(required=False, db_field="inicio_vida_sexual")
    sexual_partners = IntField(required=False, db_field="parejas_sexuales")
    std = StringField(required=False, db_field="ets")
    contraceptive_methods = StringField(required=False, db_field="metodos_anticonceptivos")

class CancerTest(EmbeddedDocument):
    date = DateField(required=False, db_field="fecha")
    result = StringField(required=True, db_field="resultado")

class FemaleSexualHealth(EmbeddedDocument):
    menarche = BooleanField(required=False, db_field="menarca")
    menarche_age = IntField(required=False, db_field="edad_menarca")
    rhythm = StringField(required=False, db_field="ritmo_menarca")
    start_sexual_life = IntField(required=False, db_field="inicio_vida_sexual")
    high_risk_partners = BooleanField(required=False, db_field="parejas_alto_riesgo")
    sexual_partners = IntField(required=False, db_field="parejas_sexuales")
    std = EmbeddedDocumentField(Background, required=False, db_field="ets")
    gestations = StringField(required=False, db_field="gestas")
    deliveries = StringField(required=False, db_field="partos")
    abortions = StringField(required=False, db_field="abortos")
    date_last_delivery = DateField(required=False, db_field="fecha_ultimo_parto")
    age_first_pregnancy = IntField(required=False, db_field="edad_primer_embarazo")
    family_planning_methods = StringField(required=False, db_field="metodos_planificacion_familiar")
    date_last_menstruation = DateField(required=False, db_field="fecha_ultima_regla")
    menopause = BooleanField(required=False, db_field="menopausia")
    hormonal_therapy = StringField(required=False, db_field="terapia_remplazo_hormonal")
    breastfeeding = BooleanField(required=False, db_field="lactancia_materna")
    last_pap_smear = EmbeddedDocumentField(CancerTest, required=False, db_field="ultimo_papanicolaou")
    last_hybrid_test = EmbeddedDocumentField(CancerTest, required=False, db_field="ultima_prueba_hibridos")
    last_mammography = EmbeddedDocumentField(CancerTest, required=False, db_field="ultima_mamografia")

class Skin(EmbeddedDocument):
    color_changes = ListField(StringField(), required=False, db_field="cambios_coloracion")
    eruptions = BooleanField(required=False, db_field="erupciones")
    spots = BooleanField(required=False, db_field="manchas")
    pruritus = BooleanField(required=False, db_field="prurito")
    dryness = BooleanField(required=False, db_field="sequedad")
    volume_increase = BooleanField(required=False, db_field="aumento_volumen")
    nails_hair = BooleanField(required=False, db_field="unas_pelo")
    nodules = BooleanField(required=False, db_field="nodulos")
    observations = StringField(required=False, db_field="observaciones")

class OphthalmicSystem(EmbeddedDocument):
    vision_changes = ListField(StringField(), required=False, db_field="cambios_vision")
    uses_glasses = ListField(StringField(), required=False, db_field="uso_lentes")
    observations = StringField(required=False, db_field="observaciones")

class EntSystem(EmbeddedDocument):
    hearing_changes = ListField(StringField(), required=False, db_field="cambios_audicion")
    ear_pain = BooleanField(required=False, db_field="dolor_oido")
    vertigo = BooleanField(required=False, db_field="vertigo")
    fluid_leaking_ear = BooleanField(required=False, db_field="salida_liquido_oido")
    smelling_changes = BooleanField(required=False, db_field="cambios_olfato")
    fluid_leaking_nose = BooleanField(required=False, db_field="salida_liquido_nariz")
    nose_pain = BooleanField(required=False, db_field="dolor_nariz")

class MouthThroat(EmbeddedDocument):
    teeth_conditions = ListField(StringField(), required=False, db_field="condiciones_dientes")
    gum_conditions = ListField(StringField(), required=False, db_field="condiciones_encias")
    tongue_conditions = ListField(StringField(), required=False, db_field="condiciones_lengua")
    speaking_problems = StringField(required=False, db_field="problemas_hablar")
    thirst = BooleanField(required=False, db_field="sed")
    speaking_eating_pain = BooleanField(required=False, db_field="dolor_comer_hablar")
    bad_breath = BooleanField(required=False, db_field="mal_aliento")
    excess_salivation = BooleanField(required=False, db_field="exceso_salivacion")
    observations = StringField(required=False, db_field="observaciones")

class DigestiveSystem(EmbeddedDocument):
    apettite_changes = BooleanField(required=False, db_field="cambio_apetito")
    sickness_vomit = BooleanField(required=False, db_field="nauseas_vomito")
    abdominal_distention = BooleanField(required=False, db_field="distension_abdominal")
    esophagus_conditions = ListField(StringField(), required=False, db_field="condiciones_esofago")
    evacuation_changes = ListField(StringField(), required=False, db_field="cambios_evacuaciones")
    liver_bile_conditions = ListField(StringField(), required=False, db_field="condiciones_higado_biliares")
    pancreas_conditions = ListField(StringField(), required=False, db_field="condiciones_pancreas")
    observations = StringField(required=False, db_field="observaciones")

class RespiratoryApparatus(EmbeddedDocument):
    cough = BooleanField(required=False, db_field="tos")
    chest_pain = BooleanField(required=False, db_field="dolor_toracico")
    hemoptysis = BooleanField(required=False, db_field="hemoptisis")
    vomiting_cough = BooleanField(required=False, db_field="vomica")
    cyanosis = BooleanField(required=False, db_field="cianosis")
    fatigue = BooleanField(required=False, db_field="fatiga")
    breathing_problems = BooleanField(required=False, db_field="problemas_respirar")
    breathing_changes = BooleanField(required=False, db_field="cambios_respiracion")
    observations = StringField(required=False, db_field="observaciones")

class CardiovascularApparatus(EmbeddedDocument):
    dyspnoea = BooleanField(required=False, db_field="disnea")
    orthopnea = BooleanField(required=False, db_field="ortopnea")
    lipothymia = BooleanField(required=False, db_field="lipotimia")
    syncope = BooleanField(required=False, db_field="sincope")
    edema = BooleanField(required=False, db_field="edema")
    cyanosis = BooleanField(required=False, db_field="cianosis")
    chest_pain = BooleanField(required=False, db_field="color_toracico")
    palpitations = BooleanField(required=False, db_field="palpitaciones")
    observations = StringField(required=False, db_field="observaciones")

class GenitourinarySystem(EmbeddedDocument):
    urinating_changes = BooleanField(required=False, db_field="cambios_miccionar")
    urinating_pain = BooleanField(required=False, db_field="dolor_miccionar")
    jet_changes = BooleanField(required=False, db_field="cambios_chorro")
    menstruation_changes = BooleanField(required=False, db_field="cambios_menstruacion")
    dyspareunia = BooleanField(required=False, db_field="dispareunia")
    libido_changes = BooleanField(required=False, db_field="cambios_libido")
    observations = StringField(required=False, db_field="observaciones")

class MusculoskeletalSystem(EmbeddedDocument):
    muscle_pain = BooleanField(required=False, db_field="dolor_muscular")
    joint_pain = BooleanField(required=False, db_field="dolor_articular")
    joint_stiffness = BooleanField(required=False, db_field="rigidez_articular")
    nodules = BooleanField(required=False, db_field="nodulos")
    bone_pain = BooleanField(required=False, db_field="dolor_osea")
    ambulation_changes = BooleanField(required=False, db_field="cambios_deambulacion")
    observations = StringField(required=False, db_field="observaciones")

class HematologicalSystem(EmbeddedDocument):
    weakness = BooleanField(required=False, db_field="debilidad")
    color_changes = BooleanField(required=False, db_field="cambios_coloracion")
    bleeding = BooleanField(required=False, db_field="hemorragias")
    petechiae = BooleanField(required=False, db_field="petequias")
    ecchymosis = BooleanField(required=False, db_field="equimosis")
    bruises = BooleanField(required=False, db_field="hematomas")
    lymphadenopathy  = BooleanField(required=False, db_field="adenopatias")
    observations = StringField(required=False, db_field="observaciones")

class NervousSystem(EmbeddedDocument):
    headache = BooleanField(required=False, db_field="cefalea")
    seizures = BooleanField(required=False, db_field="convulciones")
    memory_changes = BooleanField(required=False, db_field="cambios_memoria")
    sphincters_changes = BooleanField(required=False, db_field="cambios_esfinteres")
    loss_of_feeling = BooleanField(required=False, db_field="perdida_sensacion")
    loss_of_movement = BooleanField(required=False, db_field="perdida_movimiento")
    loss_of_balance = BooleanField(required=False, db_field="perdida_equilibrio")
    language_disorders = BooleanField(required=False, db_field="trastornos_lenguaje")
    gait_changes = BooleanField(required=False, db_field="cambios_marcha")
    tremors = BooleanField(required=False, db_field="temblores")
    paralysis = BooleanField(required=False, db_field="paralisis")
    parasthesia = BooleanField(required=False, db_field="parestesias")
    paresis = BooleanField(required=False, db_field="paresias")
    observations = StringField(required=False, db_field="observaciones")

class PsychicSystem(EmbeddedDocument):
    distress = BooleanField(required=False, db_field="angustia")
    depression = BooleanField(required=True, db_field="depresion")
    interest_changes = BooleanField(required=False, db_field="cambios_interes")
    guilt = BooleanField(required=False, db_field="culpa")
    suicidal_thoughts = BooleanField(required=False, db_field="ideas_suicidas")
    hallucinations = BooleanField(required=False, db_field="alucinaciones")
    delirium = BooleanField(required=False, db_field="delirio")
    observations = StringField(required=False, db_field="observaciones")

class FollowUp(EmbeddedDocument):
    treatment_changes = EmbeddedDocumentField(Background, required=False, db_field="cambios_tratamiento")
    actual_symptoms = StringField(required=False, db_field="sintomas_actuales")
    last_medication_efects = StringField(required=False, db_field="efectos_ultima_administracion_medicamentos")
    psychology_follow_up = StringField(required=False, db_field="seguimiento_psicologico")
    actual_diagnostic = StringField(required=False, db_field="diagnostico_actual")

class ApparatusAndSystems(EmbeddedDocument):
    skin = EmbeddedDocumentField(Skin, required=False, db_field="piel")
    ophthalmic_system = EmbeddedDocumentField(OphthalmicSystem, required=False, db_field="sistema_oftalmologico")
    ent_system = EmbeddedDocumentField(EntSystem, required=False, db_field="sistema_otorrinolaringologico")
    mouth_throat = EmbeddedDocumentField(MouthThroat, required=False, db_field="boca_garganta")
    digestive_system = EmbeddedDocumentField(DigestiveSystem, required=False, db_field="sistema_digestivo")
    respiratory_apparatus = EmbeddedDocumentField(RespiratoryApparatus, required=False, db_field="aparato_respiratorio")
    cardiovascular_apparatus = EmbeddedDocumentField(CardiovascularApparatus, required=False, db_field="aparato_cardiovascular")
    genitourinary_system = EmbeddedDocumentField(GenitourinarySystem, required=False, db_field="sistema_genitourinario")
    musculoskeletal_system = EmbeddedDocumentField(MusculoskeletalSystem, required=False, db_field="sistema_musculo_esqueletico")
    hematological_system = EmbeddedDocumentField(HematologicalSystem, required=False, db_field="sistema_hematologico")
    nervous_system = EmbeddedDocumentField(NervousSystem, required=False, db_field="sistema_nervioso")
    psychic_system = EmbeddedDocumentField(PsychicSystem, required=False, db_field="sistema_psiquico")
    physical_observations = StringField(required=False, db_field="observaciones_exploracion_fisica")
    follow_up = EmbeddedDocumentField(FollowUp, required=False, db_field="seguimiento")
### ----------------------------------- End Datos Paciente Classes----------------------------------- ###

### ----------------------------------- Datos Paciente ----------------------------------- ###
class PatientDataForm(EmbeddedDocument):
    birth_state = StringField(required=False, db_field="entidad_nacimiento")
    birth_city = StringField(required=False, db_field="ciudad_nacimiento")

    permanent_address = EmbeddedDocumentField(Address, required=False, db_field="direccion_permanente")

    email = StringField(required=False, db_field="correo")
    income = IntField(required=False, db_field="ingreso")
    medical_service = StringField(required=False, db_field="servicio_medico")
    scholarship = StringField(required=False, db_field="escolaridad")
    ocupation = StringField(required=False, db_field="ocupacion")
    religion = StringField(required=False, db_field="religion")
    civil_state = StringField(required=False, db_field="estado_civil")

    clinic_record_date = DateField(required=False, db_field="realizacion_historial_clinico")

    temp_address = EmbeddedDocumentField(Address, required=False, db_field="direccion_temporal")

    responsable_family_member = EmbeddedDocumentField(ResponsableFamilyMember, required=False, db_field="familiar_responsable")

    personal_pathological_history = EmbeddedDocumentField(Pathological, required=False, db_field="antecedentes_personales_patologicos")

    male_sexual_health = EmbeddedDocument(MaleSexualHealth, required=False, db_field="en_caso_de_ser_hombre")
    female_sexual_health = EmbeddedDocument(FemaleSexualHealth, required=False, db_field="en_caso_de_ser_mujer")

    apparatus_and_systems = EmbeddedDocumentField(ApparatusAndSystems, required=False, db_field="aparatos_y_sistemas")

### ----------------------------------- End Datos Paciente ----------------------------------- ###

### ---------------------------------- Family Data Classes ------------------------------------ ###

class FamilyStructure(EmbeddedDocument):
    family_member_name = StringField(required=False, db_field="nombre_familiar")
    family_member_age = StringField(required=False, db_field="edad_familiar")
    family_member_relationship = StringField(required=False, db_field="parentesco_familiar")
    family_member_civil_state = StringField(required=False, db_field="estado_civil_familiar")
    family_member_ocupation = StringField(required=False, db_field="ocupacion_familiar")
    family_member_income = StringField(required=False, db_field="ingreso_familiar")

class FamilyHistory(EmbeddedDocument):
    relationship = StringField(required=False, db_field="parentesco")
    living = BooleanField(required=False, db_field="vive")
    diseases = ListField(StringField(), required=False, db_field="enfermedades")
    cause_of_death = StringField(required=False, db_field="causa_defuncion")

class SubstanceAbuse(EmbeddedDocument):
    household_member_substance = BooleanField(required=False, db_field="consume_miembro_vivienda")
    substance_consumed = StringField(required=False, db_field="sustancia_consumida")
    consuming_member = StringField(required=False,  db_field="miembro_consumidor")
    consuming_frequency = StringField(required=False, db_field="frecuencia_consumo")

### --------------------------------- End Family Data Classes --------------------------------- ###

### --------------------------------------- Family Data --------------------------------------- ###

class FamilyDataForm(EmbeddedDocument):
    family_structure = EmbeddedDocumentListField(FamilyStructure, required=False, db_field="estructura_familiar")
    
    family_history = EmbeddedDocumentListField(FamilyHistory, required=False, db_field= "antecedentes_familiares")
    
    number_sicks = StringField(required=False, db_field="numero_de_enfermos")
    
    substance_abuse = EmbeddedDocumentField(SubstanceAbuse, required=False, db_field="consume_sustancias_toxicas")

### ------------------------------------- End Family Data ------------------------------------- ###

### --------------------------------- Home and Economy Classes -------------------------------- ###

class LivingPlace(EmbeddedDocument):
    place_type = StringField(required=False, db_field="tipo_vivienda")
    place_services = StringField(required=False, db_field="servicios_vivienda")
    place_material = StringField(required=False, db_field="material_vivienda")
    place_distribution = ListField(StringField(), required=False, db_field="distribucion_vivienda")
    place_person_per_room = StringField(required=False, db_field="personas_por_cuarto_vivienda")
    place_location = StringField(required=False, db_field="zona_vivienda")
    place_exposition = StringField(required=False, db_field="exposicion_biomasas")

class HouseholdGoods(EmbeddedDocument):
    electrodomestics = StringField(required=False, db_field="electrodomesticos")
    air_conditioner = StringField(required=False, db_field="refrigeracion")

class FamilyTransportation(EmbeddedDocument):
    transportation = StringField(required=False, db_field="transporte")
    car_brand = StringField(required=False, db_field="marca_auto")
    car_model = StringField(required=False, db_field="modelo_auto")

class Outcome(EmbeddedDocument):
    outcome_electric_power = IntField(required=False, db_field="energia_electrica_egreso")
    outcome_water = IntField(required=False, db_field="agua_egreso")
    outcome_gas = IntField(required=False, db_field="gas_egreso")
    outcome_phone = IntField(required=False, db_field="telefono_egreso")
    outcome_food = IntField(required=False, db_field="alimentos_egreso")
    outcome_rent = IntField(required=False, db_field="renta_egreso")
    outcome_transportation = IntField(required=False, db_field="transporte_egreso")
    outcome_education = IntField(required=False, db_field="educacion_egreso")
    outcome_clothing = IntField(required=False, db_field="vestimenta_egreso")
    outcome_recreational = IntField(required=False, db_field="diversion_egreso")
    outcome_other = IntField(required=False, db_field="otros_egreso")

### ------------------------------- End Home and Economy Classes ------------------------------ ###

### ------------------------------------- Home and Economy ------------------------------------ ###

class HomeAndEconomyForm(EmbeddedDocument):
    living_place = EmbeddedDocumentField(LivingPlace, required=False, db_field="vivienda")
    
    household_goods = EmbeddedDocumentField(HouseholdGoods, required=False, db_field="bienes_hogar")
    
    family_transportation = EmbeddedDocumentField(FamilyTransportation, required=False, db_field="transporte_familiar")
    
    geographic_area = StringField(required=False, db_field="area_geografica")
    
    sick_members = StringField(required=False, db_field="familiares_enfermos")
    
    outcome = EmbeddedDocumentField(Outcome, required=False, db_field="egresos")

### ----------------------------------- End Home and Economy ---------------------------------- ###

### ----------------------------------- Alimentacion ----------------------------------- ###
class Diet(EmbeddedDocument):
    perceived_quality = StringField(required=False, db_field="calidad_percibida")
    meals_per_day = StringField(required=False, db_field="comidas_al_dia")
    food_preparation = StringField(required=False, db_field="preparacion_alimentos")
    water_per_day = StringField(required=False, db_field="agua_al_dia")
    red_meat_week = IntField(required=False, db_field="carne_roja_semana")
    red_meat_month = IntField(required=False, db_field="carne_roja_mes")
    chicken_week = IntField(required=False, db_field="pollo_semana")
    chicken_month = IntField(required=False, db_field="pollo_mes")
    fish_week = IntField(required=False, db_field="pescado_semana")
    fish_month = IntField(required=False, db_field="pescado_mes")
    grain_week = IntField(required=False, db_field="granos_semana")
    grain_month = IntField(required=False, db_field="granos_mes")
    dairy_week = IntField(required=False, db_field="lacteos_semana")
    dairy_month = IntField(required=False, db_field="lacteos_mes")
    bread_week = IntField(required=False, db_field="pan_semana")
    bread_month = IntField(required=False, db_field="pan_mes")
    bread_pasta_week = IntField(required=False, db_field="bread_pasta_semana")
    bread_pasta_month = IntField(required=False, db_field="bread_pasta_mes")
    vegetables_fruits_week = IntField(required=False, db_field="verduras_frutas_semana")
    vegetables_fruits_month = IntField(required=False, db_field="verduras_frutas_mes")
### ----------------------------------- End Alimentacion ----------------------------------- ###

### ----------------------------------- Higiene / Actividad Fisica / Pasatiempo ----------------------------------- ###
class HygienePhysActPasstime(EmbeddedDocument):
    shower_frequency = StringField(required=False, db_field="frecuencia_duchas")
    toothbrushing_frequency = StringField(required=False, db_field="frecuencia_lavar_dientes")
    home_hygiene = StringField(required=False, db_field="higiene_hogar")
    phys_activity = StringField(required=False, db_field="actividad_fisica")
    passtime = StringField(required=False, db_field="pasatiempo")
### ----------------------------------- End Higiene / Actividad Fisica / Pasatiempo ----------------------------------- ###

### ----------------------------------- Otros ----------------------------------- ###
class Others(EmbeddedDocument):
    how_found_out = StringField(required=False, db_field="como_se_entero")
    support_background = EmbeddedDocumentField(Background, required=False, db_field="antecedentes_apoyo")
    observations = StringField(required=False, db_field="observations")
    social_plan = StringField(required=False, db_field="plan_social")
    socioeconomic_class = StringField(required=False, db_field="clase_socioeconomica")
    social_worker = StringField(required=False, db_field="trabajador_social")
    animals = StringField(required=False, db_field="animales")
    vaccinated_animals = BooleanField(required=False, db_field="animales_vacunados")
    ticks_animals = BooleanField(required=False, db_field="animales_garrapatas")
    diseases_animals = BooleanField(required=False, db_field="animales_enfermedades")
    vaccination_card = StringField(required=False, db_field="cartilla_vacunacion")
### ----------------------------------- End Otros ----------------------------------- ###

class GeneralInfo(Document):
    meta = {"collection": "informacion_general"}

    name = StringField(required=False, db_field="nombre")
    age = IntField(required=False, db_field="edad")
    sex = StringField(required=False, db_field="sexo")
    civil_state = StringField(required=False, db_field="estado_civil")
    birth_date = DateField(required=False, db_field="fecha_naciemiento")

    patient_data = EmbeddedDocumentField(PatientDataForm, required=False, db_field="datos_paciente")

    family_data = EmbeddedDocumentField(FamilyDataForm, required=False, db_field="datos_paciente")

    home_and_economy = EmbeddedDocumentField(HomeAndEconomyForm, required=False, db_field="datos_paciente")

    diet = EmbeddedDocumentField(Diet, required=False, db_field="alimentacion")
    
    hygiene_phys_act_passtime = EmbeddedDocumentField(HygienePhysActPasstime, required=False, db_field="higiene_act_fis_pasatiempo")

    others = EmbeddedDocumentField(Others, required=False, db_field="otros")


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
    ##medical_forms = ListField(ReferenceField(MedicalForm, required=False, db_field="formularios_medicos"))
    ##social_forms = ListField(ReferenceField(SocioeconomicForm, required=False, db_field="formularios_socioeconomicos"))
    
    def __str__(self):
        return f"Patient({self.name + ' ' + self.paternal_last_name})"

    def __repr__(self):
        return self.__str__()