from flask import Flask
import psycopg2
from flask_cors import CORS, cross_origin
app = Flask(__name__)
cors = CORS(app)

@app.route('/users', methods=["GET"])
@cross_origin()
def get_users() -> str:
    conn = psycopg2.connect(database="postgres",
                        host="db",
                        user="postgres",
                        password="postgres",
                        port="5432")
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM users")
    results = cursor.fetchall()[0]
    return results

@app.route('/user', methods=["POST"])
@cross_origin()
def create_user():
    return '<h1>Hello from Flask & Docker</h2>'


if __name__ == "__main__":
    app.run(debug=True)