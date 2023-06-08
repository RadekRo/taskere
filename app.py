from flask import Flask, render_template, request, jsonify
import data_manager

app = Flask(__name__)

@app.route("/")
def index():
    return render_template('index.html')

@app.route("/add_board", methods=["POST", "GET"])
def add_board():
    if request.method == "POST":
        title = request.form.get('title');
        data_manager.add_board_to_database(title)
        data = {'message': f'board added to the base with title: {title}'}
        return jsonify(data)
    else: 
        print('here I AM')        

if __name__ == '__main__':
    app()