from flask import Flask, render_template, jsonify
import data_manager

app = Flask(__name__)

@app.route("/")
def index():
    return render_template('index.html')

@app.route("/add_board")
def add_board():
    # data_manager.add_board_to_database("dupa_blada")
    data = {'message': 'board added to the base'}
    return jsonify(data)

if __name__ == '__main__':
    app()