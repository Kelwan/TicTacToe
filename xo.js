

let grid = [
   ["| |", "| |", "| |"],
   ["| |", "| |", "| |"],
   ["| |", "| |", "| |"]
           ];

let newGrid = grid;

console.log(newGrid);
const board = new Board();

let turn = 0;
let xo = undefined;

Board.prototype.builder = ((chunk) => {
  if (turn == 0){
    xo = "X";
    turn ++;
  }
  else if (turn == 1){
    xo = "O";
    turn --;
  }

  var int = parseInt(chunk[1]);
  //console.log(int);


// Changing the input chunk to a string, and checked to see which cell to alter.
  chunk = chunk.toString().split("");

  if(chunk[0] == "A"){
    board.place(0, chunk);
  }
  else if(chunk[0] == "B"){
    board.place(1, chunk);
  }
  else if (chunk[0] == "C"){
    board.place(2, chunk);
  }
  else {
    console.log("input not recognized, please try again");
    player.turnWaste();
  }


  player.victoryCheck();

});


Board.prototype.place =((num, chunk) => {
  let piece = "|" + xo + "|";

  for(i = 0; i <= 3; i++){
    if(chunk[1] == i){
      if(newGrid[num][i - 1] == "| |"){ // Check to see if a piece is already there
        newGrid[num][i - 1] = piece;
      }
      else {
        console.log("taken!");
        player.turnWaste();
      }
    }
  }
console.log(newGrid);
});

function Board(){}


let player = new Player();

function Player(){

  console.log("take some input");
  process.stdin.setEncoding('utf8');

  process.stdin.on('readable', () => {
    const chunk = process.stdin.read();
    if (chunk !== null) {
      board.builder(chunk);
    }
  });
}

Player.prototype.victoryCheck = (() => {

// Horizontal
  for(i = 0; i < 3; i++){
    if(newGrid[i][0] == "|X|" && newGrid[i][0+1] =="|X|" && newGrid[i][0+2] == "|X|"){
      console.log("Winner!");
    }
    else if(newGrid[i][0] == "|O|" && newGrid[i][0 + 1] =="|O|" && newGrid[i][0 + 2] == "|O|"){
      console.log("Winner!");
    }
  }

// Vertical
  for(i = 0; i < 3; i++){
    if(newGrid[0][i] == "|X|" && newGrid[0+1][i] =="|X|" && newGrid[0+2][i] == "|X|"){
      console.log("Winner!");
    }
    else if (newGrid[0][i] == "|O|" && newGrid[0+1][i] =="|O|" && newGrid[0+2][i] == "|O|"){
      console.log("Winner");
    }
  }

// Diagonal

 if(newGrid[0][0] == "|X|" && newGrid[1][1] == "|X|" && newGrid[2][2] == "|X|"){
   console.log("Winner!");
 }
 else if(newGrid[0][0] == "|O|" && newGrid[1][1] == "|O|" && newGrid[2][2] == "|O|"){
   console.log("Winner!");
 }

 if (newGrid[0][2] == "|O|" && newGrid[1][1] == "|O|" && newGrid[2][0] == "|O|"){
   console.log("Winner!");
 }
 else if(newGrid[0][2] == "|X|" && newGrid[1][1] == "|X|" && newGrid[2][0] == "|X|"){
   console.log("Winner!");
 }

});

Player.prototype.turnWaste = ((val) => {
  if(turn == 0)
    turn ++;
  else if (turn == 1)
    turn --;
});
