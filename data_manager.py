import database, random
from datetime import datetime

def get_random_number():
    random_number = random.randint(1, 999999999)
    return random_number

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
