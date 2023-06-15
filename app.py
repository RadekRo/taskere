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
        # fingerprint is a 12 characters (as default) random string for making boards more unique
        fingerprint = data_manager.get_fingerprint(12)
        date_time = data_manager.get_current_date_time()
        data_manager.add_board_to_database(date_time, title, fingerprint)
        board_id = data_manager.get_board_id(fingerprint)
        data = {'id': board_id, 'title': title, 'creation_date': date_time }
        return jsonify(data)   

@app.route("/get_boards", methods=["POST", "GET"])
def get_boards_list():
    data = data_manager.get_boards()
    return jsonify(data)

@app.route("/get_tasks/<boardId>", methods=["POST", "GET"])
def get_tasks(boardId):
    data = data_manager.get_tasks(boardId)
    return jsonify(data)

@app.route("/add_task", methods=["POST", "GET"])
def add_task():
    if request.method == "POST":
        title = request.form.get('title')
        board_id = request.form.get('board_id')
        # fingerprint is a 12 characters (as default) random string for making boards more unique
        fingerprint = data_manager.get_fingerprint(12)
        data_manager.add_task_to_database(int(board_id), title, fingerprint)
        task_id = data_manager.get_task_id(fingerprint)
        data = {'id': task_id, 'board_id': board_id, 'title': title}
        return jsonify(data)

if __name__ == '__main__':
    app()