import { createBoardForm } from "../view/boardForm.js";
import { emptyInputAlert } from "../view/boardForm.js";

export function createNewBoardButtonClick() {
    
    document.addEventListener('click', event => {
        if (event.target.id === 'create_new_board') {
            let newBoardForm = createBoardForm();
            let parentElement = document.getElementById('root');
                parentElement.appendChild(newBoardForm);
            boardFormControl();
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
            //alert('Please enter a board title.'); 
            boardForm.append(emptyInputAlert);
            setTimeout(() => {
                var div = document.getElementById('empty-input-alert');
                div.parentNode.removeChild(div);
              }, 2000);
            return; 
          }
        else {

        const formData = new FormData(this);
        fetch('/add_board', {
          method: 'POST',
          body: formData
        })
        .then(response => response.json())
        .then(response => {
          let root = document.getElementById('board_list');
          let newBoard = document.createElement('span');
          newBoard.className = 'card col-lg-2 col-md-4 col-sm-6 col-xs-12';
          newBoard.innerHTML = response['title'];
          newBoard.setAttribute('id', response['id']);
          newBoard.style.height = '100px';
          root.appendChild(newBoard);
        })
        .catch(error => {
          console.error(error);
        });
    }
      });

}