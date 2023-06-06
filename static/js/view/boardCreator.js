export let add_board = (title) => {
    let newBoard = document.createElement('div');
    newBoard.className = 'card';
    newBoard.style.width = '20%';
    newBoard.innerHTML = title;
    return newBoard
}


