//import { add_board } from "./view/boardCreator.js";
import { getAllBoards } from "./controller/board.js"
import { createHeader, createMain, createNewBoardForm, mainWindow, addBoardButton, header } from "./view/htmlBuilder.js";
import { boardFormControl } from "./view/boardForm.js";

createHeader();
createMain();
getAllBoards();

header.addEventListener('click', (event) => {
    if (event.target.id === 'add_board') {
        mainWindow.appendChild(createNewBoardForm());
        boardFormControl();
        //mainWindow.insertBefore(add_board('A new board was born'), addBoardButton)
    }
});
