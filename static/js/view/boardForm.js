export let boardForm = document.createElement('form');
           boardForm.setAttribute('id', 'new_board');
           boardForm.method = 'POST';
           boardForm.action = '/add_board';

export let boardNameLabel = document.createElement('label');
           boardNameLabel.htmlFor = 'board_title';
           boardNameLabel.textContent = 'Board title';

export let boardNameInput = document.createElement('input');
           boardNameInput.setAttribute('id', 'board_title');
           boardNameInput.name = 'title';
           boardNameInput.placeholder = 'Enter board title';

export let boardNameSubmit = document.createElement('input');
           boardNameSubmit.type = 'submit';
           boardNameSubmit.value = 'Save';

export let boardFormControl = () => {
    document.getElementById("new_board").addEventListener("submit", function(event) {
        
        event.preventDefault();
      
        const formData = new FormData(this);
        fetch('/add_board', {
          method: 'POST',
          body: formData
        })
        .then(response => response.json())
        .then(data => {
          console.log(data);
        })
        .catch(error => {
          console.error(error);
        });
      });

}