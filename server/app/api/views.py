from datetime import datetime

from . import api


@api.route("/time", methods=["GET"])
def time():
    return {"time": str(datetime.now())}
