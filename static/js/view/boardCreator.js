export let add_board = (title) => {
    let newBoard = document.createElement('div');
    newBoard.className = 'card';
    newBoard.style.width = '20%';
    newBoard.innerHTML = title;
    return newBoard
}

export let show_board_form = () => {
    // here will be all the magic with adding board form to the page after clicking a button
}


// export let show_boards = () => {

// }


