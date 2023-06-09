import database, bcrypt
from datetime import datetime

def get_current_date_time():
    date_and_time = datetime.now().strftime('%Y-%m-%d %H:%M')
    return date_and_time

@database.connection_handler
def add_board_to_database(cursor, creation_date:str, title:str):
    query = """
    INSERT INTO boards (creation_date, title)
    VALUES (%(creation_date)s, %(title)s)
    """
    data = {'creation_date': creation_date, 
            'title': title}
    cursor.execute(query, data)

@database.connection_handler
def add_task_to_database(cursor, board_id:int, title:str):
    query = """
    INSERT INTO tasks (board_id, title)
    VALUES (%(board_id)s, %(title)s)
    """
    data = {'board_id': board_id, 
            'title': title}
    cursor.execute(query, data)

@database.connection_handler
def get_boards(cursor):
    query = """
    SELECT *
    FROM boards
    ORDER BY id DESC
    """
    cursor.execute(query)
    return cursor.fetchall()

@database.connection_handler
def get_current_board_id(cursor):
    query = """
    SELECT id
    FROM boards 
    ORDER BY id DESC LIMIT 1
    """
    cursor.execute(query)
    result = cursor.fetchone()
    return result['id']

@database.connection_handler
def get_tasks(cursor, board_id):
    query = """
    SELECT *
    FROM tasks 
    WHERE board_id = %(board_id)s
    ORDER by id DESC
    """
    data = {'board_id': board_id}
    cursor.execute(query, data)
    return cursor.fetchall()

@database.connection_handler
def get_cards(cursor, task_id):
    query = """
    SELECT *
    FROM cards 
    WHERE task_id = %(task_id)s
    ORDER by id DESC
    """
    data = {'task_id': task_id}
    cursor.execute(query, data)
    return cursor.fetchall()

@database.connection_handler
def update_task_title(cursor, task_id, new_title):
    query = """
    UPDATE tasks
    SET title = %(new_title)s
    WHERE id = %(task_id)s
    """
    data = {'task_id': task_id, 'new_title': new_title}
    cursor.execute(query, data)

@database.connection_handler
def get_current_task_id(cursor):
    query = """
    SELECT id
    FROM tasks 
    ORDER BY id DESC LIMIT 1
    """
    cursor.execute(query)
    result = cursor.fetchone()
    return result['id']

def hash_password(user_input):
    salt = bcrypt.gensalt()
    hash = bcrypt.hashpw(user_input.encode(encoding="utf-8"), salt)
    return hash.hex()

@database.connection_handler
def check_if_user_exists(cursor, login:str):
    query = """
    SELECT login
    FROM users
    WHERE login = %(login)s
    """
    data = {'login': login}
    cursor.execute(query, data)
    return cursor.fetchone()

@database.connection_handler
def get_password_from_base(cursor, login):
    query = """
    SELECT password
    FROM users
    WHERE login = %(login)s
    """
    data = {'login': login}
    cursor.execute(query, data)
    return cursor.fetchone()

def check_password(password:str, password_from_base:hex):
    password_bytes = bytes.fromhex(password_from_base)
    return bcrypt.checkpw(password.encode(encoding="utf-8"), password_bytes)

@database.connection_handler
def get_user_id(cursor, login):
    query = """
        SELECT id
        FROM users
        WHERE login = %(login)s
        """
    data = {'login': login}
    cursor.execute(query, data)
    return cursor.fetchone()

@database.connection_handler
def add_new_user(cursor, login:str, password:hex, current_date:str):
    query = """
          INSERT INTO users (login, password, registration_date) 
          VALUES (%(login)s, %(password)s, %(date)s); """
    data = {'login': login, 'password': password, 'date': current_date}
    cursor.execute(query, data)