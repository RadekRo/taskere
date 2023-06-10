import { boardForm, boardNameLabel, boardNameInput, boardNameSubmit } from './boardForm.js';

export const header = document.getElementById('header');
           header.className = 'd-flex justify-content-between';
export const titleWindow = document.getElementById('title');
           titleWindow.className = 'd-flex justify-content-between border-bottom';
           titleWindow.style.padding = '5px 10px';
export const mainWindow = document.getElementById('root');

let logoLink = document.createElement('a');
    logoLink.href = '/';

let logoImg = document.createElement('img');
    logoImg.src = './static/images/logo.jpg';
    logoImg.alt = 'taskere application logo';

let logo = document.createElement('div');
    logo.className = 'navbar';
    logo.appendChild(logoImg);
    logo.replaceChild(logoLink, logoImg);
    logoLink.appendChild(logoImg);

const mainTitle = document.createElement('div');
    mainTitle.className = 'd-flex align-items-center h4 text-info';

const addBoardButton = document.createElement('button');
      addBoardButton.setAttribute('id', 'add_board');
      addBoardButton.className = 'btn btn-info text-dark';    
      addBoardButton.textContent = '+ Create new board';

export const createNewBoardForm = () => {

    boardForm.appendChild(boardNameLabel);
    boardForm.appendChild(boardNameInput);
    boardForm.appendChild(boardNameSubmit);

    return boardForm;
}


export let createHeader = () => {
    header.appendChild(logo);
}

export let createTitle = (title, button = false) => {
    let text = document.createElement('span');
        text.style.margin = '0px 0px 0px 15px';
        text.textContent = title;
    
    let icon = document.createElement("i");
        icon.className = 'fa-solid fa-people-group fa-beat';
    
    mainTitle.appendChild(icon);
    mainTitle.appendChild(text);
    mainTitle.style.padding = '5px 5px'; 
    
    titleWindow.appendChild(mainTitle);
    if (button === true) {
        titleWindow.appendChild(addBoardButton);
    }

}

export let createMain = () => {
    mainWindow.style.padding = '10px 10px';
}


// let body = document.getElementById('body');

// createHeader()
//      header = document.createElement('header');
//      body.appendChild(header)
//      headerBuilder(body, header, logo = True, signIn = True, Login = True);

// createTitleWindow()
//      titleWindow = document.createElement('div');
//      body.appendChild(titleWindow)
//      titleWindowBuilder(body, titleWindow, title = '', button = '');

// createMainWindow()
//      mainWindow = document.createElement('main');
//      body.appendChild(mainWindow)
//      mainWindowBuilder(body, mainWindow, page = index);

// addEventListeners();

// index()