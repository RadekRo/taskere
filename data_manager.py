import database, random, string
from datetime import datetime

def get_random_string():
    characters = string.ascii_letters + string.digits
    random_string = ''.join(random.choice(characters) for _ in range (8))
    return random_string

def get_current_date_time():
    date_and_time = str(datetime.now())[0:19]
    return date_and_time

@database.connection_handler
def add_board_to_database(cursor, title:str, random_number:int, date_time:str):
    query = """
    INSERT INTO boards (title, random_number, addition_date_time)
    VALUES (%(title)s, %(random_number)s, %(addition_date_time)s)
    """
    data = {'title': title, 'random_number': random_number, 
            'addition_date_time': date_time}
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
def get_board_id(cursor, random_string):
    query = """
    SELECT *
    FROM boards 
    WHERE random_number = %(random)s
    """
    data = {'random': random_string}
    cursor.execute(query, data)
    return cursor.fetchone()