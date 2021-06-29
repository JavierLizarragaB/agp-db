from flask import json, request, jsonify, current_app
from datetime import datetime, timedelta
from werkzeug.security import generate_password_hash, check_password_hash
import jwt
from functools import wraps

from . import api

from ..models import FormInfo, Address, Appointments, Background, FamilyMemberQuantity, Medicine, Patients, PatientDataForm, User, ResponsableFamilyMember, SubstanceConsumption, Pathological, MaleSexualHealth, CancerTest, FemaleSexualHealth, Skin, OphthalmicSystem, EntSystem, MouthThroat, DigestiveSystem, RespiratoryApparatus, CardiovascularApparatus, GenitourinarySystem, MusculoskeletalSystem, HematologicalSystem, NervousSystem, PsychicSystem, FollowUp, ApparatusAndSystems, FamilyDataForm, FamilyHistoryClass, FamilyStructure, FamilyHistory, SubstanceAbuse, HomeAndEconomyForm, LivingPlace, PlaceDistribution, HouseholdGoods, FamilyTransportation, Outcome, Diet, HygienePhysActPasstime, Others, Studies, Medicine


def token_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        token = request.args.get("token")

        if not token:
            return ({ 'message': "Favor de iniciar sesion not found" }, 200)

        try:
            data=jwt.decode(token, current_app.config['SECRET_KEY'], algorithms=["HS256"])
            current_user = User.objects(username=data["user"]).first()
        except:
            return ({ 'message': "No se pudo leer token" }, 200)
        
        return f(current_user, *args, **kwargs)
    return decorated

@api.route("/verify_login", methods=["GET", "POST"])
@token_required
def is_logged(current_user):
    if current_user:
        return (jsonify(True), 200)
    return(jsonify(True), 200)

@api.route("/verify_role", methods=["GET", "POST"])
@token_required
def is_auth(current_user):
    if current_user:
        if current_user['type']==3:
            return ({'auth': True, 'login':True}, 200)
        return ({'auth': False, 'login':True}, 200)
    return({'auth': False, 'login':False}, 200)

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
        return ({ 'message': "JSON missing!" }, 400)

    # Check that all fields are set
    if(json["formState"]["general_info"]["name"] == None or
        json["formState"]["general_info"]["birth_date"] == None or
        json["formState"]["general_info"]["sex"] == None or
        json["formState"]["general_info"]["blood_type"] == None or
        json["formState"]["general_info"]["emergency_contact_name"] == None or
        json["formState"]["general_info"]["emergency_contact_num"] == None or
        json["formState"]["general_info"]["medical_dx"] == None or
        json["formState"]["general_info"]["companion"] == None or
        json["formState"]["general_info"]["shelter"] == None or
        json["formState"]["general_info"]["quimio"] == None):
        return ({ 'message': "Por favor llena todos los campos"}, 200)

    name = json["formState"]["general_info"]["name"]

    try:
        patient = Patients.objects(name=name).first()
        
        # Update existing patient
        if patient:
            patient.name = name
            patient.birth_date = json["formState"]["general_info"]["birth_date"]
            patient.sex = json["formState"]["general_info"]["sex"]
            patient.blood_type = json["formState"]["general_info"]["blood_type"]
            patient.emergency_contact_name = json["formState"]["general_info"]["emergency_contact_name"]
            patient.emergency_contact_num = json["formState"]["general_info"]["emergency_contact_num"]
            patient.medical_dx = json["formState"]["general_info"]["medical_dx"]
            patient.companion = bool(json["formState"]["general_info"]["companion"])
            patient.shelter = bool(json["formState"]["general_info"]["shelter"])
            patient.quimio = bool(json["formState"]["general_info"]["quimio"])
        
        # Create new patient
        else:
            print("Creating new patient")
            # Find next folio to use
            if(Patients.objects().first()):
                patient_max_folio = Patients.objects().order_by("-folio").limit(-1).first()
                next_folio = patient_max_folio["folio"] + 1
            else:
                next_folio = 1
            print("New folio:",next_folio)

            patient = Patients(
                folio=next_folio,
                name=name,
                birth_date = json["formState"]["general_info"]["birth_date"],
                sex = json["formState"]["general_info"]["sex"],
                blood_type = json["formState"]["general_info"]["blood_type"],
                emergency_contact_name = json["formState"]["general_info"]["emergency_contact_name"],
                emergency_contact_num = json["formState"]["general_info"]["emergency_contact_num"],
                medical_dx = json["formState"]["general_info"]["medical_dx"],
                companion = bool(json["formState"]["general_info"]["companion"]),
                shelter = bool(json["formState"]["general_info"]["shelter"]),
                quimio = bool(json["formState"]["general_info"]["quimio"])
            )

        # Update database
        patient.save()
        return (jsonify(patient), 201)

    except Exception as e:
        print(e)
        return (e.__str__(), 500)


@api.route("/paciente/todos", methods=["GET", "POST"])
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
        token = jwt.encode({'user' : person.username, 'type' : person.type,'exp' : datetime.utcnow() + timedelta(minutes=280)}, current_app.config['SECRET_KEY'], algorithm="HS256")
        return (jsonify(token), 200)
    return ({ 'message': "Correo o contrasena incorrectos"}, 200)
    
