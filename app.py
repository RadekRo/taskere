from flask import Flask, render_template, redirect, request, jsonify, session, url_for
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

@app.route("/get_boards", methods=["GET"])
def get_boards_list():
    if request.method == "GET":
        data = data_manager.get_boards()
        return jsonify(data)
    else:
        return "Method not allowed!"

@app.route("/get_tasks/<boardId>", methods=["GET"])
def get_tasks(boardId):
    if request.method == "GET":
        data = data_manager.get_tasks(boardId)
        return jsonify(data)
    else:
        return "Method not allowed!"

@app.route("/get_cards/<taskId>", methods=["GET"])
def get_cards(taskId):
    if request.method == "GET":
        data = data_manager.get_cards(taskId)
        return jsonify(data)
    else:
        return "Method not allowed!"

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

@app.route("/update_task", methods=["POST"])
def update_task():
    if request.method == "POST":
        data = request.get_json()
        print(data)
        task_id = data.get('task_id')
        task_title = data.get('task_title')
        data_manager.update_task_title(task_id, task_title)
        response = 'Task updated successfully!'
        return response

    else:
        return "Method not allowed!"

@app.route("/add_user", methods=["POST"])
def add_user():
    if request.method == "POST":
        login = request.form.get('username')
        password = request.form.get('password')
        hashed_password = data_manager.hash_password(password)
        current_date = data_manager.get_current_date_time()
        data_manager.add_new_user(login, hashed_password, current_date)
        data = {'login': login}
        return data
    else:
        return "Method not allowed!"
    
@app.route("/login", methods=["POST"])
def login_user():
    if request.method == "POST":
        login = request.form.get('username')
        password = request.form.get('password')
        if data_manager.check_if_user_exists(login):
            password_from_base = data_manager.get_password_from_base(login)
            check_password = data_manager.check_password(password, password_from_base['password'])
            if check_password == True:
                user_id = data_manager.get_user_id(login)
                session['username'] = login
                session['userid'] = user_id['id']
                data = {'login': login}
                return data     
    else:
        return "Method not allowed!"

@app.route('/main_return')
def main_return():
    return redirect(url_for('index'))

if __name__ == '__main__':
    app()