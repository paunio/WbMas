from flask import Blueprint, render_template, request

from .db import col_light, col_press, col_temp
from .logic import check_unit, get_data, Units

routes = Blueprint("routes", __name__)


@routes.route("/data/<unit>", methods=["GET"])
def index(unit=None):
    try:
        check_unit(unit)

        if unit == Units.temp.name:
            return get_data(col_temp)

        if unit == Units.press.name:
            return get_data(col_press)

        if unit == Units.light.name:
            return get_data(col_light)
    except:
        return render_template("404.html")