@api.route("/directorio", methods=["GET"])
def get_patients():
    """All Patients"""
    patients = Patients.objects()
    return (jsonify(patients), 200)

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

@api.route("/user-panel/edit", methods=["GET"])
def edit_user():
    """One User"""
    params = request.args.get("email")
    person = User.objects(username=params).first()
    
    if person == None:
        return ({ 'message': "Correo no existe"}, 200)
    return (jsonify(person), 200)

@api.route("/user-panel/update", methods=["POST"])
def update_user():
    """Update User"""
    json = request.get_json()
    person = User.objects(username=json.get("email"), id__ne=json.get("id")).first()  
    
    if person != None:
        return ({ 'message': "Correo ya utilizado"}, 200)
    
    person = User.objects(id=json.get("id")).first()  
    
    if person == None:
        return ({ 'message': "Usuario no existente"}, 200)

    try:
        person.update(
            username=json.get("email"),
            user_name=json.get("name"),
            user_paternal_last_name=json.get("lpname"),
            user_maternal_last_name=json.get("lmname"),
        ) 
        return (person.username, 200)
    except Exception as e:
        print(e)
        return (e.__str__(), 500)

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

@api.route("/studies", methods=["POST"])
def send_studies():
    "Saves studies camp"
    json = request.get_json()

    if (json == None):
        return ({ 'message': "Camp empty"}, 400)
    
    try:
        studiesForm = Studies(
            studies = json.get("studies")
        )

        studiesForm.save()
        return ({ 'message': "Campo actualizado"}, 200)
    except Exception as e:
        print(e)
        return(e.__str__(), 500)

@api.route("/medicine", methods=["POST"])
def send_medicine():
    "Saves medicine camp"
    json = request.get_json()

    if (json == None):
        return ({ 'message': "Camp empty"}, 400)
    
    try:
        medicineForm = Medicine(
            medicine = json.get("medicine")
        )

        medicineForm.save()
        return ({ 'message': "Campo actualizado"}, 200)
    except Exception as e:
        print(e)
        return(e.__str__(), 500)

@api.route("/appointments", methods=["POST"])
def send_appointments():
    "Saves appointments camp"
    json = request.get_json()

    if (json == None):
        return({ 'message': "Camp empty"}, 400)

    try:
        appointmentsForm = Appointments(
            appointments = json.get("appointments"),
            appointment_description = json.get("appointment_description"),
            patient_folio = '2'
        )

        appointmentsForm.save()
        return ({'message': "Campo actualizado"}, 200)
    except Exception as e:
        print(e)
        return(e.__str__(), 500)

