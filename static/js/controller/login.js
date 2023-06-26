import { expandHeader } from "../view/expanders/expandHeader.js";

export const login = (form, overlay, loginWindow) => {
    console.log("login button clicked")
    const formData = new FormData(form);
    if (formData.get('username').trim() === '') {
        alert('Please enter a username.'); 
    } 
    if (formData.get('password').trim() === '') {
        alert('Please enter a password.'); 
    } 
        else {
                fetch('/login', {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.json())
                .then(response => { 
                    if (response.error) {
                        console.log(response.error)
                    }
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