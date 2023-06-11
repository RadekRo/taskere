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
    console.log('Login button function created!')
}

function createSignInButton () {
    console.log('SignIn button function created!')
}
