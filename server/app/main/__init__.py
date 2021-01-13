import os
from pathlib import Path
from flask import Blueprint


main = Blueprint("main", __name__,
                 static_folder=str(
                     Path(__file__).parents[1].joinpath("./static/react").absolute()))

from . import views  # nopep8
