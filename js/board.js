
function Board(){
    cells: [],
    coordinates: [
                    (50,75), (225, 75), (375, 75),
                    (50,225), (225, 225), (375, 225),
                    (50,375), (225, 375), (375, 375)
                 ],
    emptyCells: [];
    windLine: "",
    init: function(){
        for (var i = 0; i < 9; i++){
            this.cell.push("E");
        }
    }

}

Board.prototype.drawGrid = function(){
        //var ctx = document.getElementById("ctx").getContext("2d");
        ctx.fillStyle = "#000066";
        ctx.fillRect(0, 0, 450, 450);

        ctx.lineWidth = 3;
        ctx.strokeStyle = '#cc9900';
        ctx.strokeRect(0, 0, 450, 450);

        ctx.beginPath();
        ctx.moveTo(25, 150);
        ctx.lineTo(425, 150);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(25, 300);
        ctx.lineTo(425, 300);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(150, 25);
        ctx.lineTo(150, 425);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(300, 25);
        ctx.lineTo(300, 425);
        ctx.stroke();
}

Board.prototype.drawLine = function(lineNum){
        //var ctx = document.getElementById("ctx").getContext("2d");
        switch(lineNum){
            //horizontal line
            case "1":
                ctx.lineWidth = 1;
                ctx.strokeStyle = '#d3d3d3';
                ctx.beginPath();
                ctx.moveTo(75, 75);
                ctx.lineTo(375, 75);
                ctx.stroke();
                break;
            case "2":
                ctx.strokeStyle = '#d3d3d3';
                ctx.beginPath();
                ctx.moveTo(75, 225);
                ctx.lineTo(375, 225);
                ctx.stroke();
                break;
            case "3":
                ctx.strokeStyle = '#d3d3d3';
                ctx.beginPath();
                ctx.moveTo(75, 375);
                ctx.lineTo(375, 375);
                ctx.stroke();
                break;
            //vertical line
            case "4":
                ctx.strokeStyle = '#d3d3d3';
                ctx.beginPath();
                ctx.moveTo(75, 75);
                ctx.lineTo(75, 375);
                ctx.stroke();
                break;
            case "5":
                ctx.strokeStyle = '#d3d3d3';
                ctx.beginPath();
                ctx.moveTo(225, 75);
                ctx.lineTo(225, 375);
                ctx.stroke();
                break;
            case "6":
                ctx.strokeStyle = '#d3d3d3';
                ctx.beginPath();
                ctx.moveTo(375, 75);
                ctx.lineTo(375, 375);
                ctx.stroke();
                break;
            //diagnal lines
            case  "7":
                ctx.strokeStyle = '#d3d3d3';
                ctx.beginPath();
                ctx.moveTo(75, 75);
                ctx.lineTo(375, 375);
                ctx.stroke();
                break;
            case "8":
                ctx.strokeStyle = '#d3d3d3';
                ctx.beginPath();
                ctx.moveTo(375, 75);
                ctx.lineTo(75, 375);
                ctx.stroke();
                break;
        }
}

Board.prototype.drawSymbol = function(sym, x, y){
        //var ctx = document.getElementById("ctx").getContext("2d");
        ctx.font = "18px sans-serif";
        ctx.fillText = (sym, x, y);
        //update Board.cell, emptyCells
        this.updateMove(x, y);
}

Board.prototype.getEmptyCells = function(){

    return arr;
}

Board.prototype.getMousePos = function(evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}
Board.prototype.updateCells = function(x, y){

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
