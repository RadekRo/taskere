import { add_board } from "./view/viewport.js";
import { main_view } from "./view/viewport.js";
import { handleClick } from "./controller/boardsManager.js"

let add_button = () => {
    let button_add_board = "<button id='add_board' class='btn'>Add board</button>";
    main_view.innerHTML = button_add_board;
    console.log('button added to the page!')
}

add_button()

main_view.addEventListener('click', function(event) {
    if (event.target.id === 'add_board') {
        handleClick();
    }
});
