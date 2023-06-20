import { createHeader, createMainWindow, createTitleWindow, addEventListeners } from "./view/htmlBuilder.js";
import { setConstantElements } from "./constants.js";

createHeader();
createTitleWindow('Public boards', true);
createMainWindow();
addEventListeners();
setConstantElements();
