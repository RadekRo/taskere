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
        random_string = data_manager.get_random_string()
        date_time = data_manager.get_current_date_time()
        data_manager.add_board_to_database(title, random_string, date_time)
        board_id = data_manager.get_board_id(random_string)
        data = {'title': title, 'id': board_id}
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