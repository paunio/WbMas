from serial import Serial, EIGHTBITS, PARITY_NONE, STOPBITS_ONE
from pymongo import MongoClient
from json import loads

myclient = MongoClient("mongodb://localhost:27017/")
mydb = myclient["database"]

col_temp = mydb["temp"]
col_light = mydb["light"]
col_press = mydb["press"]
