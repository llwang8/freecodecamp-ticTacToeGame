// freeCodeCamp - Tic Tac Toe Game

$(document).ready(function(){
     //global variables
    var player = new Player;
    var computer = new Computer;
    var computerTurn = false;
    var canvas = document.getElementById('ctx');
    var ctx = canvas.getContext('2d');
    var result = "";

    $('#myModal').modal('show');

    //ask for player symbol input
    $('#X').click(function(){
        player.symbol = "X"
        //console.log(playerSymbol);
        computer.symbol = "O";
    });

    $('#O').click(function(){
        player.symbol = "O"
        //alert(playerSymbol);
        computer.symbol = "X";
    });

    while(!player.win && !computer.win && Board.emptyCells.length > 0) {
        play();
    }

    if (player.win){
        result = player.symbol;
    }else if (computer.win){
        result = computer.symbol;
    }else {
        result = "Draw";
    }

    dealResult(result);

});





