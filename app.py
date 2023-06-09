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
        hashed_board_title = data_manager.hash_board_title(title)
        data_manager.add_board_to_database(hashed_board_title)
        data = {'message': f'board added to the base with title: {title}'}
        return jsonify(data)   

@app.route("/get_boards", methods=["POST", "GET"])
def get_boards_list():
    data = data_manager.get_boards()
    return data

@app.route("/boards/<board_id>")
def show_board(board_id):
    return render_template('board.html', board_id = board_id)

if __name__ == '__main__':
    app()