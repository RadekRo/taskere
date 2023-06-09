from flask import Flask, render_template, request, jsonify
import data_manager

app = Flask(__name__)

@app.route("/")
def index():
    return render_template('index.html')

@app.route("/add_board", methods=["POST", "GET"])
def add_board():
    if request.method == "POST":
        title = request.form.get('title')
        random_number = data_manager.get_random_number()
        date_time = data_manager.get_current_date_time()
        data_manager.add_board_to_database(title, random_number, date_time)
        data = {'message': f'board added to the base with title: {title}'}
        return jsonify(data)   

@app.route("/get_boards", methods=["POST", "GET"])
def get_boards_list():
    data = data_manager.get_boards()
    return jsonify(data)

@app.route("/board", methods=["POST", "GET"])
def show_board():
    return render_template('board.html')

if __name__ == '__main__':
    app()