import { showBoardsList } from "./boardsList.js";

export function expandMainWindow(parentElement, options) {

    if (options.boards) {
        showBoardsList(parentElement);
    }

}