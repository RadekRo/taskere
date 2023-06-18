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
    //     this.singleTask.addEventListener('click', () => {
    //         console.log('You clicked task with ' + taskId + ' id!');
    //         let titleWindow = document.getElementById('title_window');
    //         titleWindow.innerHTML = '';
    //         expandTitleWindow(titleWindow, {'title': textContent})
    //         let mainWindow = document.getElementById('root');
    //         mainWindow.innerHTML = '';
    //         showTaskList(mainWindow);

    //     });

        this.card = document.createElement('div');
        this.card.className = 'card';
        this.card.style.transition = 'background-color 0.3s ease';
        this.card.style.backgroundColor = '#f9f9f9';
        this.card.style.height = '150px';

        this.card.addEventListener('mouseover', () => {
        this.card.style.backgroundColor = '#d9d9f9';
        this.card.style.cursor = 'pointer';
        });

        this.card.addEventListener('mouseout', () => {
        this.card.style.backgroundColor = '#f9f9f9';
        });

        this.cardHeader = document.createElement('div');
        this.cardHeader.className = 'card-header';
        this.cardHeader.textContent = title;
        
        this.cardBody = document.createElement('div');
        this.cardBody.className = 'card-body board-info';
        this.cardBody.innerHTML = '';

        this.cardBody.appendChild(document.createElement('br'));
        this.card.appendChild(this.cardHeader);
        this.card.appendChild(this.cardBody);
    
        this.singleTask.appendChild(this.card);
    }
    appendTo(parentElement) {
        parentElement.insertBefore(this.singleTask, parentElement.firstChild);
    }

    getNode() {
        return this.singleTask;
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
