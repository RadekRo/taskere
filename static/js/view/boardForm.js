// import { getAllBoards } from "../controller/board.js";
// import { createMain, mainWindow } from "./htmlBuilder.js";

export function createBoardForm() {

  const boardFormContainer = document.createElement('div');
  const boardFormElements = document.createDocumentFragment();

  const boardForm = document.createElement('form');
        boardForm.setAttribute('id', 'new_board');
        boardForm.method = 'POST';
        boardForm.action = '/add_board';

  const boardNameLabel = document.createElement('label');
        boardNameLabel.htmlFor = 'board_title';
        boardNameLabel.textContent = 'Board title';
        boardFormElements.appendChild(boardNameLabel);

  const boardNameInput = document.createElement('input');
        boardNameInput.setAttribute('id', 'board_title');
        boardNameInput.name = 'title';
        boardNameInput.placeholder = 'Enter board title';
        boardFormElements.appendChild(boardNameInput);

  const boardNameSubmit = document.createElement('input');
        boardNameSubmit.type = 'submit';
        boardNameSubmit.value = 'Save';
        boardFormElements.appendChild(boardNameSubmit);
  
  boardForm.appendChild(boardFormElements);
  boardFormContainer.appendChild(boardForm);

  return boardFormContainer;

}

export const boardForm = document.createElement('form');
           boardForm.setAttribute('id', 'new_board');
           boardForm.method = 'POST';
           boardForm.action = '/add_board';

export const boardNameLabel = document.createElement('label');
           boardNameLabel.htmlFor = 'board_title';
           boardNameLabel.textContent = 'Board title';

export const boardNameInput = document.createElement('input');
           boardNameInput.setAttribute('id', 'board_title');
           boardNameInput.name = 'title';
           boardNameInput.placeholder = 'Enter board title';

export const boardNameSubmit = document.createElement('input');
           boardNameSubmit.type = 'submit';
           boardNameSubmit.value = 'Save';

const emptyInputAlert = document.createElement('div');
           emptyInputAlert.setAttribute('id', 'empty-input-alert');
           emptyInputAlert.className = 'bg-warning text=white'
           emptyInputAlert.innerHTML = 'Empty input field!'


export const boardFormControl = () => {
    document.getElementById("new_board").addEventListener("submit", function(event) {
        
        event.preventDefault();
      
        if (boardNameInput.value.trim() === '') {
            // alert('Please enter a board title.'); 
            boardForm.append(emptyInputAlert);
            setTimeout(() => {
                var div = document.getElementById('empty-input-alert');
                div.parentNode.removeChild(div);
              }, 2000);
            return; 
          }
        else {

        const formData = new FormData(this);
        fetch('/add_board', {
          method: 'POST',
          body: formData
        })
        .then(response => response.json())
        .then(response => {
          let root = document.getElementById('board_list');
          let newBoard = document.createElement('span');
          newBoard.className = 'card col-lg-2 col-md-4 col-sm-6 col-xs-12';
          newBoard.innerHTML = response['title'];
          newBoard.setAttribute('id', response['id']);
          newBoard.style.height = '100px';
          root.appendChild(newBoard);
        })
        .catch(error => {
          console.error(error);
        });
    }
      });

}