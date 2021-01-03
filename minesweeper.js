document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = {
  cells: [
    { row: 0, col: 0, isMine: true, isMarked: false, hidden: true },
    { row: 0, col: 1, isMine: true, isMarked: false, hidden: true },
    { row: 0, col: 2, isMine: false, isMarked: false, hidden: true },
    { row: 1, col: 0, isMine: true, isMarked: false, hidden: true },
    { row: 1, col: 1, isMine: false, isMarked: false, hidden: true },
    { row: 1, col: 2, isMine: true, isMarked: false, hidden: true },
    { row: 2, col: 0, isMine: false, isMarked: false, hidden: true },
    { row: 2, col: 1, isMine: true, isMarked: false, hidden: true },
    { row: 2, col: 2, isMine: false, isMarked: false, hidden: true }
  ]

}

function startGame() {
  // Don't remove this function call: it makes the game work!
  // create a for loop, loops through contents of board.cells which is an array
  for (i = 0; i < board.cells.length; i++) {
    board.cells[i].surroundingMines = countSurroundingMines(board.cells[i]);
  }
  // the loop's only job is to call countSurroundingMines once for each cell in board.cells, passing each cell as an argument
  // assign the result of countSurroundingMines to a property on each cell objectt . New property should be called surroundingMines
  document.addEventListener('click', checkForWin)
  document.addEventListener('contextmenu', checkForWin)
  lib.initBoard()
}




// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin() {
  // should loop through all of board.cells
  // for each cell check to see if both .isMine and .isMarked true. If any mine still exists that isn't marked, the player hasn't won yet 
  // and you can return to exit out of function.
  // if every mine marked, but other cells still with hidden property true, return out of function
  // if both above criteria pass, player has won and displayMessage function should be called
 var bombBombs = 0;
 var notBombs =0;

 for (var i = 0; i < board.cells.length; i++) {
  if (board.cells[i].isMine == true && board.cells[i].isMarked == true) {
    bombBombs++;
  } else if (board.cells[i].isMine == false && board.cells[i].hidden == false) {
    notBombs++;
  }
}
if (bombBombs + notBombs == board.cells.length) {
  lib.displayMessage('You win!');
}
}





// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines(cell) {
  var surrounding = lib.getSurroundingCells(cell.row, cell.col);
  let count = 0;
  surrounding.forEach((cell) => {
    if (cell.isMine === true) {
      count++;
    }
  })
  return count;
  // for (var i = 0; i < 9; i++){
  //if cell.isMine === true;{
  // count++
  //}
  //}
}

