export let boardForm = document.createElement('form');
           boardForm.name = 'new_board';
           boardForm.method = 'POST';
           boardForm.action = '/?form=submitted';

export let boardNameLabel = document.createElement('label');
           boardNameLabel.htmlFor = 'board_title';
           boardNameLabel.textContent = 'Board title';

export let boardNameInput = document.createElement('input');
           boardNameInput.setAttribute('id', 'board_title');
           boardNameInput.name = 'title';
           boardNameInput.placeholder = 'Enter board title';

export let boardNameSubmit = document.createElement('input');
           boardNameSubmit.type = 'submit';
           boardNameSubmit.value = 'Create new board';