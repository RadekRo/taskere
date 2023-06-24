import { createCardForm } from "../forms/cardForm.js";
import { showCardList } from "./cardList.js";

const taskContainer = document.createElement('div');
      taskContainer.setAttribute('id', 'task_list');
      taskContainer.className = 'row px-3';

const addTaskButtonContainer = document.createElement('div');
      addTaskButtonContainer.id = 'add_task_button'
      addTaskButtonContainer.className = 'col-lg-2 col-md-4 col-sm-6 col-xs-12 p-1';

const addTaskButton = document.createElement('button');
      addTaskButton.className = 'btn btn-sm btn-success';
      addTaskButton.id = 'add_task';
      addTaskButton.textContent = '+ Add task-list';
      addTaskButtonContainer.appendChild(addTaskButton);
      taskContainer.appendChild(addTaskButtonContainer);

export class Task {
    constructor(id, title) {
        this.singleTask = document.createElement('div');
        this.singleTask.className = 'col-lg-2 col-md-4 col-sm-6 col-xs-12 p-1';
        this.singleTask.id = id;
        // this.singleTask.setAttribute("draggable", true);
        
        // this.singleTask.ondrag = () => {
        //     this.singleTask.classList.add('hidden');
        // };

        // this.singleTask.ondragend = () => {
        //     this.singleTask.classList.remove('hidden');
            
        // };

        // this.singleTask.ondragstart = () => {
        //     Task.draggedElement = this;
        // };

        // this.singleTask.ondragover = (event) => {
        //     event.preventDefault();
        //     if (Task.draggedElement && Task.draggedElement !== this) {
        //     let currentWidth = this.singleTask.offsetWidth/2;
        //     this.card.style.marginLeft = `${currentWidth}px`;
        //     }
        // }
        // this.singleTask.ondragleave = (event) => {
        //     event.preventDefault();
        //     if (Task.draggedElement && Task.draggedElement !== this) {
        //         this.card.style.marginLeft = '0px';
        //     }
        // };
        // this.singleTask.ondrop = (event) => {
        //     event.preventDefault();
        //     if (Task.draggedElement && Task.draggedElement !== this) {
        //         // Perform your desired action here
        //         console.log('User dropped the item');
        //     }
        // };
        
        this.card = document.createElement('div');
        this.card.className = 'card';
        this.card.style.backgroundColor = '#f9f9f9';
        this.card.style.height = '150px';

        this.cardHeader = document.createElement('div');
        this.cardHeader.className = 'card-header title-text';
        this.cardHeader.textContent = title.toUpperCase();
        this.cardHeader.style.cursor = 'pointer';

        this.cardHeader.addEventListener('click', function() {
            const existingText = this.textContent;
            const existingStyle = getComputedStyle(this);
            const titleInput = document.createElement('input');
                  titleInput.type = 'text';
                  titleInput.value = existingText;
    
                  titleInput.style.fontFamily = existingStyle.fontFamily;
                  titleInput.style.fontSize = existingStyle.fontSize;
                  titleInput.style.fontWeight = existingStyle.fontWeight;
                  titleInput.setSelectionRange(existingText.length, existingText.length);
    
            this.textContent = '';
            this.appendChild(titleInput);
    
            titleInput.focus();
    
            titleInput.addEventListener('blur', function() {
                const newTitle = titleInput.value.trim();
                console.log('id: ' + id)
      
                if (newTitle !== '') {
                    this.textContent = newTitle.toUpperCase();
                        fetch('/update_task', {
                            method: 'POST',
                            body: JSON.stringify(newTitle)
                        })
                        .then(response => response.json())
                        .then(response => {
                            console.log(response);
                        })
                        .catch(error => {
                            console.error(error);
                        });
                } else {
                    this.textContent = existingText;
                }
            }.bind(this));
        });
  
        this.cardBody = document.createElement('div');
        this.cardBody.className = 'card-body board-info';

        this.addCardButton = document.createElement('button');
        this.addCardButton.className = 'btn btn-sm px-0 py-0';
        this.addCardButton.innerHTML = '<i class="fa-solid fa-plus"></i> Add card';
        this.cardBody.appendChild(this.addCardButton);

        this.card.appendChild(this.cardHeader);
        this.card.appendChild(this.cardBody);
    
        this.singleTask.appendChild(this.card);
        showCardList(this.singleTask.querySelector('.card-body'), id);
    }
    appendTo(parentElement) {
        parentElement.insertBefore(this.singleTask, parentElement.firstChild);
    }

    getNode() {
        return this.singleTask;
    }

    editTitle(id) {
        this.cardHeader.innerHTML = '';
        this.inputTitle = document.createElement('input');
        this.inputTitle.contentEditable = true;
        this.inputTitle.classList.add('title-text');
        this.inputTitle.innerHTML = this.title; 
        this.cardHeader.appendChild(this.inputTitle);
    }
}
export function showTaskList(parentElement, boardId) {
    getAllTasks(boardId)
        .then(taskList => {
            showTasks(taskList, taskContainer, parentElement);
        })
      .catch(error => {
        console.error(error);
      });
}

const getAllTasks = (boardId) => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", "/get_tasks/" + boardId, true);
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    let response = JSON.parse(xhr.responseText);
                    resolve(response);
                } else {
                    reject(new Error("HTTP Request failed. Status: " + xhr.status));
                }
            }
        };
        xhr.send();
    });
}

export function showAddTaskButton() {
    let parentElement = document.getElementById('add_task_button');
        parentElement.innerHTML = '';
        const addTaskButton = document.createElement('button');
              addTaskButton.className = 'btn btn-sm btn-success';
              addTaskButton.id = 'add_task';
              addTaskButton.textContent = '+ Add task-list';
        parentElement.appendChild(addTaskButton);
}

const showTasks = (task_list, taskContainer, parentElement) => {
    task_list.forEach(task => {
        const new_task = new Task(task['id'], task['title']);
        new_task.appendTo(taskContainer);
    });
    parentElement.appendChild(taskContainer);
};