export function expandTitleWindow(titleWindow, options) {
    
    const textContainer = document.createElement('span');
          textContainer.className = 'd-flex align-items-center text-dark';
          textContainer.style.marginLeft = '15px';
          textContainer.textContent = options.title;
    titleWindow.appendChild(textContainer);

    if (options.button) {
        const createNewBoardButton = document.createElement('button');
              createNewBoardButton.setAttribute('id', 'add_board');
              createNewBoardButton.className = 'btn btn-sm btn-info text-dark me-1';    
              createNewBoardButton.textContent = '+ Create new board';
        titleWindow.appendChild(createNewBoardButton);
    }

}