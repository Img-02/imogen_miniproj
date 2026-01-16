
let board = ["","","","","","","","","",];
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
function place(play) {
    //if (gameActive == true)
      play.innerText = currentPlayer; //add text for each play 
      if (currentPlayer == "O"){ 
        currentPlayer = "X"; //change O to X
        alert("Pass the computer to Player 2");
      }
      else {
        currentPlayer = "O"; //continues with O player which is default 
        alert("Pass the computer to Player 1");
        }
    }

function checkBoard(){
    //had to look these up lol
    const winConditions = [
       [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
       [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
       [0, 4, 8], [2, 4, 6] // Diagonals
    ];

    for(let y = 0; y < winConditions.length; )

}

function restartGame(){
    //button to wipe board set all to blank
    
}

function startGame(){
    //add a button to start game
    //check if gameActive set to true, change if not
    //load board ? 
}

