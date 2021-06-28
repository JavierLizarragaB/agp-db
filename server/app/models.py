from mongoengine.fields import DecimalField, EmbeddedDocumentListField
from werkzeug.security import generate_password_hash
from mongoengine import Document, EmbeddedDocument
from mongoengine import StringField, IntField, ListField, BooleanField, DateField, EmbeddedDocumentField
from flask_login import UserMixin

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
    consumption = BooleanField(required=False, db_field="consumo")
    starting_age = StringField(required=False, db_field="edad_inicio")
    quantity = StringField(required=False, db_field="cantidad")
    frequency = StringField(required=False, db_field="frecuencia")
    last_consumption = StringField(required=False, db_field="ultimo_consumo")

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
    result = StringField(required=False, db_field="resultado")

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
    cesarean_births = StringField(required=False, db_field="cesareas")
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
    ##Cambios coloracion
    paleness = BooleanField(required=False, db_field="palidez")
    icterus = BooleanField(required=False, db_field="ictericia")
    cyanosis = BooleanField(required=False, db_field="cianosis")

    eruptions = BooleanField(required=False, db_field="erupciones")
    spots = BooleanField(required=False, db_field="manchas")
    pruritus = BooleanField(required=False, db_field="prurito")
    dryness = BooleanField(required=False, db_field="sequedad")
    volume_increase = BooleanField(required=False, db_field="aumento_volumen")
    nails_hair = BooleanField(required=False, db_field="unas_pelo")
    nodules = BooleanField(required=False, db_field="nodulos")
    observations = StringField(required=False, db_field="observaciones")

class OphthalmicSystem(EmbeddedDocument):
    ##Cambios vision
    diplopia = BooleanField(required=False, db_field="diplopia")
    eye_pain = BooleanField(required=False, db_field="dolor_ocular")
    photophobia = BooleanField(required=False, db_field="fotofobia")
    amaurosis = BooleanField(required=False, db_field="amaurosis")
    photopsies = BooleanField(required=False, db_field="fotopsias")
    myodesopsias = BooleanField(required=False, db_field="miodesopsias")
    scotomas = BooleanField(required=False, db_field="scotomas")
    hemeralopia = BooleanField(required=False, db_field="hemeralopia")
    nyctalopia = BooleanField(required=False, db_field="nictalopia")

    ##Uso de lentes
    myopia = BooleanField(required=False, db_field="miopia")
    astigmatism = BooleanField(required=False, db_field="astigmatismo")

    observations = StringField(required=False, db_field="observaciones")

class EntSystem(EmbeddedDocument):
    ##Cambios en la audicion
    otalgia = BooleanField(required=False, db_field="otalgia")
    algiacusis = BooleanField(required=False, db_field="algiacusia")
    presbycusis = BooleanField(required=False, db_field="presbiacusia")
    anacusis = BooleanField(required=False, db_field="anacusia")
    tinnitus = BooleanField(required=False, db_field="tinnitus")
    ear_ringing = BooleanField(required=False, db_field="acufenos")
    hearing_loss = BooleanField(required=False, db_field="hipoacusia")

    ear_pain = BooleanField(required=False, db_field="dolor_oido")
    vertigo = BooleanField(required=False, db_field="vertigo")
    fluid_leaking_ear = BooleanField(required=False, db_field="salida_liquido_oido")
    smelling_changes = BooleanField(required=False, db_field="cambios_olfato")
    fluid_leaking_nose = BooleanField(required=False, db_field="salida_liquido_nariz")
    nose_pain = BooleanField(required=False, db_field="dolor_nariz")

class MouthThroat(EmbeddedDocument):
    ##Dientes
    cavities = BooleanField(required=False, db_field="caries")
    dental_agenesis = BooleanField(required=False, db_field="agenesia_dental")
    prothesis = BooleanField(required=False, db_field="dientes_protesis")

    ##Encias
    gingivorrhea = BooleanField(required=False, db_field="encias_gingivorrea")
    gingivorrhagia = BooleanField(required=False, db_field="encias_gingivorragia")
    pain = BooleanField(required=False, db_field="encias_dolor_encias")
    gums_ulcerations = BooleanField(required=False, db_field="encias_ulceras")

    ##Lengua
    colorations = BooleanField(required=False, db_field="lengua_coloraciones")
    size = BooleanField(required=False, db_field="lengua_tamaño")
    plaque_presence = BooleanField(required=False, db_field="lengua_presencia_placa")
    tongue_ulcerations = BooleanField(required=False, db_field="lengua_ulceras")

    ##Problemas de hablar
    dysphonia = BooleanField(required=False, db_field="disfonia")
    aphonia = BooleanField(required=False, db_field="afonia")

    thirst = BooleanField(required=False, db_field="sed")
    speaking_eating_pain = BooleanField(required=False, db_field="dolor_comer_hablar")
    bad_breath = BooleanField(required=False, db_field="mal_aliento")
    excess_salivation = BooleanField(required=False, db_field="exceso_salivacion")
    observations = StringField(required=False, db_field="observaciones")

