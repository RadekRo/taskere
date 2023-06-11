import { createBoardForm } from "../view/boardForm.js";
import { emptyInputAlert } from "../view/boardForm.js";
import { Board } from "../view/boardsList.js";

export function createNewBoardButtonClick() {
    
    document.addEventListener('click', event => {
        if (event.target.id === 'create_new_board') {
            let newBoardForm = createBoardForm();
            let parentElement = document.getElementById('root');
                if (parentElement.firstChild) {
                    parentElement.insertBefore(newBoardForm, parentElement.firstChild);
                } else {
                    parentElement.appendChild(newBoardForm);
                }
            boardFormControl();
            boardFormCancel();
        }
    })

}

const boardFormControl = () => {
    let boardForm = document.getElementById('new_board');
        boardForm.addEventListener("submit", function(event) {
        
        event.preventDefault();
        
        let boardForm = document.getElementById('new_board');
        let inputField = document.getElementById('board_title');

        
        if (inputField.value.trim() === '') {
            alert('Please enter a board title.'); 
            // this might be refactored to show the user that his input is empty in other way than alert
            // boardForm.append(emptyInputAlert);
            // setTimeout(() => {
            //     var div = document.getElementById('empty-input-alert');
            //     div.parentNode.removeChild(div);
            //   }, 2000);
            // return; 
        } else {

        const formData = new FormData(this);
        fetch('/add_board', {
          method: 'POST',
          body: formData
        })
        .then(response => response.json())
        .then(response => {
          let root = document.getElementById('board_list');
          const newBoard = new Board(response['id'], response['title'], response['creation_date']);
          newBoard.appendTo(root);
          inputField.value = '';
        })
        .catch(error => {
          console.error(error);
        });
    }
      });

}

function boardFormCancel() {
    let boardContainer = document.getElementById('add_new_board_form');
    let inputField = document.getElementById('board_title');
    let cancelButton = document.getElementById('add_board_cancel');
        cancelButton.addEventListener("click", function(event) {
            boardContainer.remove();
            inputField.value = '';
    });
}