export const boardForm = document.createElement('form');
           boardForm.setAttribute('id', 'new_board');
           boardForm.method = 'POST';
           boardForm.action = '/add_board';

export const boardNameLabel = document.createElement('label');
           boardNameLabel.htmlFor = 'board_title';
           boardNameLabel.textContent = 'Board title';

export const boardNameInput = document.createElement('input');
           boardNameInput.setAttribute('id', 'board_title');
           boardNameInput.name = 'title';
           boardNameInput.placeholder = 'Enter board title';

export const boardNameSubmit = document.createElement('input');
           boardNameSubmit.type = 'submit';
           boardNameSubmit.value = 'Save';

const emptyInputAlert = document.createElement('div');
           emptyInputAlert.setAttribute('id', 'empty-input-alert');
           emptyInputAlert.className = 'bg-warning text=white'
           emptyInputAlert.innerHTML = 'Empty input field!'


export const boardFormControl = () => {
    document.getElementById("new_board").addEventListener("submit", (event) => {
        
        event.preventDefault();
      
        if (boardNameInput.value.trim() === '') {
            // alert('Please enter a board title.'); 
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
        .then(data => {
          console.log(data);
        })
        .catch(error => {
          console.error(error);
        });
    }
      });

}