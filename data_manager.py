import database, random, string, bcrypt
from datetime import datetime

def get_fingerprint(fingerprint_length = 12):
    characters = string.ascii_letters + string.digits
    fingerprint = ''.join(random.choice(characters) for _ in range(fingerprint_length))
    return fingerprint

def get_current_date_time():
    date_and_time = str(datetime.now())[0:16]
    return date_and_time

@database.connection_handler
def add_board_to_database(cursor, creation_date:str, title:str, fingerprint:str):
    query = """
    INSERT INTO boards (creation_date, title, fingerprint)
    VALUES (%(creation_date)s, %(title)s, %(fingerprint)s)
    """
    data = {'creation_date': creation_date, 
            'title': title, 
            'fingerprint': fingerprint}
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
def get_board_id(cursor, fingerprint):
    query = """
    SELECT id
    FROM boards 
    WHERE fingerprint = %(fingerprint)s
    """
    data = {'fingerprint': fingerprint}
    cursor.execute(query, data)
    result = cursor.fetchone()
    return result['id']

@database.connection_handler
def get_tasks(cursor, boardId):
    query = """
    SELECT id
    FROM boards 
    WHERE fingerprint = %(fingerprint)s
    """
    data = {'fingerprint': fingerprint}
    cursor.execute(query, data)
    result = cursor.fetchone()
    return result['id']


def check_password_repeat(password, password_repeat):
    return password == password_repeat

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