@api.route("/forms",  methods=["POST"])
def send_forms():
    "Save forms"
    json = request.get_json()
    try:
        form = FormInfo(
            patient_data = PatientDataForm(
                birth_state=json["formState"]["patient_data"]["birth_state"],
                birth_city=json["formState"]["patient_data"]["birth_city"],
                permanent_address=Address(
                    street=json["formState"]["patient_data"]["permanent_street"],
                    num=json["formState"]["patient_data"]["permanent_num"],
                    suburb=json["formState"]["patient_data"]["permanent_suburb"],
                    locality=json["formState"]["patient_data"]["permanent_locality"],
                    municipality=json["formState"]["patient_data"]["permanent_municipality"],
                    zip_code=json["formState"]["patient_data"]["permanent_zip_code"],
                    phone=json["formState"]["patient_data"]["permanent_phone"],
                    phone2=json["formState"]["patient_data"]["permanent_phone2"]
                ),
                
                email = json["formState"]["patient_data"]["email"],
                income = json["formState"]["patient_data"]["income"],
                medical_service = json["formState"]["patient_data"]["medical_service"],
                scholarship = json["formState"]["patient_data"]["scholarship"],
                ocupation = json["formState"]["patient_data"]["ocupation"],
                religion = json["formState"]["patient_data"]["religion"],
                civil_state = json["formState"]["patient_data"]["civil_state"],

                clinic_record_date = json["formState"]["patient_data"]["clinic_record_date"],

                temp_address=Address(
                    street=json["formState"]["patient_data"]["temp_street"],
                    num=json["formState"]["patient_data"]["temp_num"],
                    suburb=json["formState"]["patient_data"]["temp_suburb"],
                    locality=json["formState"]["patient_data"]["temp_locality"],
                    municipality=json["formState"]["patient_data"]["temp_municipality"],
                    zip_code=json["formState"]["patient_data"]["temp_zip_code"],
                    phone=json["formState"]["patient_data"]["temp_phone"],
                    phone2=json["formState"]["patient_data"]["temp_phone2"]
                ),
                responsable_family_member=ResponsableFamilyMember(
                    responsable_name=json["formState"]["patient_data"]["responsable_name"],
                    responsable_address=Address(
                        street=json["formState"]["patient_data"]["responsable_street"],
                        num=json["formState"]["patient_data"]["responsable_num"],
                        suburb=json["formState"]["patient_data"]["responsable_suburb"],
                        locality=json["formState"]["patient_data"]["responsable_locality"],
                        municipality=json["formState"]["patient_data"]["responsable_municipality"],
                        zip_code=json["formState"]["patient_data"]["responsable_zip_code"],
                        phone=json["formState"]["patient_data"]["responsable_phone"],
                        phone2=json["formState"]["patient_data"]["responsable_phone2"]
                    ),
                    responsable_relationship=json["formState"]["patient_data"]["responsable_relationship"],
                ),

                personal_pathological_history = Pathological(
                    chronic_degenerative_diseases = json["formState"]["patient_data"]["chronic_degenerative_diseases"],
                    infectious_contagious_diseases = json["formState"]["patient_data"]["infectious_contagious_diseases"],
                    surgeries = Background(
                        has_background = json["formState"]["patient_data"]["surgeries"],
                        notes = json["formState"]["patient_data"]["surgeries_notes"]
                    ),
                    jail = Background(
                        has_background = json["formState"]["patient_data"]["jail"],
                        notes = json["formState"]["patient_data"]["jail_notes"]
                    ),
                    blood_transfusions = Background(
                        has_background = json["formState"]["patient_data"]["blood_transfusions"],
                        notes = json["formState"]["patient_data"]["blood_transfusions_notes"]
                    ),
                    allergies = Background(
                        has_background = json["formState"]["patient_data"]["allergies"],
                        notes = json["formState"]["patient_data"]["allergies_notes"]
                    ),
                    trauma = Background(
                        has_background = json["formState"]["patient_data"]["trauma"],
                        notes = json["formState"]["patient_data"]["trauma_notes"]
                    ),
                    alcoholism = SubstanceConsumption(
                        consumption = json["formState"]["patient_data"]["alcoholism_consumption"],
                        starting_age = json["formState"]["patient_data"]["alcoholism_starting_age"],
                        quantity = json["formState"]["patient_data"]["alcoholism_quantity"],
                        frequency = json["formState"]["patient_data"]["alcoholism_frequency"],
                        last_consumption = json["formState"]["patient_data"]["alcoholism_last_consumption"]
                    ),
                    smoking = SubstanceConsumption(
                        consumption = json["formState"]["patient_data"]["smoking_consumption"],
                        starting_age = json["formState"]["patient_data"]["smoking_starting_age"],
                        quantity = json["formState"]["patient_data"]["smoking_quantity"],
                        frequency = json["formState"]["patient_data"]["smoking_frequency"],
                        last_consumption = json["formState"]["patient_data"]["smoking_last_consumption"]
                    ),
                    drug_addictions = SubstanceConsumption(
                        consumption = json["formState"]["patient_data"]["drug_consumption"],
                        starting_age = json["formState"]["patient_data"]["drug_starting_age"],
                        quantity = json["formState"]["patient_data"]["drug_quantity"],
                        frequency = json["formState"]["patient_data"]["drug_frequency"],
                        last_consumption = json["formState"]["patient_data"]["drug_last_consumption"]
                    )
                ),

                male_sexual_health = MaleSexualHealth(
                    start_sexual_life = json["formState"]["patient_data"]["male_start_sexual_life"],
                    sexual_partners = json["formState"]["patient_data"]["male_sexual_partners"],
                    std = json["formState"]["patient_data"]["male_std"],
                    contraceptive_methods = json["formState"]["patient_data"]["male_contraceptive_methods"]
                ),
                    
                female_sexual_health = FemaleSexualHealth(
                    menarche = json["formState"]["patient_data"]["female_menarche"],
                    menarche_age = json["formState"]["patient_data"]["female_menarche_age"],
                    rhythm = json["formState"]["patient_data"]["female_rhythm"],
                    start_sexual_life = json["formState"]["patient_data"]["female_start_sexual_life"],
                    high_risk_partners = json["formState"]["patient_data"]["female_high_risk_partners"],
                    sexual_partners = json["formState"]["patient_data"]["female_sexual_partners"],
                    std = Background(
                        has_background = json["formState"]["patient_data"]["female_std"],
                        notes = json["formState"]["patient_data"]["female_std_notes"]
                    ),
                    gestations = json["formState"]["patient_data"]["female_gestations"],
                    deliveries = json["formState"]["patient_data"]["female_deliveries"],
                    cesarean_births = json["formState"]["patient_data"]["female_cesarean_births"],
                    abortions = json["formState"]["patient_data"]["female_abortions"],
                    date_last_delivery = json["formState"]["patient_data"]["female_date_last_delivery"],
                    age_first_pregnancy = json["formState"]["patient_data"]["female_age_first_pregnancy"],
                    family_planning_methods = json["formState"]["patient_data"]["female_family_planning_methods"],
                    date_last_menstruation = json["formState"]["patient_data"]["female_date_last_menstruation"],
                    menopause = json["formState"]["patient_data"]["female_menopause"],
                    hormonal_therapy = json["formState"]["patient_data"]["female_hormonal_therapy"],
                    breastfeeding = json["formState"]["patient_data"]["female_breastfeeding"],
                    last_pap_smear = CancerTest(
                        date = json["formState"]["patient_data"]["female_last_pap_smear"],
                        result = json["formState"]["patient_data"]["female_last_pap_smear_result"]
                    ),
                    last_hybrid_test = CancerTest(
                        date = json["formState"]["patient_data"]["female_last_hybrid_test"],
                        result = json["formState"]["patient_data"]["female_last_hybrid_test_result"]
                    ),
                    last_mammography = CancerTest(
                        date = json["formState"]["patient_data"]["female_last_mammography"],
                        result = json["formState"]["patient_data"]["female_last_mammography_result"]
                    ),
                ),

                apparatus_and_systems = ApparatusAndSystems(
                    skin = Skin(
                        ##Cambios coloracion
                        paleness = json["formState"]["patient_data"]["skin_paleness"],
                        icterus = json["formState"]["patient_data"]["skin_icterus"],
                        cyanosis = json["formState"]["patient_data"]["skin_cyanosis"],

                        eruptions = json["formState"]["patient_data"]["skin_eruptions"],
                        spots = json["formState"]["patient_data"]["skin_spots"],
                        pruritus = json["formState"]["patient_data"]["skin_pruritus"],
                        dryness = json["formState"]["patient_data"]["skin_dryness"],
                        volume_increase = json["formState"]["patient_data"]["skin_volume_increase"],
                        nails_hair = json["formState"]["patient_data"]["skin_nails_hair"],
                        nodules = json["formState"]["patient_data"]["skin_nodules"],
                        observations = json["formState"]["patient_data"]["skin_observations"]
                    ),
                        
                    ophthalmic_system = OphthalmicSystem(
                        ##Cambios vision
                        diplopia = json["formState"]["patient_data"]["ophthalmic_diplopia"],
                        eye_pain = json["formState"]["patient_data"]["ophthalmic_eye_pain"],
                        photophobia = json["formState"]["patient_data"]["ophthalmic_photophobia"],
                        amaurosis = json["formState"]["patient_data"]["ophthalmic_amaurosis"],
                        photopsies = json["formState"]["patient_data"]["ophthalmic_photopsies"],
                        myodesopsias = json["formState"]["patient_data"]["ophthalmic_myodesopsias"],
                        scotomas = json["formState"]["patient_data"]["ophthalmic_scotomas"],
                        hemeralopia = json["formState"]["patient_data"]["ophthalmic_hemeralopia"],
                        nyctalopia = json["formState"]["patient_data"]["ophthalmic_nyctalopia"],

                        ##Uso de lentes
                        myopia = json["formState"]["patient_data"]["ophthalmic_myopia"],
                        astigmatism = json["formState"]["patient_data"]["astigmatism"],

                        observations = json["formState"]["patient_data"]["ophthalmic_observations"]
                    ),
                            
                    ent_system = EntSystem(
                        ##Cambios en la audicion
                        otalgia = json["formState"]["patient_data"]["ent_otalgia"],
                        algiacusis = json["formState"]["patient_data"]["ent_algiacusis"],
                        presbycusis = json["formState"]["patient_data"]["ent_presbycusis"],
                        anacusis = json["formState"]["patient_data"]["ent_anacusis"],
                        tinnitus = json["formState"]["patient_data"]["ent_tinnitus"],
                        ear_ringing = json["formState"]["patient_data"]["ent_ear_ringing"],
                        hearing_loss = json["formState"]["patient_data"]["ent_hearing_loss"],

                        ear_pain = json["formState"]["patient_data"]["ent_ear_pain"],
                        vertigo = json["formState"]["patient_data"]["ent_vertigo"],
                        fluid_leaking_ear = json["formState"]["patient_data"]["ent_fluid_leaking_ear"],
                        smelling_changes = json["formState"]["patient_data"]["ent_smelling_changes"],
                        fluid_leaking_nose = json["formState"]["patient_data"]["ent_fluid_leaking_nose"],
                        nose_pain = json["formState"]["patient_data"]["ent_nose_pain"],
                    ),

                    mouth_throat = MouthThroat(
                        ##Dientes
                        cavities = json["formState"]["patient_data"]["mouth_throat_cavities"],
                        dental_agenesis = json["formState"]["patient_data"]["mouth_throat_dental_agenesis"],
                        prothesis = json["formState"]["patient_data"]["mouth_throat_prothesis"],

                        ##Encias
                        gingivorrhea = json["formState"]["patient_data"]["mouth_throat_gingivorrhea"],
                        gingivorrhagia = json["formState"]["patient_data"]["mouth_throat_gingivorrhagia"],
                        pain = json["formState"]["patient_data"]["mouth_throat_pain"],
                        gums_ulcerations = json["formState"]["patient_data"]["mouth_throat_gums_ulcerations"],

                        ##Lengua
                        colorations = json["formState"]["patient_data"]["mouth_throat_colorations"],
                        size = json["formState"]["patient_data"]["mouth_throat_size"],
                        plaque_presence = json["formState"]["patient_data"]["mouth_throat_plaque_presence"],
                        tongue_ulcerations = json["formState"]["patient_data"]["mouth_throat_tongue_ulcerations"],

                        ##Problemas de hablar
                        dysphonia = json["formState"]["patient_data"]["mouth_throat_dysphonia"],
                        aphonia = json["formState"]["patient_data"]["mouth_throat_aphonia"],

                        thirst = json["formState"]["patient_data"]["mouth_throat_thirst"],
                        speaking_eating_pain = json["formState"]["patient_data"]["mouth_throat_speaking_eating_pain"],
                        bad_breath = json["formState"]["patient_data"]["mouth_throat_bad_breath"],
                        excess_salivation = json["formState"]["patient_data"]["mouth_throat_excess_salivation"],
                        observations = json["formState"]["patient_data"]["mouth_throat_observations"]
                    ),

                    digestive_system = DigestiveSystem(
                        apettite_changes = json["formState"]["patient_data"]["digestive_apettite_changes"],
                        sickness_vomit = json["formState"]["patient_data"]["digestive_sickness_vomit"],
                        abdominal_distention = json["formState"]["patient_data"]["digestive_abdominal_distention"],

                        ##Esofago
                        gastralgia = json["formState"]["patient_data"]["digestive_abdominal_gastralgia"],
                        acidity = json["formState"]["patient_data"]["digestive_abdominal_acidity"],
                        postrandial_fullnes = json["formState"]["patient_data"]["digestive_abdominal_postrandial_fullnes"],

                        ##Cambios en evacuaciones
                        tenesmus = json["formState"]["patient_data"]["digestive_abdominal_tenesmus"],
                        bids = json["formState"]["patient_data"]["digestive_abdominal_bids"],
                        encopresis = json["formState"]["patient_data"]["digestive_abdominal_encopresis"],
                        anal_pain = json["formState"]["patient_data"]["digestive_abdominal_anal_pain"],
                        constipation = json["formState"]["patient_data"]["digestive_abdominal_constipation"],
                        rectal_bleeding = json["formState"]["patient_data"]["digestive_abdominal_rectal_bleeding"],
                        hematochezia = json["formState"]["patient_data"]["digestive_abdominal_hematochezia"],

                        ##Higado y vias biliares
                        jaundice = json["formState"]["patient_data"]["digestive_abdominal_jaundice"],
                        pruritus = json["formState"]["patient_data"]["digestive_abdominal_pruritus"],
                        fever = json["formState"]["patient_data"]["digestive_abdominal_fever"],
                        ascites = json["formState"]["patient_data"]["digestive_abdominal_ascites"],
                        biliary_colic = json["formState"]["patient_data"]["digestive_abdominal_biliary_colic"],
                        hepatic_colic = json["formState"]["patient_data"]["digestive_abdominal_hepatic_colic"],
                        acholia = json["formState"]["patient_data"]["digestive_abdominal_acholia"],

                        ##Pancreas
                        steatorrhea = json["formState"]["patient_data"]["digestive_abdominal_steatorrhea"],
                        diarrhea = json["formState"]["patient_data"]["digestive_abdominal_diarrhea"],
                        hypersalivation = json["formState"]["patient_data"]["digestive_abdominal_hypersalivation"],
                        abdominal_pain = json["formState"]["patient_data"]["digestive_abdominal_abdominal_pain"],
                        back_pain = json["formState"]["patient_data"]["digestive_abdominal_back_pain"],

                        observations = json["formState"]["patient_data"]["digestive_observations"]
                    ),

                    respiratory_apparatus = RespiratoryApparatus(
                        cough = json["formState"]["patient_data"]["respiratory_cough"],
                        chest_pain = json["formState"]["patient_data"]["respiratory_chest_pain"],
                        hemoptysis = json["formState"]["patient_data"]["respiratory_hemoptysis"],
                        vomiting_cough = json["formState"]["patient_data"]["respiratory_vomiting_cough"],
                        cyanosis = json["formState"]["patient_data"]["respiratory_cyanosis"],
                        fatigue = json["formState"]["patient_data"]["respiratory_fatigue"],
                        breathing_problems = json["formState"]["patient_data"]["respiratory_breathing_problems"],
                        breathing_changes = json["formState"]["patient_data"]["respiratory_breathing_changes"],
                        observations = json["formState"]["patient_data"]["respiratory_observations"]
                    ),

                    cardiovascular_apparatus = CardiovascularApparatus(
                        dyspnoea = json["formState"]["patient_data"]["cardiovascular_dyspnoea"],
                        orthopnea = json["formState"]["patient_data"]["cardiovascular_orthopnea"],
                        lipothymia = json["formState"]["patient_data"]["cardiovascular_lipothymia"],
                        syncope = json["formState"]["patient_data"]["cardiovascular_syncope"],
                        edema = json["formState"]["patient_data"]["cardiovascular_edema"],
                        cyanosis = json["formState"]["patient_data"]["cardiovascular_cyanosis"],
                        chest_pain = json["formState"]["patient_data"]["cardiovascular_chest_pain"],
                        palpitations = json["formState"]["patient_data"]["cardiovascular_palpitations"],
                        observations = json["formState"]["patient_data"]["cardiovascular_observations"]
                    ),

                    genitourinary_system = GenitourinarySystem(
                        urinating_changes = json["formState"]["patient_data"]["genitourinary_urinating_changes"],
                        urinating_pain = json["formState"]["patient_data"]["genitourinary_urinating_pain"],
                        jet_changes = json["formState"]["patient_data"]["genitourinary_jet_changes"],
                        menstruation_changes = json["formState"]["patient_data"]["genitourinary_menstruation_changes"],
                        dyspareunia = json["formState"]["patient_data"]["genitourinary_dyspareunia"],
                        libido_changes = json["formState"]["patient_data"]["genitourinary_libido_changes"],
                        observations = json["formState"]["patient_data"]["genitourinary_observations"]
                    ),

                    musculoskeletal_system = MusculoskeletalSystem(
                        muscle_pain = json["formState"]["patient_data"]["musculoskeletal_muscle_pain"],
                        joint_pain = json["formState"]["patient_data"]["musculoskeletal_joint_pain"],
                        joint_stiffness = json["formState"]["patient_data"]["musculoskeletal_joint_stiffness"],
                        nodules = json["formState"]["patient_data"]["musculoskeletal_nodules"],
                        bone_pain = json["formState"]["patient_data"]["musculoskeletal_bone_pain"],
                        ambulation_changes = json["formState"]["patient_data"]["musculoskeletal_ambulation_changes"],
                        observations = json["formState"]["patient_data"]["musculoskeletal_observations"],
                    ),

                    hematological_system = HematologicalSystem(
                        weakness = json["formState"]["patient_data"]["hematological_weakness"],
                        color_changes = json["formState"]["patient_data"]["hematological_color_changes"],
                        bleeding = json["formState"]["patient_data"]["hematological_bleeding"],
                        petechiae = json["formState"]["patient_data"]["hematological_petechiae"],
                        ecchymosis = json["formState"]["patient_data"]["hematological_ecchymosis"],
                        bruises = json["formState"]["patient_data"]["hematological_bruises"],
                        lymphadenopathy  = json["formState"]["patient_data"]["hematological_lymphadenopathy"],
                        observations = json["formState"]["patient_data"]["hematological_observations"]
                    ),

                    nervous_system = NervousSystem(
                        headache = json["formState"]["patient_data"]["nervous_headache"],
                        seizures = json["formState"]["patient_data"]["nervous_seizures"],
                        memory_changes = json["formState"]["patient_data"]["nervous_memory_changes"],
                        sphincters_changes = json["formState"]["patient_data"]["nervous_sphincters_changes"],
                        loss_of_feeling = json["formState"]["patient_data"]["nervous_loss_of_feeling"],
                        loss_of_movement = json["formState"]["patient_data"]["nervous_loss_of_movement"],
                        loss_of_balance = json["formState"]["patient_data"]["nervous_loss_of_balance"],
                        language_disorders = json["formState"]["patient_data"]["nervous_language_disorders"],
                        gait_changes = json["formState"]["patient_data"]["nervous_gait_changes"],
                        tremors = json["formState"]["patient_data"]["nervous_tremors"],
                        paralysis = json["formState"]["patient_data"]["nervous_paralysis"],
                        parasthesia = json["formState"]["patient_data"]["nervous_parasthesia"],
                        paresis = json["formState"]["patient_data"]["nervous_paresis"],
                        observations = json["formState"]["patient_data"]["nervous_observations"]
                    ),

                    psychic_system = PsychicSystem(
                        distress = json["formState"]["patient_data"]["psychic_distress"],
                        depression = json["formState"]["patient_data"]["psychic_depression"],
                        interest_changes = json["formState"]["patient_data"]["psychic_interest_changes"],
                        guilt = json["formState"]["patient_data"]["psychic_guilt"],
                        suicidal_thoughts = json["formState"]["patient_data"]["psychic_suicidal_thoughts"],
                        hallucinations = json["formState"]["patient_data"]["psychic_hallucinations"],
                        delirium = json["formState"]["patient_data"]["psychic_delirium"],
                        observations = json["formState"]["patient_data"]["psychic_observations"]
                    ),
                        
                    physical_observations = json["formState"]["patient_data"]["physical_observations"],

                    follow_up = FollowUp(
                        treatment_changes = Background(
                            has_background = json["formState"]["patient_data"]["follow_up_treatment_changes"],
                            notes = json["formState"]["patient_data"]["follow_up_treatment_changes_notes"]
                        ),

                        actual_symptoms = json["formState"]["patient_data"]["follow_up_actual_symptoms"],
                        last_medication_efects = json["formState"]["patient_data"]["follow_up_last_medication_efects"],
                        psychology_follow_up = json["formState"]["patient_data"]["follow_up_psychology_follow_up"],
                        actual_diagnostic = json["formState"]["patient_data"]["follow_up_actual_diagnostic"]
                    ),
                ),
            ),

            # Family Data
            family_data = FamilyDataForm(
                family_structure = FamilyStructure(
                    first_member_name = json["formState"]["family_data"]["first_member_name"],
                    first_member_age = json["formState"]["family_data"]["first_member_age"],
                    first_member_relationship = json["formState"]["family_data"]["first_member_relationship"],
                    first_member_civil_state = json["formState"]["family_data"]["first_member_civil_state"],
                    first_member_ocupation = json["formState"]["family_data"]["first_member_ocupation"],
                    first_member_income = json["formState"]["family_data"]["first_member_income"],

                    second_member_name = json["formState"]["family_data"]["second_member_name"],
                    second_member_age = json["formState"]["family_data"]["second_member_age"],
                    second_member_relationship = json["formState"]["family_data"]["second_member_relationship"],
                    second_member_civil_state = json["formState"]["family_data"]["second_member_civil_state"],
                    second_member_ocupation = json["formState"]["family_data"]["second_member_ocupation"],
                    second_member_income = json["formState"]["family_data"]["second_member_income"],

                    third_member_name = json["formState"]["family_data"]["third_member_name"],
                    third_member_age = json["formState"]["family_data"]["third_member_age"],
                    third_member_relationship = json["formState"]["family_data"]["third_member_relationship"],
                    third_member_civil_state = json["formState"]["family_data"]["third_member_civil_state"],
                    third_member_ocupation = json["formState"]["family_data"]["third_member_ocupation"],
                    third_member_income = json["formState"]["family_data"]["third_member_income"],

                    fourth_member_name = json["formState"]["family_data"]["fourth_member_name"],
                    fourth_member_age = json["formState"]["family_data"]["fourth_member_age"],
                    fourth_member_relationship = json["formState"]["family_data"]["fourth_member_relationship"],
                    fourth_member_civil_state = json["formState"]["family_data"]["fourth_member_civil_state"],
                    fourth_member_ocupation = json["formState"]["family_data"]["fourth_member_ocupation"],
                    fourth_member_income = json["formState"]["family_data"]["fourth_member_income"],

                    fifth_member_name = json["formState"]["family_data"]["fifth_member_name"],
                    fifth_member_age = json["formState"]["family_data"]["fifth_member_age"],
                    fifth_member_relationship = json["formState"]["family_data"]["fifth_member_relationship"],
                    fifth_member_civil_state = json["formState"]["family_data"]["fifth_member_civil_state"],
                    fifth_member_ocupation = json["formState"]["family_data"]["fifth_member_ocupation"],
                    fifth_member_income = json["formState"]["family_data"]["fifth_member_income"]
                ),
                family_history = FamilyHistory(
                    paternal_grandfather = FamilyHistoryClass(
                        living = json["formState"]["family_data"]["paternal_grandfather_living"],
                        diseases = json["formState"]["family_data"]["paternal_grandfather_diseases"],
                        cause_of_death = json["formState"]["family_data"]["paternal_grandfather_cause_of_death"],
                    ),
                    paternal_grandmother = FamilyHistoryClass(
                        living = json["formState"]["family_data"]["paternal_grandmother_living"],
                        diseases = json["formState"]["family_data"]["paternal_grandmother_diseases"],
                        cause_of_death = json["formState"]["family_data"]["paternal_grandmother_cause_of_death"],
                    ),

                    maternal_grandfather = FamilyHistoryClass(
                        living = json["formState"]["family_data"]["maternal_grandfather_living"],
                        diseases = json["formState"]["family_data"]["maternal_grandfather_diseases"],
                        cause_of_death = json["formState"]["family_data"]["maternal_grandfather_cause_of_death"],
                    ),
                    maternal_grandmother = FamilyHistoryClass(
                        living = json["formState"]["family_data"]["maternal_grandmother_living"],
                        diseases = json["formState"]["family_data"]["maternal_grandmother_diseases"],
                        cause_of_death = json["formState"]["family_data"]["maternal_grandmother_cause_of_death"],
                    ),

                    father = FamilyHistoryClass(
                        living = json["formState"]["family_data"]["father_living"],
                        diseases = json["formState"]["family_data"]["father_diseases"],
                        cause_of_death = json["formState"]["family_data"]["father_cause_of_death"],
                    ),
                    mother = FamilyHistoryClass(
                        living = json["formState"]["family_data"]["mother_living"],
                        diseases = json["formState"]["family_data"]["mother_diseases"],
                        cause_of_death = json["formState"]["family_data"]["mother_cause_of_death"],
                    ),

                    siblings = FamilyMemberQuantity(
                        quantity = json["formState"]["family_data"]["siblings_quantity"],
                        diseases = json["formState"]["family_data"]["siblings_diseases"],
                        cause_of_death = json["formState"]["family_data"]["siblings_cause_of_death"]
                    ),

                    sons = FamilyMemberQuantity(
                        quantity = json["formState"]["family_data"]["sons_quantity"],
                        diseases = json["formState"]["family_data"]["sons_diseases"],
                        cause_of_death = json["formState"]["family_data"]["sons_cause_of_death"]
                    )
                ),

                number_sicks = json["formState"]["family_data"]["number_sicks"],

                substance_abuse = SubstanceAbuse(
                    household_member_substance = json["formState"]["family_data"]["household_member_substance"],
                    substance_consumed = json["formState"]["family_data"]["substance_consumed"],
                    consuming_member = json["formState"]["family_data"]["consuming_member"],
                    consuming_frequency = json["formState"]["family_data"]["consuming_frequency"]
                )
            ),

            # Home and Economy
            home_and_economy = HomeAndEconomyForm(
                living_place = LivingPlace(
                    place_type = json["formState"]["home_and_economy"]["place_type"],
                    place_services = json["formState"]["home_and_economy"]["place_services"],
                    place_material = json["formState"]["home_and_economy"]["place_material"],
                    place_distribution = PlaceDistribution(
                        kitchen = json["formState"]["home_and_economy"]["place_kitchen"],
                        lounge = json["formState"]["home_and_economy"]["place_lounge"],
                        dining_room = json["formState"]["home_and_economy"]["place_dining_room"],
                        bedroom = json["formState"]["home_and_economy"]["place_bedroom"],
                        bedroom_quantity = json["formState"]["home_and_economy"]["place_bedroom_quantity"],
                        other_rooms = json["formState"]["home_and_economy"]["place_others"]
                    ),
                    place_person_per_room = json["formState"]["home_and_economy"]["place_person_per_room"],
                    place_location = json["formState"]["home_and_economy"]["place_location"],
                    place_exposition = json["formState"]["home_and_economy"]["place_exposition"]
                ),

                household_goods = HouseholdGoods(
                    electrodomestics = json["formState"]["home_and_economy"]["electrodomestics"],
                    air_conditioner = json["formState"]["home_and_economy"]["air_conditioner"]
                ),

                family_transportation = FamilyTransportation(
                    transportation = json["formState"]["home_and_economy"]["transportation"],
                    car_brand = json["formState"]["home_and_economy"]["car_brand"],
                    car_model = json["formState"]["home_and_economy"]["car_model"]
                ),
                
                geographic_area = json["formState"]["home_and_economy"]["geographic_area"],
                sick_members = json["formState"]["home_and_economy"]["sick_members"],

                outcome = Outcome(
                    outcome_electric_power = json["formState"]["home_and_economy"]["outcome_electric_power"],
                    outcome_water = json["formState"]["home_and_economy"]["outcome_water"],
                    outcome_gas = json["formState"]["home_and_economy"]["outcome_gas"],
                    outcome_phone = json["formState"]["home_and_economy"]["outcome_phone"],
                    outcome_food = json["formState"]["home_and_economy"]["outcome_food"],
                    outcome_rent = json["formState"]["home_and_economy"]["outcome_rent"],
                    outcome_transportation = json["formState"]["home_and_economy"]["outcome_transportation"],
                    outcome_education = json["formState"]["home_and_economy"]["outcome_education"],
                    outcome_clothing = json["formState"]["home_and_economy"]["outcome_clothing"],
                    outcome_recreational = json["formState"]["home_and_economy"]["outcome_recreational"],
                    outcome_other = json["formState"]["home_and_economy"]["outcome_other"]
                )
            ),

            # Diet
            diet = Diet(
                perceived_quality = json["formState"]["diet"]["perceived_quality"],
                meals_per_day = json["formState"]["diet"]["meals_per_day"],
                food_preparation = json["formState"]["diet"]["food_preparation"],
                water_per_day = json["formState"]["diet"]["water_per_day"],
                red_meat_week = json["formState"]["diet"]["red_meat_week"],
                red_meat_month = json["formState"]["diet"]["red_meat_month"],
                chicken_week = json["formState"]["diet"]["chicken_week"],
                chicken_month = json["formState"]["diet"]["chicken_month"],
                fish_week = json["formState"]["diet"]["fish_week"],
                fish_month = json["formState"]["diet"]["fish_month"],
                grain_week = json["formState"]["diet"]["grain_week"],
                grain_month = json["formState"]["diet"]["grain_month"],
                dairy_week = json["formState"]["diet"]["dairy_week"],
                dairy_month = json["formState"]["diet"]["dairy_month"],
                bread_week = json["formState"]["diet"]["bread_week"],
                bread_month = json["formState"]["diet"]["bread_month"],
                bread_pasta_week = json["formState"]["diet"]["bread_pasta_week"],
                bread_pasta_month = json["formState"]["diet"]["bread_pasta_month"],
                vegetables_fruits_week = json["formState"]["diet"]["vegetables_fruits_week"],
                vegetables_fruits_month = json["formState"]["diet"]["vegetables_fruits_month"]
            ),

            # Hygiene / Passtimes / Physical Activity
            hygiene_phys_act_passtime = HygienePhysActPasstime(
                shower_frequency = json["formState"]["hygiene_pass_physact"]["shower_frequency"],
                toothbrushing_frequency = json["formState"]["hygiene_pass_physact"]["toothbrushing_frequency"],
                home_hygiene = json["formState"]["hygiene_pass_physact"]["home_hygiene"],
                phys_activity = json["formState"]["hygiene_pass_physact"]["phys_activity"],
                passtime = json["formState"]["hygiene_pass_physact"]["passtime"]
            ),

            # Others
            others = Others(
                how_found_out = json["formState"]["others"]["how_found_out"],
                support_background =Background(
                        has_background = json["formState"]["others"]["has_support_background"],
                        notes = json["formState"]["others"]["notes_support_background"]
                ),
                observations = json["formState"]["others"]["observations"],
                social_plan = json["formState"]["others"]["social_plan"],
                socioeconomic_class = json["formState"]["others"]["socioeconomic_class"],
                social_worker = json["formState"]["others"]["social_worker"],
                animals = json["formState"]["others"]["animals"],
                vaccinated_animals = json["formState"]["others"]["vaccinated_animals"],
                ticks_animals = json["formState"]["others"]["ticks_animals"],
                diseases_animals = json["formState"]["others"]["diseases_animals"],
                vaccination_card = json["formState"]["others"]["vaccination_card"]
            ),
        )
        form.save()

        "Connect form to patient"
        theId = str(form.id)
        print("This is the form id:",theId)
        print("This is the patient folio:",json["formState"]["patient_folio"])

        patient = Patients.objects(folio=json["formState"]["patient_folio"]).first()
        patient.forms.append(theId)
        patient.save()

        return ({ 'message': "Formulario creado"}, 200)
    except Exception as e:
        print(e)
        return (e.__str__(), 500)