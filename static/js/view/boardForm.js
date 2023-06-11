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
        boardNameSubmit.className = 'btn btn-sm btn-success';
        boardNameSubmit.type = 'submit';
        boardNameSubmit.value = 'Save';
        boardFormElements.appendChild(boardNameSubmit);
  
  boardForm.appendChild(boardFormElements);
  boardFormContainer.appendChild(boardForm);

  return boardFormContainer;

}

export const emptyInputAlert = document.createElement('div');
             emptyInputAlert.setAttribute('id', 'empty-input-alert');
             emptyInputAlert.className = 'bg-warning text=white'
             emptyInputAlert.innerHTML = 'Empty input field!'