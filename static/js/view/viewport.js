const main_view = document.getElementById("root");

let board = "<div class='bg-success class_board'>First board</div>";
let button_add_board = "<button class='btn'>Add board</button>";
// button_add_board.onclick = location.href='/add_board';

export let add_board = () => {
    main_view.innerHTML=board;
    main_view.innerHTML+=button_add_board;
}


