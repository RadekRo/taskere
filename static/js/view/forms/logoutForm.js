import { expandHeader } from "../../view/expanders/expandHeader.js";

export const logout = () => {
    let header = document.querySelector('header');
                    header.innerHTML = "";
                    expandHeader(header, { 'logo': true, 
                    'signInButton': true, 
                    'loginButton': true,
                    'logoutButton': false,
                    'showUserButton': false });
}