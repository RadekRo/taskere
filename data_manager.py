import database

@database.connection_handler
def add_board_to_database(cursor, title:str):
    query = """
    INSERT INTO boards (title)
    VALUES (%(title)s)
    """
    data = {'title': title}
    cursor.execute(query, data)
