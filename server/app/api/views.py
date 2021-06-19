from flask import request, jsonify, current_app
from datetime import datetime, timedelta
from werkzeug.security import generate_password_hash, check_password_hash
import jwt
from functools import wraps

from . import api
from ..models import Address, Background, Patients, User, ResponsableFamilyMember, FamilyDataForm, FamilyHistoryClass, FamilyStructure, FamilyHistory, SubstanceAbuse, HomeAndEconomyForm, LivingPlace, HouseholdGoods, FamilyTransportation, Outcome, Diet, HygienePhysActPasstime, Others


def token_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        ticket = request.args.get("token")

        if not ticket:
            return (False, 200)

        try:
            jwt.decode(ticket, current_app.config['SECRET_KEY'], algorithms=["HS256"])
        except:
            return (False, 200)
        
        return f(*args, **kwargs)
    return decorated

@api.route("/verify", methods=["GET", "POST"])
@token_required
def is_logged():
    
    return (True, 200)

@api.route("/time", methods=["GET"])
def time():
    return {"time": str(datetime.now())}


@api.route("/paciente/<id>", methods=["GET"])
def get_patient_by_mdb_id(id):
    """GET Lookup patient by database id."""

    patient = Patients.objects(id=id).first()
    if patient:
        return (patient.to_json(), 200)

    return ("Patient not found", 404)


@api.route("/paciente", methods=["GET"])
def get_patient_by_folio():
    folio = request.args.get("folio")
    if folio == None:
        return ("No folio number query param: ?folio=<value>", 403)

    patient = Patients.objects(folio=folio).first()
    return (jsonify(patient), 200)


@api.route("/paciente", methods=["POST"])
def post_patient():
    """POST Create or update patient."""
    json = request.get_json()
    if json == None:
        return ("JSON missing!", 400)

    folio = json.get("folio")
    name = json.get("name")
    paternal_last_name = json.get("paternal_last_name")
    maternal_last_name = json.get("maternal_last_name")

    try:
        patient = Patients.objects(folio=folio).first()

        if patient:
            patient.name = name
            patient.paternal_last_name = paternal_last_name
            patient.maternal_last_name = maternal_last_name
        else:
            patient = Patients(
                folio=folio,
                name=name,
                paternal_last_name=paternal_last_name,
                maternal_last_name=maternal_last_name
            )

        # Update database

        patient.save()
        return (jsonify(patient), 201)

    except Exception as e:
        print(e)
        return (e.__str__(), 500)


@api.route("/paciente/todos", methods=["GET"])
def get_all_patients():
    """GET Returns all the patients."""
    patients = Patients.objects().order_by("folio")
    return (jsonify(patients), 200)

@api.route("/log-in", methods=["POST"])
def get_user():
    """GET User by email"""
    json = request.get_json()
    person = User.objects(username=json.get("user")).first()    
    
    if person == None:
        return ({ 'message': "Correo o contrasena incorrectos"}, 200)
    
    if check_password_hash(person.password, json.get("passwrd")):
        token = jwt.encode({'user' : person.username, 'exp' : datetime.utcnow() + timedelta(minutes=280)}, current_app.config['SECRET_KEY'], algorithm="HS256")
        return (jsonify(True), 200)
    return ({ 'message': "Correo o contrasena incorrectos"}, 200)
    
@api.route("/user-panel/signup", methods=["POST"])
def set_user():
    """Post User"""
    json = request.get_json()
    person = User.objects(username=json.get("email")).first()  
    
    if person != None:
        return ({ 'message': "Correo ya utilizado"}, 200)
    try:
        person=User(
            username=json.get("email"),
            user_name=json.get("name"),
            user_paternal_last_name=json.get("lpname"),
            user_maternal_last_name=json.get("lmname"),
            password=generate_password_hash(json.get("password")),
            type=int(json.get("type"))
        ) 
        person.save()
        return (person.username, 200)
    except Exception as e:
        print(e)
        return (e.__str__(), 500)
    
