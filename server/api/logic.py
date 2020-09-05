from json import dumps
from flask import jsonify
from enum import Enum, auto


class Units(Enum):
    temp = auto()
    press = auto()
    light = auto()


def get_data(col):
    data = []
    for doc in col.find():
        data.append(doc)
    return jsonify(data)


def check_unit(unit):
    error = True
    for type in Units:
        if unit == type.name:
            error = False

    if error:
        raise Exception("Invalid unit!")


check_unit("temp")
