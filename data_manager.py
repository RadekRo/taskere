import database, random

def get_random_number():
    random_number = random.randint(1, 999999)
    return random_number

@database.connection_handler
def add_board_to_database(cursor, title:str, random_number:int):
    query = """
    INSERT INTO boards (title, random_number)
    VALUES (%(title)s, %(random_number)s)
    """
    data = {'title': title, 'random_number': random_number}
    cursor.execute(query, data)



@database.connection_handler
def get_boards(cursor):
    query = """
    SELECT *
    FROM boards
    """
    cursor.execute(query)
    return cursor.fetchall()
