import { createBoardForm } from "../view/boardForm.js" 

export function createNewBoardButtonClick() {
    
    document.addEventListener('click', event => {
        if (event.target.id === 'create_new_board') {
            let parentElement = document.getElementById('root');
                parentElement.appendChild(createBoardForm());
        }
    })

}