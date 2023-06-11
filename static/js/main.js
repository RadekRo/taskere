// import { add_board } from "./view/boardCreator.js";
// import { getAllBoards } from "./controller/board.js"
import { createHeader, createMainWindow, createTitleWindow, addEventListeners } from "./view/htmlBuilder.js"; //, createMain, createNewBoardForm, mainWindow, titleWindow, createTitle } from "./view/htmlBuilder.js";
// import * as htmlBuilder from "./view/htmlBuilder.js";
// import { boardFormControl } from "./view/boardForm.js";

createHeader();
createTitleWindow('Public boards', true);
createMainWindow();
addEventListeners();


// titleWindow.addEventListener('click', event => {
//     if (event.target.id === 'add_board') {
//        titleWindow.appendChild(createNewBoardForm());
//         boardFormControl();
//         //mainWindow.insertBefore(add_board('A new board was born'), addBoardButton)
//     }
// });

// htmlBuilder.createHeader();
// htmlBuilder.createTitleWindow();
// htmlBuilder.createMainWindow();

// htmlBuilder.AddEventListeners();