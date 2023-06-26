import { expandHeader } from "../view/expanders/expandHeader.js";

export const login = (form, overlay, loginWindow) => {
    const formData = new FormData(form);

    const username = formData.get('username').trim();
    const password = formData.get('password').trim();

    if (username === '' && password === '') {
        showAlertWindow('Please fullfill both fields!');
    }   
    else if (formData.get('username').trim() === '') {
        showAlertWindow('Please enter valid username');
    } 
    else if (formData.get('password').trim() === '') {
        showAlertWindow('Please enter valid password!');
    } 

        else {
                fetch('/login', {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.json())
                .then(response => { 
                    if (response.error_password) {
                        console.log('error_password');
                    }
                    // if (response.error_user) {
                    //     console.log('error_user');
                    // }
                    else {
                    console.log(response.login, response['user_id']);
                    overlay.remove();
                    loginWindow.remove();
                    let header = document.querySelector('header');
                    header.innerHTML = "";
                    expandHeader(header, { 'logo': true, 
                    'signInButton': false, 
                    'loginButton': false });
                    }
                 });
            }
}
const showAlertWindow = (commit) => {
    const alertWindow = loginWindow.querySelector('#alert_window'); 
          alertWindow.classList.remove('hidden');
          alertWindow.innerHTML = '';
          alertWindow.textContent = commit;
}