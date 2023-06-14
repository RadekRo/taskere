export function createTasksListForm() {
    const tasksListFormContainer = document.createElement('div');
          tasksListFormContainer.className = 'mb-1';
          tasksListFormContainer.setAttribute('id', 'add_new_task_list_form');

    const taskListForm = document.createElement('form');
        taskListForm.id = 'task_list';
        taskListForm.method = 'POST';
        taskListForm.action = '/add_task_list';
        taskListForm.className = 'd-flex justify-content-center';          
          
}