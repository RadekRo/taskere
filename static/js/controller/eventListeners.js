import { createBoardForm } from "../view/boardForm.js";
import { Board } from "../view/boardList.js";
import { Task } from "../view/taskList.js";
import { show_login } from "../view/login.js";
import { show_signin } from "../view/signin.js";
import { createTaskListForm } from "../view/taskForm.js";
import { showAddTaskButton } from "../view/taskList.js";

export function showNewBoardForm() {
    
    document.addEventListener('click', event => {
        if (event.target.id === 'create_new_board') {
            let newBoardForm = createBoardForm();
            let parentElement = document.getElementById('root');
                if (parentElement.firstChild) {
                    parentElement.insertBefore(newBoardForm, parentElement.firstChild);
                } else {
                    parentElement.appendChild(newBoardForm);
                }
            boardFormSubmit();
            boardFormCancel();
        }
    })

}

document.addEventListener('click', event => {
    if (event.target.id === 'login_button') {
        show_login();
    }
    if (event.target.id === 'signin_button') {
        show_signin();
    }
    if (event.target.id === 'add_task') {
        const taskFormContainer = document.getElementById('add_task_button');
        createTaskListForm(taskFormContainer);
        taskFormSubmit();
    }
    if (event.target.id === 'cancel_task') {
        event.preventDefault();
        showAddTaskButton();
    }
})

const taskFormSubmit = () => {
    const taskForm = document.getElementById('add_task')
          taskForm.addEventListener('submit', function(event) {  
            event.preventDefault(); 
            
            const formData = new FormData(this);
            fetch('/add_task', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(response => {
                let taskWindow = document.getElementById('task_list');
                const newTask = new Task(response['id'], response['title']);
                const newTaskNode = newTask.getNode();
                taskWindow.insertBefore(newTaskNode, taskWindow.lastChild)
                showAddTaskButton();
            })
            .catch(error => {
                console.error(error);
            });
        });
}

const boardFormSubmit = () => {
    
    let boardForm = document.getElementById('new_board');
        boardForm.addEventListener("submit", function(event) {
        
        event.preventDefault();
        
        let inputField = document.getElementById('board_title');
        
        if (inputField.value.trim() === '') {
            alert('Please enter a board title.'); 
        } else {
            const formData = new FormData(this);
            fetch('/add_board', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(response => {
                let boardWindow = document.getElementById('board_list');
                const newBoard = new Board(response['id'], response['title'], response['creation_date']);
                const newBoardNode = newBoard.getNode();
                boardWindow.insertBefore(newBoardNode, boardWindow.firstChild)
                inputField.value = '';
            })
            .catch(error => {
                console.error(error);
                //TODO: Add error handling on the page not only in console
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