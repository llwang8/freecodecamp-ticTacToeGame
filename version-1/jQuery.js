// freeCodeCamp - Tic Tac Toe Game

$(document).ready(function(){
    //global variables
    var player = [];
    var computer = [];
    var computerTurn = false;
    var win = false;
    var playerSymbol;

    //ask for player symbol input
    playerSymbol = prompt("X XOR O?");
    computerSymbol = (playerSymbol === "X") ? "O" : "X";

    if (computerTurn) {
        computerMove();
    }else {
        hint("Your move first");
    }

    $('.square').click(function(){
        $('.square').text(playerSymbol);
        player.push($('.square').attr('id');
        checkWin();
        computerMove();
    });
    //computer move
    function computerMove(){
        if ()
    }

    //check if there is a win
    function hint(msg){

    }

    function checkWin(){
        if (player.length < 3 && computer.length < 3){
            return;
        }else if (player.length === 3) {
            allMatch(player));
        }else {
            allMatch(computer);
        }
    }

    function allMatch(arr){
        if (arr[0].charAt(0) === arr[1].charAt(0) && arr[0].charAt(0) === arr[2].charAt(0)){
            displayWin()    // row match
        }
        if (arr[0].charAt(1) === arr[1].charAt(1) && arr[0].charAt(1) === arr[2].charAt(1)){
            displayWin() // col match
        }
        if (arr.indexOf("22") >= 0){
            if (arr.indexOf('13') >= 0  && arr.indexOf('31') >= 0){
                displayWin(); // diagnol match
            }else if (arr.indexOf('11') && arr.indexOf('33') >= 0) {
               displayWin(); // diagnol match
            }

        }

    }

    function displayWin(){
        //draw animated line

        //reset grid, check who moves first

        computerTurn != computerTurn;
    }



});





