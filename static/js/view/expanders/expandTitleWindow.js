export function expandTitleWindow(titleWindow, options) {
    
      titleWindow.classList.remove('justify-content-between');
      const backButton = document.createElement('button');
            backButton.className = 'btn btn-info';
            backButton.innerHTML = '<i class="fa-solid fa-angles-left"></i>'
      
      titleWindow.appendChild(backButton)

      const templateElement = document.createElement('div');
            //templateElement.appendChild(backButton);

      if (options.icon) {
            const publicIcon = document.createElement("i");
                  publicIcon.className = options.icon;
                  publicIcon.style.marginRight = '5px';
            templateElement.appendChild(publicIcon);
      }

      const textContainer = document.createElement('span');
            textContainer.className = 'd-flex align-items-center bg-warning rounded px-3 text-bold';
            textContainer.style.marginLeft = '8px';

      templateElement.appendChild(document.createTextNode(options.title));
      
      textContainer.appendChild(templateElement);
      titleWindow.appendChild(textContainer);

      if (options.commercial) {

            let titleImg = document.createElement('img');
                titleImg.src = './static/images/free-account.gif';
                titleImg.alt = 'get you free account sign';
                titleImg.style.height = '40px';
                titleImg.className = 'rounded';
                titleImg.id = 'sign_in_link';
                titleImg.style.cursor = 'pointer';

            const titleInfo = document.createElement('div');
                  titleInfo.className = 'd-flex align-items-center';
                  titleInfo.appendChild(titleImg);

            titleWindow.appendChild(titleInfo);
      }

      if (options.id) {
            titleWindow.setAttribute('data-board-id', options.id)
      }

      if (options.button) {
            const createNewBoardButton = document.createElement('button');
                  createNewBoardButton.id = 'create_new_board';
                  createNewBoardButton.className = 'btn btn-sm btn-info text-dark me-1 text-bold';    
                  createNewBoardButton.innerHTML = '<i class="fa-solid fa-plus"></i> Create New Board';
            titleWindow.appendChild(createNewBoardButton);
      }

}