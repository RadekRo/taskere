export const show_login = () => {
    const bodyElement = document.querySelector('body');
    
    const overlayDiv = document.createElement('div');
          overlayDiv.style.position = 'fixed';
          overlayDiv.style.top = '0';
          overlayDiv.style.left = '0';
          overlayDiv.style.width = '100%';  
          overlayDiv.style.height = '100%';
          overlayDiv.style.backgroundColor = 'rgba(128, 128, 128, 0.5)';
          overlayDiv.style.zIndex = '1';
          overlayDiv.className = 'd-flex justify-content-center align-items-center';
          
    const loginWindow = document.createElement('div');
          loginWindow.style.width = '40%';
          loginWindow.style.height = '35%';
          loginWindow.style.zIndex = '9999';
          loginWindow.className = 'shadow p-3 mb-5 bg-white rounded';
          loginWindow.id = 'loginWindow';

    const closeButton = document.createElement('button');
          closeButton.className = 'btn btn-sm btn-danger text-white';
          closeButton.innerHTML = '<i class="fa-solid fa-xmark"></i> Close';

    const loginForm = document.createElement('form');
          loginForm.id = 'login_form';
          loginForm.method = 'POST';
          loginForm.action = '/login';
          loginForm.className = 'd-flex justify-content-center';

    const inputGroup = document.createElement('div');
          inputGroup.className = 'input-group px-2';
          inputGroup.style.width = '100%';
  
    const loginNameInput = document.createElement('input');
          loginNameInput.id = 'board_title';
          loginNameInput.type = 'text';
          loginNameInput.maxLength = '50';
          loginNameInput.name = 'title';
          loginNameInput.placeholder = 'Enter new board title';
          loginNameInput.className = 'form-control';
          loginNameInput.style.width = '100%';
    loginForm.append(loginNameInput)

    const loginNameInput2 = document.createElement('input');
          loginNameInput2.id = 'board_title';
          loginNameInput2.type = 'text';
          loginNameInput2.maxLength = '50';
          loginNameInput2.name = 'title';
          loginNameInput2.placeholder = 'Enter new board title';
          loginNameInput2.className = 'form-control';
          loginNameInput2.style.width = '100%';
    loginForm.append(loginNameInput2)

    const loginButton = document.createElement('loginButton');
          loginButton.className = 'btn btn-sm btn-success text-white';
          loginButton.textContent = 'Login';
    
    bodyElement.append(overlayDiv);
    loginWindow.appendChild(closeButton);
    loginWindow.appendChild(loginForm);
    //loginWindow.appendChild(loginButton);
    overlayDiv.append(loginWindow);

    closeButton.addEventListener('click', event => {
        overlayDiv.remove();
        loginWindow.remove();
    })

}