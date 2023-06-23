import { overlayDiv } from "../overLayers.js";
import { signin } from "../forms/signin.js";

export const show_signin = () => {

  const body = document.querySelector('body');
  
  const signinWindow = document.createElement('div');
  signinWindow.style.width = '35%';
  signinWindow.style.zIndex = '9999';
  signinWindow.className = 'shadow p-3 mb-5 bg-white rounded';
  signinWindow.id = 'signinWindow';

const titleElement = document.createElement('div');
  titleElement.className = 'd-flex justify-content-center user-form-title py-2 border-bottom mb-3';
  titleElement.innerHTML = 'Sign In';

const closeButtonContainer = document.createElement('div');
  closeButtonContainer.className = 'd-flex justify-content-end'

  const closeButton = document.createElement('button');
        closeButton.className = 'btn btn-sm btn-danger text-white';
        closeButton.innerHTML = '<i class="fa-solid fa-xmark"></i> Close';

  closeButtonContainer.appendChild(closeButton);

const signinForm = document.createElement('form');
      signinForm.id = 'signin_form';
      signinForm.method = 'POST';
      signinForm.action = '/add_user'

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

signinForm.append(userNameContainer)

const userPswdContainer = document.createElement('div');      
  userPswdContainer.className = 'input-group px-2 py-2 w-100';

  const passwordInput = document.createElement('input');
        passwordInput.id = 'password';
        passwordInput.type = 'password';
        passwordInput.maxLength = '50';
        passwordInput.name = 'password';
        passwordInput.placeholder = 'Password';
        passwordInput.className = 'form-control w-100';
  
  userPswdContainer.append(passwordInput)

  signinForm.append(userPswdContainer)

  const userRepeatPswdContainer = document.createElement('div');      
        userRepeatPswdContainer.className = 'input-group px-2 py-2 w-100';

  const repeatPasswordInput = document.createElement('input');
        repeatPasswordInput.id = 'repeat_password';
        repeatPasswordInput.type = 'password';
        repeatPasswordInput.maxLength = '50';
        repeatPasswordInput.name = 'repeat_password';
        repeatPasswordInput.placeholder = 'Re-type password';
        repeatPasswordInput.className = 'form-control w-100';
  
userRepeatPswdContainer.append(repeatPasswordInput)

signinForm.append(userPswdContainer)
signinForm.append(userRepeatPswdContainer)

const signinButtonContainer = document.createElement('div');      
signinButtonContainer.className = 'd-flex justify-content-center pt-2 w-100';

  const signinButton = document.createElement('button');
        signinButton.className = 'btn btn-success text-white px-5';
        signinButton.textContent = 'SignIn';
        signinButton.type = 'submit';

signinButtonContainer.appendChild(signinButton)
signinForm.appendChild(signinButtonContainer)

body.append(overlayDiv);
signinWindow.appendChild(closeButtonContainer);
signinWindow.appendChild(titleElement);
signinWindow.appendChild(signinForm);
overlayDiv.append(signinWindow);

closeButton.addEventListener('click', () => {
  overlayDiv.remove();
  signinWindow.remove();
})

signinForm.addEventListener('submit', event => {
 console.log(event.target)
  event.preventDefault();
  signin(event.target, overlayDiv, signinWindow);
})
}