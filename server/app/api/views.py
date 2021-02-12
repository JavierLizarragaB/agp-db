from datetime import datetime

from . import api


@api.route("/time", methods=["GET"])
def time():
    # return {"time": Kstr(datetime.now())}
    return {"time": "A01251531"}
