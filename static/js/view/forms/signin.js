export const signin = (form, overlay, signinWindow) => {
    const formData = new FormData(form);
    if (formData.get('username').trim() === '') {
        alert('Please enter a username.'); 
    } 
    if (formData.get('password').trim() === '') {
        alert('Please enter a password.'); 
    } 
    if (formData.get('repeat_password').trim() === '') {
        alert('Please re-enter your password.'); 
    } 
    if (formData.get('password') !=  formData.get('repeat_password')) {
        alert('Please enter passwords and re-type identical one.'); 
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
 

