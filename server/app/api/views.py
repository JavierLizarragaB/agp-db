import time

from . import api

@api.route("/time", methods=["GET"])
def get_time():
    return {"time": time.time()}
