_json_ = [
    {"Temperatura": 1, "_id": 0},
    {"Pressure": 1, "_id": 0},
    {"Humidity": 1, "_id": 0},
    {"UV": 1, "_id": 0},
]


def generate_measure(col, _json):
    dataListx = []
    dataListx = dataListx[1:]
    for x in col.find({}, _json):
        for value in x.values():
            dataListx.append(value)
    dataListx = list(map(int, dataListx))
    measure = dataListx[-1]
    return measure