class DigestiveSystem(EmbeddedDocument):
    apettite_changes = BooleanField(required=False, db_field="cambio_apetito")
    sickness_vomit = BooleanField(required=False, db_field="nauseas_vomito")
    abdominal_distention = BooleanField(required=False, db_field="distension_abdominal")

    ##Esofago
    gastralgia = BooleanField(required=False, db_field="gastralgia")
    acidity = BooleanField(required=False, db_field="acidez")
    postrandial_fullnes = BooleanField(required=False, db_field="llenura_postprandial")

    ##Cambios en evacuaciones
    tenesmus = BooleanField(required=False, db_field="tenesmo")
    bids = BooleanField(required=False, db_field="pujos")
    encopresis = BooleanField(required=False, db_field="encopresis")
    anal_pain = BooleanField(required=False, db_field="dolor_anal")
    constipation = BooleanField(required=False, db_field="constipacion")
    rectal_bleeding = BooleanField(required=False, db_field="rectorragia")
    hematochezia = BooleanField(required=False, db_field="hematoquecia")

    ##Higado y vias biliares
    jaundice = BooleanField(required=False, db_field="ictericia")
    pruritus = BooleanField(required=False, db_field="prurito")
    fever = BooleanField(required=False, db_field="ulcerations")
    ascites = BooleanField(required=False, db_field="ascitis")
    biliary_colic = BooleanField(required=False, db_field="colico_biliar")
    hepatic_colic = BooleanField(required=False, db_field="colico_epatitico")
    acholia = BooleanField(required=False, db_field="acolia")

    ##Pancreas
    steatorrhea = BooleanField(required=False, db_field="esteatorrea")
    diarrhea = BooleanField(required=False, db_field="diarrea")
    hypersalivation = BooleanField(required=False, db_field="sialorrea")
    abdominal_pain = BooleanField(required=False, db_field="dolor_abdomen")
    back_pain = BooleanField(required=False, db_field="dolor_espalda")

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
    depression = BooleanField(required=False, db_field="depresion")
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

    male_sexual_health = EmbeddedDocumentField(MaleSexualHealth, required=False, db_field="en_caso_de_ser_hombre")
    female_sexual_health = EmbeddedDocumentField(FemaleSexualHealth, required=False, db_field="en_caso_de_ser_mujer")

    apparatus_and_systems = EmbeddedDocumentField(ApparatusAndSystems, required=False, db_field="aparatos_y_sistemas")

### ----------------------------------- End Datos Paciente ----------------------------------- ###

### ---------------------------------- Family Data Classes ------------------------------------ ###

