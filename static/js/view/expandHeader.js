export function expandHeader(parentElement, options) {
    
    if (options.logo) {
        parentElement.appendChild(createLogo());
    }

    if (options.login) {
        console.log('login button allowed!')
    }
    
    if (options.signin) {
        console.log('signIn button allowed!')
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