@api.route("/user-panel/todos", methods=["GET"])
def get_users():
    """All User"""
    params = request.args.get("type")
    users = User.objects(type=int(params))
    return (jsonify(users), 200)

@api.route("/user-panel/delete", methods=["POST"])
def delete_user():
    """Delete User"""
    json = request.get_json()
    person = User.objects(username=json.get("email")).first()
    
    if person == None:
        return ({ 'message': "Correo no existe", 'email': json.get("email")}, 200)
    try:
        person.delete()
        return (person.username, 200)
    except Exception as e:
        print(e)
        return (e.__str__(), 500)

@api.route("/forms",  methods=["POST"])
def send_forms():
    "Save forms"
    json = request.get_json()
    try:
        form = PatientDataForm(
            birth_state=json.get("birth_state"),
            birth_city=json.get("birth_city"),
            permanent_address=Address(
                street=json.get("calle"),
                num=json.get("num"),
                suburb=json.get("colonia"),
                locality=json.get("localidad"),
                municipality=json.get("municipio"),
                zip_code=json.get("cp"),
                phone=json.get("tel"),
                phone2=json.get("tel2")
            ),
            temp_address=Address(
                street=json.get("calle_temp"),
                num=json.get("num_temp"),
                suburb=json.get("colonia_temp"),
                locality=json.get("localidad_temp"),
                municipality=json.get("municipio_temp"),
                zip_code=json.get("cp_temp"),
                phone=json.get("tel_temp"),
                phone2=json.get("tel2_temp")
            ),
            responsable_family_member=ResponsableFamilyMember(
                responsable_name=json.get("nombre_responsable"),
                responsable_address=Address(
                    street=json.get("calle_responsable"),
                    num=json.get("num_responsable"),
                    suburb=json.get("colonia_responsable"),
                    locality=json.get("localidad_responsable"),
                    municipality=json.get("municipio_responsable"),
                    zip_code=json.get("cp_responsable"),
                    phone=json.get("tel_responsable"),
                    phone2=json.get("tel2_responsable")
                ),
                responsable_relationship=json.get("parentesco_responsable")
            ),

            # Family Data
            family_data = FamilyDataForm(
                family_structure = FamilyStructure(
                    first_member_name = json.get("family_data.primer_nombre_familiar"),
                    first_member_age = json.get("family_data.primera_edad_familiar"),
                    first_member_relationship = json.get("family_data.primer_parentesco_familiar"),
                    first_member_civil_state = json.get("family_data.primer_estado_civil_familiar"),
                    first_member_ocupation = json.get("family_data.primer_ocupacion_familiar"),
                    first_member_income = json.get("family_data.primer_ingreso_familiar"),

                    second_member_name = json.get("family_data.segundo_nombre_familiar"),
                    second_member_age = json.get("family_data.segunda_edad_familiar"),
                    second_member_relationship = json.get("family_data.segundo_parentesco_familiar"),
                    second_member_civil_state = json.get("family_data.segundo_estado_civil_familiar"),
                    second_member_ocupation = json.get("family_data.segundo_ocupacion_familiar"),
                    second_member_income = json.get("family_data.segundo_ingreso_familiar"),

                    third_member_name = json.get("family_data.tercer_nombre_familiar"),
                    third_member_age = json.get("family_data.tercera_edad_familiar"),
                    third_member_relationship = json.get("family_data.tercer_parentesco_familiar"),
                    third_member_civil_state = json.get("family_data.tercer_estado_civil_familiar"),
                    third_member_ocupation = json.get("family_data.tercer_ocupacion_familiar"),
                    third_member_income = json.get("family_data.tercer_ingreso_familiar"),

                    fourth_member_name = json.get("family_data.cuarto_nombre_familiar"),
                    fourth_member_age = json.get("family_data.cuarta_edad_familiar"),
                    fourth_member_relationship = json.get("family_data.cuarto_parentesco_familiar"),
                    fourth_member_civil_state = json.get("family_data.cuarto_estado_civil_familiar"),
                    fourth_member_ocupation = json.get("family_data.cuarto_ocupacion_familiar"),
                    fourth_member_income = json.get("family_data.cuarto_ingreso_familiar"),

                    fifth_member_name = json.get("family_data.quinto_nombre_familiar"),
                    fifth_member_age = json.get("family_data.quinta_edad_familiar"),
                    fifth_member_relationship = json.get("family_data.quinto_parentesco_familiar"),
                    fifth_member_civil_state = json.get("family_data.quinto_estado_civil_familiar"),
                    fifth_member_ocupation = json.get("family_data.quinto_ocupacion_familiar"),
                    fifth_member_income = json.get("family_data.quinto_ingreso_familiar")
                ),
                family_history = FamilyHistory(
                    paternal_grandfather = FamilyHistoryClass(
                        relationship = json.get("family_data.parentesco_abuelo_paterno"),
                        living = json.get("family_data.vive_abuelo_paterno"),
                        diseases = json.get("family_data.enfermedades_abuelo_paterno"),
                        cause_of_death = json.get("family_data.causa_defuncion_abuelo_paterno"),
                    ),
                    paternal_grandmother = FamilyHistoryClass(
                        relationship = json.get("family_data.parentesco_abuela_paterna"),
                        living = json.get("family_data.vive_abuela_paterna"),
                        diseases = json.get("family_data.enfermedades_abuela_paterna"),
                        cause_of_death = json.get("family_data.causa_defuncion_abuela_paterna"),
                    ),

                    maternal_grandfather = FamilyHistoryClass(
                        relationship = json.get("family_data.parentesco_abuelo_materno"),
                        living = json.get("family_data.vive_abuelo_materno"),
                        diseases = json.get("family_data.enfermedades_abuelo_materno"),
                        cause_of_death = json.get("family_data.causa_defuncion_abuelo_materno"),
                    ),
                    maternal_grandmother = FamilyHistoryClass(
                        relationship = json.get("family_data.parentesco_abuela_materna"),
                        living = json.get("family_data.vive_abuela_materna"),
                        diseases = json.get("family_data.enfermedades_abuela_materna"),
                        cause_of_death = json.get("family_data.causa_defuncion_abuela_materna"),
                    ),

                    father = FamilyHistoryClass(
                        relationship = json.get("family_data.parentesco_padre"),
                        living = json.get("family_data.vive_padre"),
                        diseases = json.get("family_data.enfermedades_padre"),
                        cause_of_death = json.get("family_data.causa_defuncion_padre"),
                    ),
                    mother = FamilyHistoryClass(
                        relationship = json.get("family_data.parentesco_madre"),
                        living = json.get("family_data.vive_madre"),
                        diseases = json.get("family_data.enfermedades_madre"),
                        cause_of_death = json.get("family_data.causa_defuncion_madre"),
                    ),
                ),
                number_sicks = json.get("family_data.numero_de_enfermos"),
                substance_abuse = SubstanceAbuse(
                    household_member_substance = json.get("family_data.consume_miembro_vivienda"),
                    substance_consumed = json.get("family_data.sustancia_consumida"),
                    consuming_member = json.get("family_data.miembro_consumidor"),
                    consuming_frequency = json.get("family_data.frecuencia_consumo")
                )
            ),

            # Home and Economy
            home_and_economy = HomeAndEconomyForm(
                living_place = LivingPlace(
                    place_type = json.get("home_and_economy.tipo_vivienda"),
                    place_services = json.get("home_and_economy.servicios_vivienda"),
                    place_material = json.get("home_and_economy.material_vivienda"),
                    place_distribution = json.get("home_and_economy.distribucion_vivienda"),
                    place_person_per_room = json.get("home_and_economy.personas_por_cuarto_vivienda"),
                    place_location = json.get("home_and_economy.zone_vivienda"),
                    place_exposition = json.get("home_and_economy.exposicion_biomasas")
                ),
                household_goods = HouseholdGoods(
                    electrodomestics = json.get("home_and_economy.electrodomesticos"),
                    air_conditioner = json.get("home_and_economy.refrigeracion")
                ),
                family_transportation = FamilyTransportation(
                    transportation = json.get("home_and_economy.transporte"),
                    car_brand = json.get("home_and_economy.marca_auto"),
                    car_model = json.get("home_and_economy.modelo_auto")
                ),
                geographic_area = json.get("home_and_economy.area_geografica"),
                sick_members = json.get("home_and_economy.familiares_enfermos"),
                outcome = Outcome(
                    outcome_electric_power = json.get("home_and_economy.energia_electrica_egreso"),
                    outcome_water = json.get("home_and_economy.agua_egreso"),
                    outcome_phone = json.get("home_and_economy.telefono_egreso"),
                    outcome_food = json.get("home_and_economy.alimentos_egreso"),
                    outcome_rent = json.get("home_and_economy.renta_egreso"),
                    outcome_transportation = json.get("home_and_economy.transporte_egreso"),
                    outcome_education = json.get("home_and_economy.educacion_egreso"),
                    outcome_clothing = json.get("home_and_economy.vestimenta_egreso"),
                    outcome_recreational = json.get("home_and_economy.diversion_egreso"),
                    outcome_other = json.get("home_and_economy.otros_egreso")
                )
            ),

            # Diet
            diet = Diet(
                perceived_quality = json.get("diet.perceived_quality"),
                meals_per_day = json.get("diet.meals_per_day"),
                food_preparation = json.get("diet.food_preparation"),
                water_per_day = json.get("diet.water_per_day"),
                red_meat_week = json.get("diet.red_meat_week"),
                red_meat_month = json.get("diet.red_meat_month"),
                chicken_week = json.get("diet.chicken_week"),
                chicken_month = json.get("diet.chicken_month"),
                fish_week = json.get("diet.fish_week"),
                fish_month = json.get("diet.fish_month"),
                grain_week = json.get("diet.grain_week"),
                grain_month = json.get("diet.grain_month"),
                dairy_week = json.get("diet.dairy_week"),
                dairy_month = json.get("diet.dairy_month"),
                bread_week = json.get("diet.bread_week"),
                bread_month = json.get("diet.bread_month"),
                bread_pasta_week = json.get("diet.bread_pasta_week"),
                bread_pasta_month = json.get("diet.bread_pasta_month"),
                vegetables_fruits_week = json.get("diet.vegetables_fruits_week"),
                vegetables_fruits_month = json.get("diet.vegetables_fruits_month")
            ),

            # Hygiene / Passtimes / Physical Activity
            hygiene_phys_act_passtime = HygienePhysActPasstime(
                shower_frequency = json.get("hygiene_pass_physact.shower_frequency"),
                toothbrushing_frequency = json.get("hygiene_pass_physact.toothbrushing_frequency"),
                home_hygiene = json.get("hygiene_pass_physact.home_hygiene"),
                phys_activity = json.get("hygiene_pass_physact.phys_activity"),
                passtime = json.get("hygiene_pass_physact.passtime")
            ),

            # Others
            others = Others(
                how_found_out = json.get("others.how_found_out"),
                support_background =Background(
                        has_background = json.get("others.has_support_background"),
                        notes = json.get("others.notes_support_background")
                ),
                observations = json.get("others.observations"),
                social_plan = json.get("others.social_plan"),
                socioeconomic_class = json.get("others.socioeconomic_class"),
                social_worker = json.get("others.social_worker"),
                animals = json.get("others.animals"),
                vaccinated_animals = json.get("others.vaccinated_animals"),
                ticks_animals = json.get("others.ticks_animals"),
                diseases_animals = json.get("others.diseases_animals"),
                vaccination_card = json.get("others.vaccination_card")
            ),
        )
        form.save()
        return ({ 'message': "Formulario creado"}, 200)
    except Exception as e:
        print(e)
        return (e.__str__(), 500)