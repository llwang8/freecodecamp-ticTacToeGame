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

    }

    //check if there is a win
    function checkWin(){
        if (player.length < 3 && computer.length < 3){
            return;
        }else if (player.length === 3) {
            if (allMatch(player)){
                displayWin(player);
            }
        }else {
            if (allMatch(computer)){
                displayWin(computer);
            }
        }
    }

    function allMatch(arr){

    }

    function displayWin(arr){
        //draw animated line

        //reset grid, check who moves first

    }



});





