import { showBoardsList } from "./boardList.js";

export function expandMainWindow(parentElement, options) {

    if (options.boards) {
        showBoardsList(parentElement);
    }

}