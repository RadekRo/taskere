export const signin = (form, overlay, signinWindow) => {
    
    const formData = new FormData(form);
    
    const username = formData.get('username').trim();
    const password = formData.get('password').trim();
    const repeatPassword = formData.get('repeat_password').trim();

    if (username === '' || password === '' || repeatPassword === '') {
        showAlertWindow('Please fullfill all the fields!');
    }     
    else if (formData.get('password') !=  formData.get('repeat_password')) {
        showAlertWindow('Your repeated password is different from your password!');
    }
    else {
                fetch('/add_user', {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.json())
                .then(response => { 
                    overlay.remove();
                    signinWindow.remove();
                 });
            }
    }
 
const showAlertWindow = (commit) => {
    const alertWindow = signinWindow.querySelector('#alert_window'); 
          alertWindow.classList.remove('hidden');
          alertWindow.innerHTML = '';
          alertWindow.textContent = commit;
}
