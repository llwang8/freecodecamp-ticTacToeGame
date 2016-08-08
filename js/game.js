//

function Player(){
    symbol: "",
    win: false
    move: function(){
        canvas.addEventListener('mousemove', function(evt) {
            var mousePos = getMousePos(evt);

            var cellNum = board.getCellNum(mousePos.x, mousePos.y));
            updateBoard(cellNum);

            if (checkWin){
                player.win = true;
            }

        }, false);
        computerTurn = !computerTurn;
    }
}

function Computer(){
    symbol: "",
    win: false,
    move: function(){
        var coord;
        //get Empty Cell
        var emptyCells = board.emptyCells;
    //strategies to get the optimal move
        var cellNum;  //index of cell of computer move starting 0


        updateBoard(cellNum);
        if (checkWin){
            computer.win = true;
        }
        computerTurn = !computerTurn;
    }
}

function updateBoard(sym, cellNum){
     //update cells arr
        board.cell[cellNum] = sym;
        //update emptyCell;
        board.updateEmptyCells(cellNum);
        //get coord, drawSymbol();
        coord = board.coordinates[cellNum];
        board.drawSymbol(computer.symbol,coord[0], coord[1]);
}

function checkWin(){
    var winLine = 0;
    if (board.cells[0] === board.cells[1] === board.cells[2]) {winLine = 1;}
    if (board.cells[3] === board.cells[4] === board.cells[5]) {winLine = 2;}
    if (board.cells[6] === board.cells[7] === board.cells[8]) {winLine = 3;}
    if (board.cells[0] === board.cells[3] === board.cells[6]) {winLine = 4;}
    if (board.cells[1] === board.cells[4] === board.cells[7]) {winLine = 5;}
    if (board.cells[2] === board.cells[5] === board.cells[8]) {winLine = 6;}
    if (board.cells[0] === board.cells[4] === board.cells[8]) {winLine = 7;}
    if (board.cells[2] === board.cells[4] === board.cells[6]) {winLine = 8;}
    if (winLine){
        board.winLine = winLine;
    }
    return winLine;
}

function play(){
  while(!player.win && !computer.win && Board.emptyCells.length > 0) {
    if (computer.turn) {
        computer.move();
    }

    if (!computer.win){
        player.move();
    }

  }

}

function hint(msg){
    $('.msg').text(msg);
    //add animation to make msg disappear after 2s
}

function dealResult(sym){
    //draw animated line if "X" or "O" win
    if (player.win || computer.win){
        board.drawLine(board.winLine);
        //player.win ? hint("You Won!") : hint("Computer Won!");
    }
    //hint("Draw!");

    //reset grid, variables
    board.init();
    board.drawGrid();
    player.win = false;
    computer.win = false;
    play();
}
