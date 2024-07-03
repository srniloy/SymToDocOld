from flask import Flask, request, redirect, jsonify
from model.disease_finder import DiseaseFinder
import json

app = Flask(__name__)

@app.route("/disease_finder", methods=["POST","GET"])
def disease_finder():
    if request.method=="POST":
        user = request.get_json()
        diseases = DiseaseFinder.find(user['symptoms'])
        return json.dumps(diseases)
    else:
        return {"diseases": ["d1", "d2"]}

if __name__=="__main__":
    app.run(debug=True)