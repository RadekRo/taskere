//import { add_board } from "../view/boardCreator.js";

// export let handleClick = () => {
//     console.log('button clicked!');
//     var xhr = new XMLHttpRequest();
//     xhr.open("GET", "/add_board", true);
//     xhr.onreadystatechange = () => {
//       if (xhr.readyState === 4 && xhr.status === 200) {
//         var response = JSON.parse(xhr.responseText);
//         console.log(response.message);
//         add_board();
//       }
//     };
//     xhr.send();

//   }

  // let boardFormHandler = document.getElementById("new_board").addEventListener("submit", function(event) {
  //   event.preventDefault(); // Prevent default form submission behavior
  
  //   // Get form data
  //   var formData = new FormData(this);
  
  //   // Send form data using AJAX or fetch API
  //   // Here's an example using fetch:
  //   fetch('/add_board', {
  //     method: 'POST',
  //     body: formData
  //   })
  //   .then(response => response.json())
  //   .then(data => {
  //     // Handle the response from the server
  //     console.log(data);
  //   })
  //   .catch(error => {
  //     // Handle any errors that occur during the request
  //     console.error(error);
  //   });
  // });