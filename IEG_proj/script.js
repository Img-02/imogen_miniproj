
let board = ["","","","","","","","","",]

let currentPlayer = "O"
let gameActive = true;
let score = 0;

//for n&c game need
//*start game function 
//*select user type function (x or o)
//*check for winning combos


//all div cells are selected
const cells = document.querySelectorAll(".cell")

//.innerText sets HTML content of element 
function currentPlay(cell) {
     //add text for each play 
        if (cell.innerText === ""){ //if cell is blank
            cell.innerText = currentPlayer; //text is current player
            
            let cellid = cell.id;
            board[cellid] = currentPlayer;
            console.log(board)

            currentPlayer = currentPlayer === "O" ? "X" : "O"; //if o then x else o

            document.getElementById("playerDiv").innerText = `its Player ${currentPlayer}'s turn`; //inform players
      
            console.log(`Clicked cell is ${cellid} text: ${cell.textContent}`); //debugging
            //now im getting cell id and the text played, stored as cellid and cell.textcontent
            checkWin();
        }
    }

cells.forEach(cell => { //for each cell add a click event and pass this to the play function
    cell.addEventListener("click", () => currentPlay(cell));
});


function checkWin(){
    const winConditions = [
       [0, 1, 2], [3, 4, 5], [6, 7, 8], // horizontal
       [0, 3, 6], [1, 4, 7], [2, 5, 8], // vertical
       [0, 4, 8], [2, 4, 6] // diagonal
                            ]

        for (i = 0; i < board.length; i++){
            
        }

}
    //had to look these up lol
    
