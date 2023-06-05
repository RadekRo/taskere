from flask import Flask, render_template
import data_manager

app = Flask(__name__)

@app.route("/")
def index():
    return render_template('index.html')

@app.route("/add_board")
def add_board():
    data_manager.add_board_to_database("dupa")
    return render_template('index.html')

if __name__ == '__main__':
    app()