export function expandHeader(parentElement, options) {
    
    if (options.logo) {
        parentElement.appendChild(createLogo());
    }

    const   buttonsContainer = document.createElement('div');
            buttonsContainer.className = "d-flex align-items-center"

    if (options.loginButton) {
        console.log('login button allowed!');
        buttonsContainer.appendChild(createLogInButton());
    }
    
    if (options.signInButton) {
        console.log('signIn button allowed!');
        buttonsContainer.appendChild(createSignInButton());
    }

    parentElement.appendChild(buttonsContainer);
}

function createLogo() {

    let logoLink = document.createElement('a');
        logoLink.href = '/';

    let logoImg = document.createElement('img');
        logoImg.src = './static/images/logo.jpg';
        logoImg.alt = 'taskere application logo';

    let logo = document.createElement('div');
        logo.className = 'navbar';
        logo.style.padding = '0px';
        logo.appendChild(logoImg);
        logo.replaceChild(logoLink, logoImg);
        logoLink.appendChild(logoImg);
    
    return logo

}

function createLogInButton () {
    const   logButton = document.createElement('buttonSign');
            logButton.textContent = 'Login';
            logButton.className = 'btn btn-sm btn-warning text-dark me-1 text-bold'
            logButton.id = 'login_button'

    const currentDiv = document.getElementById("div");
    document.body.insertBefore(logButton, currentDiv);
    console.log('Login button function created!')
    return logButton;
}

function createSignInButton () { 
    const   signButton = document.createElement('buttonLog');
            signButton.textContent = 'Sign in';
            signButton.className = 'btn btn-sm btn-info text-dark me-1 text-bold';
            signButton.id = 'signin_button';
            signButton.onclick = "show_signin()";


    const currentDiv = document.getElementById("div");
    document.body.insertBefore(signButton, currentDiv);

    console.log('SignIn button function created!')
    return signButton;
}
