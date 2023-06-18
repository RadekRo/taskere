import { expandHeader } from './expandHeader.js';
import { expandTitleWindow } from './expandTitleWindow.js';
import { expandMainWindow } from './expandMainWindow.js';
import * as eventListeners from '../controller/eventListeners.js';

const body = document.querySelector('body');

export function createHeader() {
     const header = document.createElement('header');
           header.className = 'd-flex justify-content-between';
     body.appendChild(header)
     expandHeader(header, { 'logo': true, 
                            'signInButton': true, 
                            'loginButton': true });
}

export function createTitleWindow(title, button) {
     const titleWindow = document.createElement('div');
           titleWindow.id = 'title_window';
           titleWindow.className = 'd-flex justify-content-between border-bottom p-2';
     body.appendChild(titleWindow)
     expandTitleWindow(titleWindow, { 'icon': true,
                                      'title': title, 
                                      'button': button });
}

export function createMainWindow() {
     const mainWindow = document.createElement('main');
           mainWindow.id = 'root';
           mainWindow.className= 'p-10';
     body.appendChild(mainWindow)
     expandMainWindow(mainWindow, { 'boards': true });
}

export function addEventListeners() {
    eventListeners.createNewBoardButtonClick();
}