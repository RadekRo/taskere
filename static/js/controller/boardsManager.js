import { add_board } from "../view/viewport.js";

export function handleClick() {

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "/add_board", true);
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        var response = JSON.parse(xhr.responseText);
        console.log(response.message);
        add_board();
      }
    };
    xhr.send();

  }