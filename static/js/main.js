import { add_board } from "./view/boardCreator.js";
import { handleClick } from "./controller/boardsManager.js"
import { createHeader, createMain, createNewBoardForm, mainWindow, addBoardButton, header } from "./view/htmlBuilder.js";

createHeader();
createMain();

header.addEventListener('click', function(event) {
    if (event.target.id === 'add_board') {
        handleClick();
        mainWindow.appendChild(createNewBoardForm());
        //mainWindow.insertBefore(add_board('A new board was born'), addBoardButton)
    }
});
