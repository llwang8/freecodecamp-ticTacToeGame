
function Board(data){
    if (data){
        this.canvas = data.canvas;
        this.ctx = data.ctx;
    }
    this.cells = [];
    this.emptyCells = [];
    this.winLine = "";
    this.coordinates = [
                    [50,75], [225, 75], [375, 75],
                    [50,225], [225, 225], [375, 225],
                    [50,375], [225, 375], [375, 375]
                 ];

    init: function(){
        this.cells = [];
        this.emptyCells = [];
        this.winLine = "";
        for (var i = 0; i < 9; i++){
            this.cell.push("E");
            this.emptyCells.push(i);
        }

    }

}

Board.prototype.drawGrid = function(){
        //var ctx = document.getElementById("ctx").getContext("2d");
        this.ctx.fillStyle = "#000066";
        this.ctx.fillRect(0, 0, 450, 450);

        this.ctx.lineWidth = 3;
        this.ctx.strokeStyle = '#cc9900';
        this.ctx.strokeRect(0, 0, 450, 450);

        this.ctx.beginPath();
        this.ctx.moveTo(25, 150);
        this.ctx.lineTo(425, 150);
        this.ctx.stroke();

        this.ctx.beginPath();
        this.ctx.moveTo(25, 300);
        this.ctx.lineTo(425, 300);
        this.ctx.stroke();

        this.ctx.beginPath();
        this.ctx.moveTo(150, 25);
        this.ctx.lineTo(150, 425);
        this.ctx.stroke();

        this.ctx.beginPath();
        this.ctx.moveTo(300, 25);
        this.ctx.lineTo(300, 425);
        this.ctx.stroke();
}

Board.prototype.drawLine = function(lineNum){
        //var ctx = document.getElementById("ctx").getContext("2d");
        switch(lineNum){
            //horizontal line
            case "1":
                this.ctx.lineWidth = 1;
                this.ctx.strokeStyle = '#d3d3d3';
                this.ctx.beginPath();
                this.ctx.moveTo(75, 75);
                this.ctx.lineTo(375, 75);
                this.ctx.stroke();
                break;
            case "2":
                this.ctx.strokeStyle = '#d3d3d3';
                this.ctx.beginPath();
                this.ctx.moveTo(75, 225);
                this.ctx.lineTo(375, 225);
                this.ctx.stroke();
                break;
            case "3":
                this.ctx.strokeStyle = '#d3d3d3';
                this.ctx.beginPath();
                this.ctx.moveTo(75, 375);
                this.ctx.lineTo(375, 375);
                this.ctx.stroke();
                break;
            //vertical line
            case "4":
                this.ctx.strokeStyle = '#d3d3d3';
                this.ctx.beginPath();
                this.ctx.moveTo(75, 75);
                this.ctx.lineTo(75, 375);
                this.ctx.stroke();
                break;
            case "5":
                this.ctx.strokeStyle = '#d3d3d3';
                this.ctx.beginPath();
                this.ctx.moveTo(225, 75);
                this.ctx.lineTo(225, 375);
                this.ctx.stroke();
                break;
            case "6":
                this.ctx.strokeStyle = '#d3d3d3';
                this.ctx.beginPath();
                this.ctx.moveTo(375, 75);
                this.ctx.lineTo(375, 375);
                this.ctx.stroke();
                break;
            //diagnal lines
            case  "7":
                this.ctx.strokeStyle = '#d3d3d3';
                this.ctx.beginPath();
                this.ctx.moveTo(75, 75);
                this.ctx.lineTo(375, 375);
                this.ctx.stroke();
                break;
            case "8":
                this.ctx.strokeStyle = '#d3d3d3';
                this.ctx.beginPath();
                this.ctx.moveTo(375, 75);
                this.ctx.lineTo(75, 375);
                this.ctx.stroke();
                break;
        }
}

Board.prototype.drawSymbol = function(sym, x, y){
        //var ctx = document.getElementById("ctx").getContext("2d");
        this.ctx.font = "18px sans-serif";
        this.ctx.fillText = (sym, x, y);
}

Board.prototype.getMousePos = function(evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}
Board.prototype.getCellNum = function(x, y){
    var row, col, cell;
    if (x <= 150){
        col = 1;
    }else (x <=300){
        col = 2;
    }else {
        col = 3;
    }
    if (y <= 150){
        row = 1;
    }else (y <=300){
        row = 2;
    }else {
        row = 3;
    }
    if (row === 1 && col === 1){cell = 0;}
    if (row === 1 && col === 2){cell = 1;}
    if (row === 1 && col === 3){cell = 2;}
    if (row === 2 && col === 1){cell = 3;}
    if (row === 2 && col === 2){cell = 4;}
    if (row === 2 && col === 3){cell = 5;}
    if (row === 3 && col === 1){cell = 6;}
    if (row === 3 && col === 2){cell = 7;}
    if (row === 3 && col === 3){cell = 8;}
    //this.board.cell[cell] = sym;
    return cell;
}

Board.prototype.updateEmptyCells = function(elem){
    /*
    this.emptyCells = [];
    for (var i = 0; i < this.cells.length; i++){
        if (this.cells[i] === "E"){
            this.emptyCells.push(i);
        }
    }
    */
    this.emptyCells.splice(this.emptyCells.indexOf(elem), 1);
}


