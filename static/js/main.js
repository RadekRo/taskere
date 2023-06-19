import { createHeader, createMainWindow, createTitleWindow, addEventListeners } from "./view/htmlBuilder.js";
// temporarily added for styling login window purposes!
import { show_login } from "./view/forms/loginForm.js";

createHeader();
createTitleWindow('Public boards', true);
createMainWindow();
addEventListeners();
// temporarily added for stylin login window purposes!
show_login();