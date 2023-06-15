export function createTaskListForm(parentElement) {
    parentElement.innerHTML = '';

    const taskListForm = document.createElement('form');
        taskListForm.id = 'add_task';
        taskListForm.method = 'POST';
        taskListForm.action = '/add_task';          
        
        const inputHidden = document.createElement('input');
              inputHidden.type = 'hidden';
              inputHidden.name = 'board_id';
              inputHidden.value = document.getElementById('title_window').getAttribute('data-board-id');

        const inputTitle = document.createElement('input');
              inputTitle.name = 'title';
              inputTitle.type = 'text';
              inputTitle.className = 'form-control';
              inputTitle.setAttribute('placeholder', 'Enter task title');

        const saveTaskButton = document.createElement('button');
              saveTaskButton.className = 'btn btn-sm bg-success text-white';
              saveTaskButton.id = 'save_task';
              saveTaskButton.type = 'submit';
              saveTaskButton.textContent = 'Save'; 

        const cancelTaskButton = document.createElement('button');
              cancelTaskButton.className = 'btn btn-sm bg-danger text-white';
              cancelTaskButton.id = 'cancel_task';
              cancelTaskButton.textContent = 'Cancel';
        
        taskListForm.appendChild(inputHidden);
        taskListForm.appendChild(inputTitle);
        taskListForm.appendChild(saveTaskButton);
        taskListForm.appendChild(cancelTaskButton);

        parentElement.appendChild(taskListForm);
}