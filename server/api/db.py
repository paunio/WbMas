from pymongo import MongoClient

myclient = MongoClient("mongodb://localhost:27017/")
mydb = myclient["database"]

col_temp = mydb["temp"]
col_light = mydb["light"]
col_press = mydb["press"]

