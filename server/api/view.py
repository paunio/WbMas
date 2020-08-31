from flask import (
    Blueprint,
    make_response,
    jsonify,
    request,
    Response,
    stream_with_context,
)
from datetime import datetime
from random import randint
from time import time
from pymongo import MongoClient
import json

routes = Blueprint("main", __name__)

from .db import *


@routes.route("/api", methods=["GET"])
def api():
    return jsonify(
        {"time": datetime.now().strftime("%H:%M:%S"), "value": randint(1, 100)}
    )


@routes.route("/data/<unit>", methods=["GET"])
def data(unit="temp"):
    from .units import _json_, generate_measure

    data = {}

    if unit == "temp":
        data["values"] = generate_measure(col_temp, _json_[0])

    if unit == "press":
        data["values"] = generate_measure(col_press, _json_[1])

    if unit == "light":
        data["values"] = generate_measure(col_light, _json_[2])

    response = make_response(json.dumps(data))
    response.content_type = "application/json"

    return response


@routes.route("/data/<unit>/latest", methods=["GET"])
def latest_data(unit="temp"):
    from .units import _json_, generate_measure

    data = {}

    if unit == "temp":
        data["values"] = generate_measure(col_temp, _json_[0])[-1]

    if unit == "press":
        data["values"] = generate_measure(col_press, _json_[1])[-1]

    if unit == "light":
        data["values"] = generate_measure(col_light, _json_[2])[-1]

    response = make_response(json.dumps(data))
    response.content_type = "application/json"

    return response


@routes.route("/data/<unit>/stream", methods=["GET"])
def stream_data(unit="temp"):
    from .units import _json_, measure_generator

    if unit == "temp":
        _gen = measure_generator(col_temp, _json_[0])
        resp = Response(stream_with_context(_gen), mimetype="application/json")

    if unit == "press":
        _gen = measure_generator(col_press, _json_[1])
        resp = Response(stream_with_context(_gen), mimetype="application/json")

    if unit == "light":
        _gen = measure_generator(col_light, _json_[2])
        resp = Response(stream_with_context(_gen), mimetype="application/json")

    return resp

