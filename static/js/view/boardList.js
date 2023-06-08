export class Board {
    constructor(boardId, textContent) {
        this.board = document.createElement('div');
        this.board.className = 'card card-body';
        this.board.textContent = textContent;
        this.board.setAttribute('id', boardId)
    }
    appendTo(parentElement) {
        parentElement.appendChild(this.board)
    }
}

export const boardContainer = document.createElement('div');
             boardContainer.setAttribute('id', 'board_list');
             boardContainer.className = 'd-flex';



