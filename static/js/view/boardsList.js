const boardContainer = document.createElement('div');
      boardContainer.setAttribute('id', 'board_list');
      boardContainer.className = 'row px-3';

export class Board {
    constructor(boardId, textContent, creation_date) {
        
        this.singleBoard = document.createElement('div');
        this.singleBoard.className = 'col-lg-2 col-md-4 col-sm-6 col-xs-12 p-1';
        this.singleBoard.setAttribute('id', boardId);
        this.singleBoard.addEventListener('click', () => {
            console.log('You clicked board with ' + boardId + ' id!');
        });

        this.card = document.createElement('div');
        this.card.className = 'card';
        this.card.style.transition = 'background-color 0.3s ease';
        this.card.style.backgroundColor = '#f9f9f9';

        this.card.addEventListener('mouseover', () => {
        this.card.style.backgroundColor = '#d9d9f9';
        this.card.style.cursor = 'pointer';
        });

        this.card.addEventListener('mouseout', () => {
        this.card.style.backgroundColor = '#f9f9f9';
        });

        this.cardHeader = document.createElement('div');
        this.cardHeader.className = 'card-header';
        this.cardHeader.textContent = textContent;
        
        this.cardBody = document.createElement('div');
        this.cardBody.className = 'card-body board-info';
        this.cardBody.style.height = '75px';
        this.cardBody.innerHTML = 'created: ' + creation_date;

        this.cardBody.appendChild(document.createElement('br'));
        this.card.appendChild(this.cardHeader);
        this.card.appendChild(this.cardBody);
    
        this.singleBoard.appendChild(this.card);
    }
    appendTo(parentElement) {
        parentElement.appendChild(this.singleBoard);
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
    boards_list.forEach(board => {
        const new_board = new Board(board.id, board.title, board.creation_date);
        new_board.appendTo(boardContainer);
    });
    parentElement.appendChild(boardContainer);
};

