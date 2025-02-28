from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
import os

app = Flask(__name__, static_folder="static", template_folder="templates")
CORS(app)  # Enable CORS for frontend requests

# Serve index.html from the templates folder
@app.route("/")
def home():
    return render_template("index.html")  # ✅ Correctly loads index.html

@app.route('/calculate', methods=['POST'])
def calculate():
    data = request.get_json()
    values = data.get('values', [])
    operation = data.get('type')

    if not values:
        return jsonify({"error": "No values provided"}), 400

    result = 0
    if operation == "sum":
        result = sum(values)
    elif operation == "average":
        result = sum(values) / len(values) if values else 0
    elif operation == "min":
        result = min(values)
    elif operation == "max":
        result = max(values)
    elif operation == "count":
        result = len(values)
    else:
        return jsonify({"error": "Invalid operation"}), 400

    return jsonify({"result": result})

if __name__ == '__main__':
    app.run(host="127.0.0.1", port=5000, debug=True)
