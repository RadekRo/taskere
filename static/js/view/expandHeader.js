export function expandHeader(parentElement, options) {
    
    if (options.logo) {
        parentElement.appendChild(createLogo());
    }

    if (options.loginButton) {
        console.log('login button allowed!');
        createLogInButton();
    }
    
    if (options.signInButton) {
        console.log('signIn button allowed!');
        createSignInButton();
    }
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
    const   logButton = document.createElement('button');
            logButton.textContent = 'Login';
            logButton.className = 'btn btn-sm btn-warning text-dark me-1 text-bold'

    const currentDiv = document.getElementById("div");
    document.body.insertBefore(logButton, currentDiv);
    console.log('Login button function created!')
}

function createSignInButton () { 
    const   signButton = document.createElement('button');
            signButton.textContent = 'Sign in';
            signButton.className = 'btn btn-sm btn-info text-dark me-1 text-bold'

    const currentDiv = document.getElementById("div");
    document.body.insertBefore(signButton, currentDiv);

    console.log('SignIn button function created!')
}
