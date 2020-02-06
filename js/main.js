/*------Constants------*/

/*------Variables (state)------*/
let playerOne = 1;
let board;
let winner;

// Variables might include (board/turn/winner)

/*------Cached Element References------*/

// You might choose to put your game status here

/*------Event Listeners------*/
document.querySelector('.board').addEventListener('click', mouse)
// This is where you should put the event listener
// for a mouse-click

/*------Functions------*/
function mouse(evt) {
    let square = document.getElementById(evt.target.id)
console.log(square);
let id = (evt.target.id);
id = parseInt(id[2]);
board[id] = 4;
console.log(board);
//if..else statement blow
if (playerOne === 1) {
    square.innerHTML = 'A';
    playerOne = -1;

} else{
    square.innerHTML = 'B';
    playerOne = 1;
} 
}

function init(){
    board = [null, null, null, null, null, null, null, null, null];
    turn = 1;
    winner = null;

}
init();
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
var confettiSettings = { target: 'my-canvas' };
var confetti = new ConfettiGenerator(confettiSettings);
confetti.render();