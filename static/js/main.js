import { add_board } from "./view/viewport.js";
import { main_view } from "./view/viewport.js";
import { handleClick } from "./controller/boardsManager.js"
import { createHeader, createMain } from "./view/htmlBuilder.js";

let header = document.getElementById('header');


let add_button = () => {
    let button_add_board = "<button id='add_board' class='btn'>Add board</button>";
    main_view.innerHTML = button_add_board;
    console.log('button added to the page!')
}

//add_button()
createHeader();
createMain();

// main_view.addEventListener('click', function(event) {
//     if (event.target.id === 'add_board') {
//         handleClick();
//     }
// });
