export const signin = () => {
    console.log("signin button clicked")


    let userName = document.getElementById('username');
            userName.addEventListener("signin", function(event) {
            
            event.preventDefault();
            
            let inputField = document.getElementById('username');
            
            if (inputField.value.trim() === '') {
                alert('Please enter a username.'); 
            } else {
                const formData = new FormData(this);
                fetch('/add_user', {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.json())
                .then(response => {
                    let username = document.getElementById('username');
                    let password = document.getElementById('password');
                
                })
                .catch(error => {
                    console.error(error);
                    //TODO: Add error handling on the page not only in console
                });
            }
            });
    

}
