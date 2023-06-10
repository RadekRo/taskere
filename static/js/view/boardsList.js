const boardContainer = document.createElement('div');
      boardContainer.setAttribute('id', 'board_list');
      boardContainer.className = 'row px-3';

class Board {
    constructor(boardId, textContent) {
        this.board = document.createElement('span');
        this.board.className = 'card col-lg-2 col-md-4 col-sm-6 col-xs-12';
        this.board.textContent = textContent;
        this.board.style.height = '100px';
        //this.board.style.margin = '10px 0px 0px 15px';
        this.board.setAttribute('id', boardId)
    }
    appendTo(parentElement) {
        parentElement.appendChild(this.board)
    }
}

export function showBoardsList(parentElement) {
    getAllBoards()
      .then(boardsList => {
        showBoards(boardsList, boardContainer, parentElement);
      })
      .catch(error => {
        console.error(error);
      });
}

const getAllBoards = () => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", "/get_boards", true);
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    let response = JSON.parse(xhr.responseText);
                    resolve(response);
                } else {
                    reject(new Error("HTTP Request failed. Status: " + xhr.status));
                }
            }
        };
        xhr.send();
    });
}
            
const showBoards = (boards_list, boardContainer, parentElement) => {
    boards_list.forEach((board) => {
        const new_board = new Board(board.id, board.title);
        new_board.appendTo(boardContainer);
    });
    parentElement.appendChild(boardContainer);
};

