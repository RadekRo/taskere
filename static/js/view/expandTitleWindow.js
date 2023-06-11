export function expandTitleWindow(titleWindow, options) {
    
    if (options.button) {
        const createNewBoardButton = document.createElement('button');
              createNewBoardButton.setAttribute('id', 'add_board');
              createNewBoardButton.className = 'btn btn-info text-dark';    
              createNewBoardButton.textContent = '+ Create new board';
        titleWindow.appendChild(createNewBoardButton);
    }

}