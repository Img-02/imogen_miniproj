
let board = [["","",""],
             ["","","",],
             ["","","",]]

const winConditions = [
       [0, 1, 2], [3, 4, 5], [6, 7, 8], // horizontal
       [0, 3, 6], [1, 4, 7], [2, 5, 8], // vertical
       [0, 4, 8], [2, 4, 6] // diagonal
                            ]


let currentPlayer = "O"
let gameActive = true
let score = 0

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
            cell.innerText = currentPlayer //text is current player

            let cellid = cell.id
            board[cellid] = currentPlayer
            console.log(board)
            checkWin()

            currentPlayer = currentPlayer === "O" ? "X" : "O" //if o then x else o
            document.getElementById("playerDiv").innerText = `its Player ${currentPlayer}'s turn` //inform players
      
            console.log(`Clicked cell is ${cellid}, text: ${cell.textContent}`) 
            
            
            //debugging
            //now im getting cell id and the text played, stored as cellid and cell.textcontent
            
        }
    }

cells.forEach(cell => { //for each cell add a click event and pass this to the play function
    cell.addEventListener("click", () => currentPlay(cell))
})



function checkWin(){
    for (i of winConditions) {
        let val1 = cells[i[0]].innerText
        let val2 = cells[i[1]].innerText
        let val3 = cells[i[2]].innerText
        
         if (val1 !== "" && val2 !=="" && val3 !=="" 
            && val1 === val2 && val2 === val3 ){
                if (currentPlayer === "O"){
                    console.log(`Winner is O`)
                    playDiv.innerText = `Winner! Player ${currentPlayer} has won! `
                } else if (currentPlayer === "x") {
                     console.log(`Winner is x`)
                     playDiv.innerText = `Winner! Player ${currentPlayer} has won! `
                }
            }
        }
}               
                


    
        
                            


  
