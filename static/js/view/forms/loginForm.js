import { overlayDiv } from "../overLayers.js";
import { login } from "../../controller/login.js";

export const show_login = () => {

      const body = document.querySelector('body');

      const loginWindow = document.createElement('div');
            loginWindow.style.width = '35%';
            loginWindow.style.zIndex = '9999';
            loginWindow.className = 'shadow p-3 mb-5 bg-white rounded';
            loginWindow.id = 'loginWindow';
      
      const titleElement = document.createElement('div');
            titleElement.className = 'd-flex justify-content-center user-form-title py-2 border-bottom mb-3';
            titleElement.innerHTML = 'Login';

      const alertWindow = document.createElement('div');
      alertWindow.id = 'alert_window'; 
      alertWindow.className = 'bg-warning text-white text-center rounded py-2 mb-2 hidden';
    
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
                  userNameInput.id = 'username';
                  userNameInput.type = 'text';
                  userNameInput.maxLength = '50';
                  userNameInput.name = 'username';
                  userNameInput.placeholder = 'Username / E-mail';
                  userNameInput.className = 'form-control w-100';
            
            userNameContainer.append(userNameInput)

      loginForm.append(userNameContainer)
    
      const userPswdContainer = document.createElement('div');      
            userPswdContainer.className = 'input-group px-2 py-2 w-100';
  
            const passwordInput = document.createElement('input');
                  passwordInput.id = 'password';
                  passwordInput.type = 'password';
                  passwordInput.maxLength = '50';
                  passwordInput.name = 'password';
                  passwordInput.placeholder = 'password';
                  passwordInput.className = 'form-control w-100';
            
            userPswdContainer.append(passwordInput)
      
      loginForm.append(userPswdContainer)

      const loginButtonContainer = document.createElement('div');      
            loginButtonContainer.className = 'd-flex justify-content-center pt-2 w-100';

            const loginButton = document.createElement('button');
                  loginButton.className = 'btn btn-success text-white px-5';
                  loginButton.textContent = 'Login';
                  loginButton.type = 'submit';

      loginButtonContainer.appendChild(loginButton)
      loginForm.appendChild(loginButtonContainer)
      
      body.append(overlayDiv);
      loginWindow.appendChild(closeButtonContainer);
      loginWindow.appendChild(titleElement);
      loginWindow.appendChild(alertWindow);
      loginWindow.appendChild(loginForm);
      // loginWindow.appendChild(loginButtonContainer);
      overlayDiv.append(loginWindow);

      closeButton.addEventListener('click', () => {
            overlayDiv.remove();
            loginWindow.remove();
      })

      loginForm.addEventListener('submit', event => {
            console.log(event.target)
            event.preventDefault();
            login(event.target, overlayDiv, loginWindow);
            })
}