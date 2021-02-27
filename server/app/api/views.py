from flask import request, jsonify
from datetime import datetime

from . import api
from ..models import Patients


@api.route("/time", methods=["GET"])
def time():
    return {"time": str(datetime.now())}


@api.route("/paciente/<id>", methods=["GET"])
def get_patient(id):
    """GET Lookup patient by database id."""

    patient = Patients.objects(_id=id).first()
    if patient:
        return (patient.to_json(), 200)

    return ("Patient not found", 404)


@api.route("/paciente", methods=["POST"])
def post_patient():
    """POST Create or update patient."""
    json = request.get_json()
    if json == None:
        return ("JSON missing!", 400)

    folio = json.get("folio")
    first_name = json.get("first_name")
    second_name = json.get("second_name")
    if second_name == "":
        second_name = None
    paternal_last_name = json.get("paternal_last_name")
    maternal_last_name = json.get("maternal_last_name")

    try:
        patient = Patients.objects(folio=folio).first()

        if patient:
            patient.first_name = first_name
            patient.second_name = second_name
            patient.paternal_last_name = paternal_last_name
            patient.maternal_last_name = maternal_last_name
        else:
            patient = Patients(
                folio=folio,
                first_name=first_name,
                second_name=second_name,
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
