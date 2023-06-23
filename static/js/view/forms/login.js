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
                    overlay.remove();
                    loginWindow.remove();
                 });
            }
    }