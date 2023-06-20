import { createHeader, createMainWindow, createTitleWindow, addEventListeners } from "./view/htmlBuilder.js";

createHeader();
createTitleWindow('Public boards', true);
createMainWindow();
addEventListeners();
