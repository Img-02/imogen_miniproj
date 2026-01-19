
let board = [["","",""],
            ["","",""],
            ["","",""]];

let currentPlayer = "O"
let gameActive = true;
let score = 0;

//for n&c game need
//*start game function 
//*select user type function (x or o)
//*check for winning combos


//all div cells are selected 
const cells = document.querySelectorAll(".cell");

//.innerText sets HTML content of element 
function place(currentCell) {
    //if (gameActive == true)
      currentCell.innerText = currentPlayer; //add text for each play 
      console.log(currentCell)
      const currentCell = document.getElementByClass("cell");
      
    if (currentPlayer == "O"){ 
        currentPlayer = "X"; //change O to X
        alert("Pass the computer to Player 2");
      }
      
      else {
        currentPlayer = "O"; //continues with O player which is default 
        alert("Pass the computer to Player 1");
        }
    }

function checkBoard(board, currentPlayer){
    //had to look these up lol
    const winConditions = [
       [0, 1, 2], [3, 4, 5], [6, 7, 8], // horizontal
       [0, 3, 6], [1, 4, 7], [2, 5, 8], // vertical
       [0, 4, 8], [2, 4, 6] // diagonal
    ];

    for(let row = 0; row < board.length; row++)
        if (
        //horizontalwin
        //vertical win
        //diagonal win
}



function startGame(){
    //add a button to start game
    //check if gameActive set to true, change if not
    //load board ? 
}

