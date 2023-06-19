export function expandHeader(parentElement, options) {
    
    if (options.logo) {
        parentElement.appendChild(createLogo());
    }

    const   buttonsContainer = document.createElement('div');
            buttonsContainer.className = "d-flex align-items-center p-2"

    if (options.loginButton) {
        buttonsContainer.appendChild(createLogInButton());
    }
    
    if (options.signInButton) {
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
            logButton.innerHTML = '<i class="fa-solid fa-right-to-bracket"></i> Login';
            logButton.className = 'btn btn-sm btn-warning text-dark me-3 text-bold'
            logButton.id = 'login_button'

    const currentDiv = document.getElementById("div");
    document.body.insertBefore(logButton, currentDiv);
    return logButton;
}

function createSignInButton () { 
    const   signButton = document.createElement('buttonLog');
            signButton.innerHTML = '<i class="fa-solid fa-pen-to-square"></i> Sign in';
            signButton.className = 'btn btn-sm btn-info text-dark me-1 text-bold';
            signButton.id = 'signin_button';

    const currentDiv = document.getElementById("div");
    document.body.insertBefore(signButton, currentDiv);
    return signButton;
}
