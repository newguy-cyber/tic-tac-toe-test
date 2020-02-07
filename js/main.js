/*------Constants------*/

/*------Variables (state)------*/
let playerOne = 1;
let board;
let winner;
// Variables might include (board/turn/winner)

/*------Cached Element References------*/
// You might choose to put your game status here

/*------Event Listeners------*/
document.querySelector('.board').addEventListener('click', clickingbtn)
// This is where you should put the event listener
// for a mouse-click

/*------Functions------*/
function clickingbtn(evt) {
let square = document.getElementById(evt.target.id)
let id = (evt.target.id);
id = parseInt(id[2]);
//The (parseInt) function turns a string into a interger
//if..else statement blow
if (playerOne === 1) {
    square.innerHTML = 'X';
    board[id] = 1;
    isWinner();
    playerOne = -1;
} else{
    square.innerHTML = 'O';
    board[id] = -1;
    isWinner();
    playerOne = 1;
} 

}
function init(){
    board = [null, null, null, null, null, null, null, null, null];
    turn = 1;
    winner = null;
}
init();

function isWinner () {
    if (Math.abs(board[0]+board[1]+board[2] === 3) ||
        Math.abs(board[3]+board[4]+board[5] === 3) ||
        Math.abs(board[6]+board[7]+board[8] === 3) ||
        Math.abs(board[0]+board[3]+board[6] === 3) ||
        Math.abs(board[1]+board[4]+board[5] === 3) ||
        Math.abs(board[2]+board[5]+board[8] === 3) ||
        Math.abs(board[0]+board[4]+board[8] === 3) ||
        Math.abs(board[2]+board[4]+board[6] === 3)){
            document.getElementById('message').innerHTML = 'you won!';
            console.log('iswinnerrunning')
        
        }
}

// Some functions you might choose to use:

// Initialization function:
// Where you set your initial state, setting up 
// what the board will look like upon loading


// On-Click function:
// Set up what happens when one of the elements
// is clicked


// Check winner function:
// Checks the current state of the board for
// a winner and changes the state of the winner
// variable if so


// Render function:
// Displays the current state of the board
// on the page, updating the elements to reflect
// either X or O depending on whose turn it is