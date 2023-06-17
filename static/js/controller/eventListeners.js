import { createBoardForm } from "../view/boardForm.js";
import { Board } from "../view/boardList.js";
import { Task } from "../view/taskList.js";
import { show_login } from "../view/login.js";
import { show_signin } from "../view/signin.js";
import { createTaskListForm } from "../view/taskForm.js";

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
        let parentElement = document.getElementById('add_task_button');
        parentElement.innerHTML = '';
        const addTaskButton = document.createElement('button');
              addTaskButton.className = 'btn btn-sm btn-success';
              addTaskButton.id = 'add_task';
              addTaskButton.textContent = '+ Add task-list';
        parentElement.appendChild(addTaskButton);
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
                let root = document.getElementById('task_list');
                const newTask = new Task(response['id'], response['title']);
                const newTaskNode = newTask.getNode();
                root.insertBefore(newTaskNode, root.lastChild)
                
                let parentElement = document.getElementById('add_task_button');
                parentElement.innerHTML = '';
                const addTaskButton = document.createElement('button');
                      addTaskButton.className = 'btn btn-sm btn-success';
                      addTaskButton.id = 'add_task';
                      addTaskButton.textContent = '+ Add task-list';
                parentElement.appendChild(addTaskButton);
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
        
        //let boardForm = document.getElementById('new_board');
        let inputField = document.getElementById('board_title');

        
        if (inputField.value.trim() === '') {
            alert('Please enter a board title.'); 
        } else {
        console.log(this)
        const formData = new FormData(this);
        console.log(formData);
        fetch('/add_board', {
          method: 'POST',
          body: formData
        })
        .then(response => response.json())
        .then(response => {
          let root = document.getElementById('board_list');
          const newBoard = new Board(response['id'], response['title'], response['creation_date']);
          const newBoardNode = newBoard.getNode();
          root.insertBefore(newBoardNode, root.firstChild)
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