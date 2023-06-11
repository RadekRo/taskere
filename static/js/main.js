import { createHeader, createMainWindow, createTitleWindow, addEventListeners } from "./view/htmlBuilder.js"; //, createMain, createNewBoardForm, mainWindow, titleWindow, createTitle } from "./view/htmlBuilder.js";

createHeader();
createTitleWindow('Public boards', true);
createMainWindow();
addEventListeners();