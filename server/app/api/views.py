from flask import request
from datetime import datetime

from . import api
from ..models import Patient


@api.route("/time", methods=["GET"])
def time():
    return {"time": str(datetime.now())}


@api.route("/paciente/<id>", methods=["GET"])
def get_patient(id):
    """GET Lookup patient by database id."""
    return Patient.objects(id=id).first_or_404()


@api.route("/paciente", methods=["POST"])
def post_patient(id):
    """POST Create new patient."""

    try:
        json = request.get_json()
        Patient(**json).save()

    except Exception as e:
        return e.__str__()
