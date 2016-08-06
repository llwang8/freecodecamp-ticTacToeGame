//

function Player(){
    symbol: "",
    turn: "",
    win: false
}

function Computer(){
    symbol: "",
    turn: "",
    win: false,
    move: function(){
        //getEmptyCell();
        //strategies to get the optimal move
        //update emptyCell;
        //drawSymbol();
    }
}


function checkWin(){
    //find
    //update Board.winLine;
    //return true/false  //if not win, return 0
}

function hint(msg){
    $('.msg').text(msg);
    //add animation to make msg disappear after 2s
}

function dealResult(sym){
    computerTurn != computerTurn;
    //draw animated line if "X" or "O" win

    //reset grid
    play();
}


function play(){
    //resut global var except turn, canvas
    if (computer.turn) {
            computer.move();
            computer.turn = false;
        }

        //player moves
        canvas.addEventListener('mousemove', function(evt) {
            var mousePos = getMousePos(evt);
            var message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;
            drawSymbol(player.symbol, mousePos.x, mousePos.y);
        }, false);
    computerTurn = true;
    Board.updateCells();
    //check if there is a win update Player or Computer's win state
    //check who moves first
    //display move
}
