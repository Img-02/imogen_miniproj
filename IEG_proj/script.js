
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


const cells = document.querySelectorAll(".cell")
let text = document.getElementById("playerDiv")
console.log(`Text acquired: ${text}`)


function currentPlay(cell) {
    if (!gameActive || cell.innerText !== "") return;

            cell.innerText = currentPlayer //text is current player

            let cellid = cell.id
            board[cellid] = currentPlayer
            console.log(board)
            checkWin()
            

            if (gameActive) {
            currentPlayer = currentPlayer === "O" ? "X" : "O" //if o then x else o
            text.innerText = `its Player ${currentPlayer}'s turn` //inform players
      
            console.log(`Clicked cell is ${cellid}, text: ${cell.textContent}`) 
            }
            
            
            //debugging
            //now im getting cell id and the text played, stored as cellid and cell.textcontent
            
        }
    


cells.forEach(cell => { //for each cell add a click event and pass this to the play function
    cell.addEventListener("click", () => currentPlay(cell))
})

function checkWin(){
    for (i of winConditions) {
        let val1 = cells[i[0]].innerText
        let val2 = cells[i[1]].innerText
        let val3 = cells[i[2]].innerText
        
         if (val1 !=="" && val2 !=="" && val3 !=="" 
            && val1 === val2 && val2 === val3 ){
                text.innerText = `Congratulations! Winner is Player ${currentPlayer}!`
                gameActive = false 
                return;
        // } else if (val1 !=="" && val2 !=="" && val3 !=="" 
        //     && val1 !== val2 && val2 !== val3) 
        //     text.innerText = `It's a Draw`
        //     gameActive = false
        //     return;
        }
    }}
                
      
            


// function checkDraw(){
//     for (cell in cells){
//         let val1 = cell.innerText
//         let val2 = cell.innerText
//         let val3 = cell.innerText 
//         if(val1 !=="" && val2 !=="" && val3 !=="" 
//             && val1 !== val2 && val2 !== val3)
//             text.innerText = `It's a Draw`
//             gameActive = false
//             return;
//         }
//     