class FamilyStructure(EmbeddedDocument):
    first_member_name = StringField(required=False, db_field="primer_nombre_familiar")
    first_member_age = StringField(required=False, db_field="primera_edad_familiar")
    first_member_relationship = StringField(required=False, db_field="primer_parentesco_familiar")
    first_member_civil_state = StringField(required=False, db_field="primer_estado_civil_familiar")
    first_member_ocupation = StringField(required=False, db_field="primer_ocupacion_familiar")
    first_member_income = StringField(required=False, db_field="primer_ingreso_familiar")

    second_member_name = StringField(required=False, db_field="segundo_nombre_familiar")
    second_member_age = StringField(required=False, db_field="segunda_edad_familiar")
    second_member_relationship = StringField(required=False, db_field="segundo_parentesco_familiar")
    second_member_civil_state = StringField(required=False, db_field="segundo_estado_civil_familiar")
    second_member_ocupation = StringField(required=False, db_field="segundo_ocupacion_familiar")
    second_member_income = StringField(required=False, db_field="segundo_ingreso_familiar")

    third_member_name = StringField(required=False, db_field="tercer_nombre_familiar")
    third_member_age = StringField(required=False, db_field="tercera_edad_familiar")
    third_member_relationship = StringField(required=False, db_field="tercer_parentesco_familiar")
    third_member_civil_state = StringField(required=False, db_field="tercer_estado_civil_familiar")
    third_member_ocupation = StringField(required=False, db_field="tercer_ocupacion_familiar")
    third_member_income = StringField(required=False, db_field="tercer_ingreso_familiar")

    fourth_member_name = StringField(required=False, db_field="cuarto_nombre_familiar")
    fourth_member_age = StringField(required=False, db_field="cuarta_edad_familiar")
    fourth_member_relationship = StringField(required=False, db_field="cuarto_parentesco_familiar")
    fourth_member_civil_state = StringField(required=False, db_field="cuarto_estado_civil_familiar")
    fourth_member_ocupation = StringField(required=False, db_field="cuarto_ocupacion_familiar")
    fourth_member_income = StringField(required=False, db_field="cuarto_ingreso_familiar")

    fifth_member_name = StringField(required=False, db_field="quinto_nombre_familiar")
    fifth_member_age = StringField(required=False, db_field="quinta_edad_familiar")
    fifth_member_relationship = StringField(required=False, db_field="quinto_parentesco_familiar")
    fifth_member_civil_state = StringField(required=False, db_field="quinto_estado_civil_familiar")
    fifth_member_ocupation = StringField(required=False, db_field="quinto_ocupacion_familiar")
    fifth_member_income = StringField(required=False, db_field="quinto_ingreso_familiar")

    sixth_member_name = StringField(required=False, db_field="sexto_nombre_familiar")
    sixth_member_age = StringField(required=False, db_field="sexta_edad_familiar")
    sixth_member_relationship = StringField(required=False, db_field="sexto_parentesco_familiar")
    sixth_member_civil_state = StringField(required=False, db_field="sexto_estado_civil_familiar")
    sixth_member_ocupation = StringField(required=False, db_field="sexto_ocupacion_familiar")
    sixth_member_income = StringField(required=False, db_field="sexto_ingreso_familiar")

    seventh_member_name = StringField(required=False, db_field="séptimo_nombre_familiar")
    seventh_member_age = StringField(required=False, db_field="séptima_edad_familiar")
    seventh_member_relationship = StringField(required=False, db_field="séptimo_parentesco_familiar")
    seventh_member_civil_state = StringField(required=False, db_field="séptimo_estado_civil_familiar")
    seventh_member_ocupation = StringField(required=False, db_field="séptimo_ocupacion_familiar")
    seventh_member_income = StringField(required=False, db_field="séptimo_ingreso_familiar")

class FamilyHistoryClass(EmbeddedDocument):
    living = BooleanField(required=False, db_field="vive")
    diseases = StringField(required=False, db_field="enfermedades")
    cause_of_death = StringField(required=False, db_field="causa_defuncion")

class FamilyMemberQuantity(EmbeddedDocument):
    quantity = IntField(required=False, db_field="cantidad")
    diseases = StringField(required=False, db_field="enfermedades")
    cause_of_death = StringField(required=False, db_field="causa_defuncion")

class FamilyHistory(EmbeddedDocument):
    paternal_grandfather = EmbeddedDocumentField(FamilyHistoryClass, required=False, db_field= "abuelo_paterno")
    paternal_grandmother = EmbeddedDocumentField(FamilyHistoryClass, required=False, db_field= "abuela_paterna")
    
    maternal_grandfather = EmbeddedDocumentField(FamilyHistoryClass, required=False, db_field= "abuelo_materno")
    maternal_grandmother = EmbeddedDocumentField(FamilyHistoryClass, required=False, db_field= "abuela_materna")
    
    father = EmbeddedDocumentField(FamilyHistoryClass, required=False, db_field= "padre")
    mother = EmbeddedDocumentField(FamilyHistoryClass, required=False, db_field= "madre")

    siblings = EmbeddedDocumentField(FamilyMemberQuantity, required=False, db_field="hermanos")

    sons = EmbeddedDocumentField(FamilyMemberQuantity, required=False, db_field="hijos")


class SubstanceAbuse(EmbeddedDocument):
    household_member_substance = BooleanField(required=False, db_field="consume_miembro_vivienda")
    substance_consumed = StringField(required=False, db_field="sustancia_consumida")
    consuming_member = StringField(required=False,  db_field="miembro_consumidor")
    consuming_frequency = StringField(required=False, db_field="frecuencia_consumo")

### --------------------------------- End Family Data Classes --------------------------------- ###

### --------------------------------------- Family Data --------------------------------------- ###

class FamilyDataForm(EmbeddedDocument):
    family_structure = EmbeddedDocumentField(FamilyStructure, required=False, db_field="estructura_familiar")
    
    family_history = EmbeddedDocumentField(FamilyHistory, required=False, db_field= "antecedentes_familiares")
    
    number_sicks = StringField(required=False, db_field="numero_de_enfermos")
    
    substance_abuse = EmbeddedDocumentField(SubstanceAbuse, required=False, db_field="consume_sustancias_toxicas")

### ------------------------------------- End Family Data ------------------------------------- ###

### --------------------------------- Home and Economy Classes -------------------------------- ###

