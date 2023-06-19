import { overlayDiv } from "../overLayers.js";

export const show_login = () => {
      const bodyElement = document.querySelector('body');
    
      const loginWindow = document.createElement('div');
            loginWindow.style.width = '40%';
            loginWindow.style.height = '35%';
            loginWindow.style.zIndex = '9999';
            loginWindow.className = 'shadow p-3 mb-5 bg-white rounded';
            loginWindow.id = 'loginWindow';
    
      const closeButtonContainer = document.createElement('div');
            closeButtonContainer.className = 'd-flex justify-content-end'

            const closeButton = document.createElement('button');
                  closeButton.className = 'btn btn-sm btn-danger text-white';
                  closeButton.innerHTML = '<i class="fa-solid fa-xmark"></i> Close';
      
            closeButtonContainer.appendChild(closeButton);

      const loginForm = document.createElement('form');
            loginForm.id = 'login_form';
            loginForm.method = 'POST';
            loginForm.action = '/login';
       
      const userNameContainer = document.createElement('div');      
            userNameContainer.className = 'input-group px-2 py-2 w-100';
  
            const userNameInput = document.createElement('input');
                  userNameInput.id = 'board_title';
                  userNameInput.type = 'text';
                  userNameInput.maxLength = '50';
                  userNameInput.name = 'title';
                  userNameInput.placeholder = 'Enter new board title';
                  userNameInput.className = 'form-control w-100';
            
            userNameContainer.append(userNameInput)

      loginForm.append(userNameContainer)
    
      const userPswdContainer = document.createElement('div');      
            userPswdContainer.className = 'input-group px-2 py-2 w-100';
  
            const loginNameInput2 = document.createElement('input');
                  loginNameInput2.id = 'board_title';
                  loginNameInput2.type = 'text';
                  loginNameInput2.maxLength = '50';
                  loginNameInput2.name = 'title';
                  loginNameInput2.placeholder = 'Enter new board title';
                  loginNameInput2.className = 'form-control';
                  loginNameInput2.style.width = '100%';
            
            userPswdContainer.append(loginNameInput2)
      
      loginForm.append(userPswdContainer)
    
      const loginButtonContainer = document.createElement('div');      
            loginButtonContainer.className = 'd-flex justify-content-center w-100';

            const loginButton = document.createElement('loginButton');
                  loginButton.className = 'btn btn-success text-white';
                  loginButton.textContent = 'Login';

            loginButtonContainer.appendChild(loginButton)
    
      bodyElement.append(overlayDiv);
      loginWindow.appendChild(closeButtonContainer);
      loginWindow.appendChild(loginForm);
      loginWindow.appendChild(loginButtonContainer);
      overlayDiv.append(loginWindow);

      closeButton.addEventListener('click', event => {
            overlayDiv.remove();
            loginWindow.remove();
      })

}