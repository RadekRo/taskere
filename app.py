from flask import Flask, render_template, request, jsonify
import data_manager

app = Flask(__name__)

@app.route("/")
def index():
    return render_template('index.html')

@app.route("/add_board", methods=["POST"])
def add_board():
    if request.method == "POST":
        title = request.form.get('title')
        date_time = data_manager.get_current_date_time()
        data_manager.add_board_to_database(date_time, title)
        board_id = data_manager.get_current_board_id()
        data = {'id': board_id, 'title': title, 'creation_date': date_time }
        return jsonify(data)   
    else:
        return "Method not allowed!"

@app.route("/get_boards", methods=["POST", "GET"])
def get_boards_list():
    data = data_manager.get_boards()
    return jsonify(data)

@app.route("/get_tasks/<boardId>", methods=["POST", "GET"])
def get_tasks(boardId):
    data = data_manager.get_tasks(boardId)
    return jsonify(data)

@app.route("/add_task", methods=["POST"])
def add_task():
    if request.method == "POST":
        title = request.form.get('title')
        board_id = request.form.get('board_id')
        data_manager.add_task_to_database(int(board_id), title)
        task_id = data_manager.get_current_task_id()
        data = {'id': task_id, 'board_id': board_id, 'title': title}
        return jsonify(data)
    else:
        return "Method not allowed!"

if __name__ == '__main__':
    app()