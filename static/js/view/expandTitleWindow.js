export function expandTitleWindow(titleWindow, options) {
    
    const publicIcon = document.createElement("i");
          publicIcon.className = 'fa-solid fa-people-group fa-beat';
          publicIcon.style.marginRight = '5px';

    const textContainer = document.createElement('span');
          textContainer.className = 'd-flex align-items-center bg-warning rounded px-3 text-bold';
          textContainer.style.marginLeft = '8px';

    const wrapper = document.createElement('div');
          wrapper.appendChild(publicIcon);
          wrapper.appendChild(document.createTextNode(options.title));
    
    textContainer.appendChild(wrapper);
    titleWindow.appendChild(textContainer);

    let titleImg = document.createElement('img');
        titleImg.src = './static/images/free-account.jpg';
        titleImg.alt = 'get you free account sign';
        titleImg.className = 'rounded';

    const titleInfo = document.createElement('div');
          titleInfo.className = 'd-flex align-items-center';
          titleInfo.appendChild(titleImg);

    titleWindow.appendChild(titleInfo);

    if (options.button) {
        const createNewBoardButton = document.createElement('button');
              createNewBoardButton.setAttribute('id', 'create_new_board');
              createNewBoardButton.className = 'btn btn-sm btn-info text-dark me-1 text-bold';    
              createNewBoardButton.textContent = '+ Create new board';
        titleWindow.appendChild(createNewBoardButton);
    }

}