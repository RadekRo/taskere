import database, bcrypt

def hash_board_title(board_title):
    salt = bcrypt.gensalt()
    hash = bcrypt.hashpw(board_title.encode(encoding="utf-8"), salt)
    return hash.hex()

@database.connection_handler
def add_board_to_database(cursor, title:str):
    query = """
    INSERT INTO boards (title)
    VALUES (%(title)s)
    """
    data = {'title': title}
    cursor.execute(query, data)

@database.connection_handler
def get_boards(cursor):
    query = """
    SELECT *
    FROM boards
    """
    cursor.execute(query)
    return cursor.fetchall()
