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
          closeButton.textContent = 'Close';

      const loginButton = document.createElement('loginButton');
            loginButton.className = 'btn btn-sm btn-success text-white';
            loginButton.textContent = 'Login';


      // const emailTextAreaForm = document.createElement('form');
      //       emailTextAreaForm.className = 'form';
      //       emailTextAreaForm.id = 'emailTextAreaForm';

      // const emailTextAreaFormGroup = document.createElement('div');
      //       emailTextAreaFormGroup.className = 'form-group';
      //       emailTextAreaFormGroup.id = 'emailTextAreaFormGroup';

      // const emailTextAreaFormGroupLabel = document.createElement('emailTextAreaFormGroupLabel');
      //       emailTextAreaFormGroupLabel.innerHTML = 'Username';
      //       emailTextAreaFormGroupLabel.setAttribute('for', 'username');

      // const emailTextAreaFormGroupInput = document.createElement('input');
      //       emailTextAreaFormGroupInput.className = 'form-control';
      //       emailTextAreaFormGroupInput.setAttribute('type", "text');
      //       emailTextAreaFormGroupInput.setAttribute('id', 'username');
      //       emailTextAreaFormGroupInput.setAttribute('placeholder', 'Enter username');

      // emailTextAreaFormGroup.appendChild(emailTextAreaFormGroupLabel);
      // emailTextAreaFormGroup.appendChild(emailTextAreaFormGroupInput);

      // emailTextAreaForm.appendChild(emailTextAreaFormGroup);

      // const emailTextAreaFormGroupContainer = document.getElementById('emailTextAreaForm');
      //       emailTextAreaFormGroupContainer.appendChild(emailTextAreaForm);
    
    bodyElement.append(overlayDiv);
    loginWindow.appendChild(closeButton);
//     loginWindow.appendChild(emailTextAreaForm);
    loginWindow.appendChild(loginButton);
    overlayDiv.append(loginWindow);

    closeButton.addEventListener('click', event => {
        overlayDiv.remove();
        loginWindow.remove();
    })

}