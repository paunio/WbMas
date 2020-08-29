from flask import Blueprint, url_for, request, redirect, make_response, jsonify
from datetime import datetime
from random import randint
from time import time
import json
from pymongo import MongoClient

routes = Blueprint("main", __name__)

myclient = MongoClient("mongodb://localhost:27017/")
mydb = myclient["baza"]
mycol = mydb["kolekcija"]


@routes.route("/api", methods=["GET"])
def api():
    return jsonify(
        {"time": datetime.now().strftime("%H:%M:%S"), "value": randint(1, 100)}
    )


@routes.route("/data", methods=["GET"])
def data():
    from .units import _json_, generate_measure

    data = [time() * 1000]

    for x in _json_:
        data.append(generate_measure(mycol, x))

    response = make_response(json.dumps(data))
    response.content_type = "application/json"

    return response