class PlaceDistribution(EmbeddedDocument):
    kitchen = BooleanField(required=False, db_field="cocina")
    lounge = BooleanField(required=False, db_field="sala")
    dining_room = BooleanField(required=False, db_field="comedor")
    bedroom = BooleanField(required=False, db_field="recámara")
    bedroom_quantity = IntField(required=False, db_field="cantidad_de_recámaras")
    other_rooms = BooleanField(required=False, db_field="otros_cuartos")

class LivingPlace(EmbeddedDocument):
    place_type = StringField(required=False, db_field="tipo_vivienda")
    place_services = StringField(required=False, db_field="servicios_vivienda")
    place_material = StringField(required=False, db_field="material_vivienda")
    place_distribution = EmbeddedDocumentField(PlaceDistribution, required=False, db_field="distribucion_vivienda")
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
    outcome_electric_power = DecimalField(min_value=0, required=False, db_field="energia_electrica_egreso")
    outcome_water = DecimalField(min_value=0, required=False, db_field="agua_egreso")
    outcome_gas = DecimalField(min_value=0, required=False, db_field="gas_egreso")
    outcome_phone = DecimalField(min_value=0, required=False, db_field="telefono_egreso")
    outcome_food = DecimalField(min_value=0, required=False, db_field="alimentos_egreso")
    outcome_rent = DecimalField(min_value=0, required=False, db_field="renta_egreso")
    outcome_transportation = DecimalField(min_value=0, required=False, db_field="transporte_egreso")
    outcome_education = DecimalField(min_value=0, required=False, db_field="educacion_egreso")
    outcome_clothing = DecimalField(min_value=0, required=False, db_field="vestimenta_egreso")
    outcome_recreational = DecimalField(min_value=0, required=False, db_field="diversion_egreso")
    outcome_other = DecimalField(min_value=0, required=False, db_field="otros_egreso")

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
    birth_date = DateField(required=False, db_field="fecha_naciemiento")
    medical_dx = StringField(required=False, db_field="dx_medico")
    blood_type = StringField(requierd=False, db_field="sangre")
    emergency_contact_name = StringField(required=False, db_field="contacto_emergencia_nombre")
    emergency_contact_num = StringField(required=False, db_field="contacto_emergencia_num")
    shelter = BooleanField(required=False, db_field="albergue")
    companion = BooleanField(required=False, db_field="acompañante")
    quimio = BooleanField(required=False, db_field="quimio")

class FormInfo(Document):
    meta = {"collection": "informacion_formulario"}

    patient_data = EmbeddedDocumentField(PatientDataForm, required=False, db_field="datos_paciente")

    family_data = EmbeddedDocumentField(FamilyDataForm, required=False, db_field="datos_familia")

    home_and_economy = EmbeddedDocumentField(HomeAndEconomyForm, required=False, db_field="casa_economia")

    diet = EmbeddedDocumentField(Diet, required=False, db_field="alimentacion")
    
    hygiene_phys_act_passtime = EmbeddedDocumentField(HygienePhysActPasstime, required=False, db_field="higiene_act_fis_pasatiempo")

    others = EmbeddedDocumentField(Others, required=False, db_field="otros")


class Patients(Document):
    meta = {"collection": "pacientes"}

    folio = IntField(primary_key=True, db_field="folio")
    name = StringField(required=True, db_field="nombre")
    birth_date = DateField(required=True, db_field="fecha_nacimiento")
    sex = StringField(required=True, db_field="sexo")
    blood_type = StringField(required=True, db_field="tipo_sangre")
    emergency_contact_name = StringField(required=True, db_field="nombre_contacto_emergencia")
    emergency_contact_num = StringField(required=True, db_field="tel_contacto_emergencia")
    medical_dx = StringField(required=True, db_field="dx_medico")
    companion = BooleanField(required=True, db_field="acompañante")
    shelter = BooleanField(required=True, db_field="shelter")
    quimio = BooleanField(required=True, db_field="quimio")
    forms = ListField(StringField, required=False, db_field="formularios")
    
    def __str__(self):
        return f"Patient({self.name + ' ' + self.paternal_last_name})"

    def __repr__(self):
        return self.__str__()

class Studies(Document):
    meta = {"collection": "estudios"}

    studies = StringField(required=True, db_field="estudios_campo")

class Medicine(Document):
    meta = {"collection": "medicamentos"}

    medicine = StringField(required=True, db_field="medicina")

class Appointments(Document):
    meta = {"collection": "citas"}

    appointments = DateField(required=True, db_field="fecha")
    patient_folio = StringField(required=True, db_field="folio_paciente")
    appointment_description = StringField(required=True, db_field="descripcion")