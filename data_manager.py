import database, random, string
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