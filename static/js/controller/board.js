import { Board, boardContainer } from "../view/boardList.js";
import { mainWindow } from "../view/htmlBuilder.js";

export const getAllBoards = () => {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "/get_boards", true);
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        var response = JSON.parse(xhr.responseText);
        createBoards(response, boardContainer, mainWindow);
      }
    };
    xhr.send();

  }

const createBoards = (boards_list, boardContainer, mainWindow) => {
    let new_board;
    for (const board of boards_list) {
      new_board = new Board(board['id'], board['title']);
      console.log
      new_board.appendTo(boardContainer)
    }
    mainWindow.appendChild(boardContainer)
}