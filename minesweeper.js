document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = {
    cells: [
      {row: 0, col: 0, isMine: true, isMarked: false, hidden: true}, 
      {row: 0, col: 1, isMine: true, isMarked: false, hidden: true}, 
      {row: 0, col: 2, isMine: false, isMarked: false, hidden: true}, 
      {row: 1, col: 0, isMine: true, isMarked: false, hidden: true}, 
      {row: 1, col: 1, isMine: false, isMarked: false, hidden: true}, 
      {row: 1, col: 2, isMine: true, isMarked: false, hidden: true}, 
      {row: 2, col: 0, isMine: false, isMarked: false, hidden: true}, 
      {row: 2, col: 1, isMine: true, isMarked: false, hidden: true}, 
      {row: 2, col: 2, isMine: false, isMarked: false, hidden: true}
    ]
    
}

function startGame () {
  // Don't remove this function call: it makes the game work!
  // create a for loop, loops through contents of board.cells which is an array
   for (i = 0; i < board.cells.length; i++){
    board.cells[i].surroundingMines = countSurroundingMines(board.cells[i]);
    }
  // the loop's only job is to call countSurroundingMines once for each cell in board.cells, passing each cell as an argument
  // assign the result of countSurroundingMines to a property on each cell objectt . New property should be called surroundingMines
  lib.initBoard()
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {

  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  //   lib.displayMessage('You win!')
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) {
  var surrounding = lib.getSurroundingCells(cell.row, cell.col);
  let count = 0;
  surrounding.forEach((element) => {
    if(element.isMine === true) {
      count ++;
    }
  })
    return count;
       // for (var i = 0; i < 9; i++){
        //if cell.isMine === true;{
         // count++
        //}
      //}
}

 