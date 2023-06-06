let logoImg = document.createElement('img');
logoImg.src = './static/images/logo.jpg';
logoImg.alt = 'taskere logo';

let logo = document.createElement('div');
logo.className = 'navbar';
logo.appendChild(logoImg);

let addBoardButton = document.createElement('button');
addBoardButton.className = 'btn btn-dark text-white';
addBoardButton.textContent = '+ Add new board'

export let createHeader = () => {
    let header = document.getElementById('header');
    header.appendChild(logo)
}

export let createMain = () => {
    let mainWindow = document.getElementById('root');
    mainWindow.style.padding = '10px 10px';
    mainWindow.appendChild(addBoardButton)

}