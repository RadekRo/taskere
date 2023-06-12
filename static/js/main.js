import { createHeader, createMainWindow, createTitleWindow, addEventListeners } from "./view/htmlBuilder.js"; //, createMain, createNewBoardForm, mainWindow, titleWindow, createTitle } from "./view/htmlBuilder.js";
import { show_login } from "./view/login.js";
import { show_signin } from "./view/signin.js";

createHeader();
createTitleWindow('Public boards', true);
createMainWindow();
addEventListeners();
// show_login();
show_signin();