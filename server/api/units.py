from bson.json_util import dumps
import json

_json_ = [
    {"TEMP": 1, "_id": 0, "time": 1},
    {"PRESS": 1, "_id": 0, "time": 1},
    {"LIGHT": 1, "_id": 0, "time": 1},
]


def generate_measure(col, _json):
    dataListx = []
    dataListx = dataListx[1:]
    for x in col.find({}, _json):
        result = dumps(x)
        dataListx.append(json.loads(result))
    return dataListx


def measure_generator(col, _json):
    data = generate_measure(col, _json)
    for values in data:
        yield dumps(values).lstrip()

