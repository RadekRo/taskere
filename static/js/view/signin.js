export const show_signin = () => {
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
        
  const signinWindow = document.createElement('div');
        signinWindow.style.width = '40%';
        signinWindow.style.height = '35%';
        signinWindow.style.zIndex = '9999';
        signinWindow.className = 'shadow p-3 mb-5 bg-white rounded';

  const closeButton = document.createElement('button');
        closeButton.className = 'btn btn-sm btn-danger text-white';
        closeButton.textContent = 'Close';

  const signinButton = document.createElement('loginButton');
        signinButton.className = 'btn btn-sm btn-success text-white';
        signinButton.textContent = 'SignIn';

  bodyElement.append(overlayDiv);
  signinWindow.appendChild(closeButton);
  signinWindow.appendChild(signinButton);
  overlayDiv.append(signinWindow);

  closeButton.addEventListener('click', event => {
      overlayDiv.remove();
      signinWindow.remove();
      console.log('click')
  })

}



