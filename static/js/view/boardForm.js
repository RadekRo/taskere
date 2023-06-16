export function createBoardForm() {
  const boardFormContainer = document.createElement('div');
        boardFormContainer.className = 'mb-1';
        boardFormContainer.setAttribute('id', 'add_new_board_form')
  const boardFormElements = document.createDocumentFragment();

  const boardForm = document.createElement('form');
        boardForm.id = 'new_board';
        boardForm.method = 'POST';
        boardForm.action = '/add_board';
        boardForm.className = 'd-flex justify-content-center';

  const inputGroup = document.createElement('div');
        inputGroup.className = 'input-group px-2';
        inputGroup.style.width = '50%';

  const boardNameInput = document.createElement('input');
        boardNameInput.id = 'board_title';
        boardNameInput.type = 'text';
        boardNameInput.maxLength = '50';
        boardNameInput.name = 'title';
        boardNameInput.placeholder = 'Enter new board title';
        boardNameInput.className = 'form-control';
        boardNameInput.style.width = '50%';

  inputGroup.appendChild(boardNameInput);

  const boardNameSubmit = document.createElement('button');
        boardNameSubmit.className = 'btn btn-sm btn-success';
        boardNameSubmit.type = 'submit';
        boardNameSubmit.textContent = 'Save your board';

  inputGroup.appendChild(boardNameSubmit);

  const boardNameCancel = document.createElement('input');
        boardNameCancel.type = 'button';
        boardNameCancel.value = 'Cancel/Hide';
        boardNameCancel.id = 'add_board_cancel';
        boardNameCancel.className = 'btn btn-sm btn-danger';

  inputGroup.appendChild(boardNameCancel);

  boardFormElements.appendChild(inputGroup);
  boardForm.appendChild(boardFormElements);
  boardFormContainer.appendChild(boardForm);

  return boardFormContainer;
}