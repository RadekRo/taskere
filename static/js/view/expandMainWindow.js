import { showBoardsList } from "./boardList.js";

export function expandMainWindow(parentElement, options) {

    if (options.boards) {
        showBoardsList(parentElement);
    }
    
    if (options.tasks) {
        showTasksList(parentElement)
    }

}