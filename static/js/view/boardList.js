export class Board {
    constructor(boardId, textContent) {
        this.board = document.createElement('span');
        this.board.className = 'card col-lg-2 col-md-4 col-sm-6 col-xs-12';
        this.board.textContent = textContent;
        this.board.style.height = '100px';
        this.board.setAttribute('id', boardId)
    }
    appendTo(parentElement) {
        parentElement.appendChild(this.board)
    }
}

export const boardContainer = document.createElement('div');
             boardContainer.setAttribute('id', 'board_list');
             boardContainer.className = 'row';



