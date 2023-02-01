from flask import Flask
from flask import Flask
from flask_cors import CORS, cross_origin
from flask import request

app = Flask(__name__)
cors = CORS(app, resources={r"/*": {"origins": "*"}})
app.config['CORS_HEADERS'] = 'Content-Type'

app = Flask(__name__)


@ app.route("/")
@ cross_origin()
def hello_world():
    return "<p>Hello, World!</p>"


@ app.route("/query", methods=['POST'])
@ cross_origin()
def handle_query():
    print(request.get_json())
    return "handing query"
