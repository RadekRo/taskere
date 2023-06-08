import { boardForm, boardNameLabel, boardNameInput, boardNameSubmit } from './boardForm.js';

export let header = document.getElementById('header');
export let mainWindow = document.getElementById('root');
           mainWindow.className = 'd-flex';

let logoImg = document.createElement('img');
    logoImg.src = './static/images/logo.jpg';
    logoImg.alt = 'taskere application logo';

let logo = document.createElement('div');
    logo.className = 'navbar';
    logo.appendChild(logoImg);

export let createNewBoardForm = () => {
  
    boardForm.appendChild(boardNameLabel);
    boardForm.appendChild(boardNameInput);
    boardForm.appendChild(boardNameSubmit);

    return boardForm;
}

export let addBoardButton = document.createElement('button');
           addBoardButton.setAttribute('id', 'add_board');
           addBoardButton.className = 'btn btn-dark text-white';    
           addBoardButton.textContent = '+ Add new board';

export let createHeader = () => {
    header.appendChild(logo)
}

export let createMain = () => {
    mainWindow.style.padding = '10px 10px';
    mainWindow.appendChild(addBoardButton)
}
