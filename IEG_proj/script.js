//messing around with on click and alert event 
let cell = document.getElementsByClassName("cell");

if (cell.length > 0){
cell[0].addEventListener("click", () => {
    console.log("testing");
    alert('div clicked (classbased)')
    
});
}
//for n&c game need
// *start game function 
// *select panel function (on click event?)
//*select user type function (x or o)
//*check for winning combos

let player1 = "X";
let player2 = "O"
let gameOver = false;
let score = 0;

//put winning combos here 

function selectPanel(){
    
}
