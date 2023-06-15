export const show_login = () => {
    console.log('i wyjebałem');
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


    
    bodyElement.append(overlayDiv);
    overlayDiv.append(loginWindow);
    overlayDiv.addEventListener('click', event => {
        overlayDiv.remove();
        loginWindow.remove();
    })
    loginWindow.addEventListener('click', event => {
        console.log('clicked login window')
    })

}