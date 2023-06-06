import { add_board, show_boards } from "./view/boardCreator.js";
import { mainWindow, addBoardButton } from "./view/htmlBuilder.js";
import { handleClick } from "./controller/boardsManager.js"
import { createHeader, createMain } from "./view/htmlBuilder.js";

//let header = document.getElementById('header');

//add_button()
createHeader();
createMain();

mainWindow.addEventListener('click', function(event) {
    if (event.target.id === 'add_board') {
        handleClick();
        mainWindow.insertBefore(add_board('A new board was born'), addBoardButton)
    }
    // mainWindow.insertBefore(show_boards())
});
