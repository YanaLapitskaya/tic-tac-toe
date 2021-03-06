class TicTacToe {
    constructor() {
        this.curPl='x';
        this.field=[
            [null,null,null],
            [null,null,null],
            [null,null,null]
        ]
        this.winner=null;
        this.isWin=false;
    }

    getCurrentPlayerSymbol() {
        return this.curPl;
    }

    nextTurn(rowIndex, columnIndex) {
        if(!this.field[rowIndex][columnIndex]){
            this.field[rowIndex][columnIndex]=this.curPl;
            (this.curPl==='x')?this.curPl='o':this.curPl='x';
        }
    }

    isFinished() {
        this.isWin=((this.field[0][0]==this.field[0][1])&&(this.field[0][1]==this.field[0][2])&&this.field[0][2]!=null)||
                    ((this.field[1][0]==this.field[1][1])&&(this.field[1][1]==this.field[1][2])&&this.field[1][2]!=null)||
                    ((this.field[2][0]==this.field[2][1])&&(this.field[2][1]==this.field[2][2])&&this.field[2][2]!=null)||
                    ((this.field[0][0]==this.field[1][0])&&(this.field[1][0]==this.field[2][0])&&this.field[2][0]!=null)||
                    ((this.field[0][1]==this.field[1][1])&&(this.field[1][1]==this.field[2][1])&&this.field[2][1]!=null)||
                    ((this.field[0][2]==this.field[1][2])&&(this.field[1][2]==this.field[2][2])&&this.field[2][2]!=null)||
                    ((this.field[0][0]==this.field[1][1])&&(this.field[1][1]==this.field[2][2])&&this.field[2][2]!=null)||
                    ((this.field[0][2]==this.field[1][1])&&(this.field[1][1]==this.field[2][0])&&this.field[2][0]!=null);
        return this.isWin||this.noMoreTurns();

    }

    getWinner() {//does not work
        if(this.isFinished()&&this.isWin)
            return this.curPl==='x'?'o':'x';
        return null;
    }

    noMoreTurns() {
        for(let el of this.field){
            if(el.includes(null)) return false; 
        }
        return true;
    }

    isDraw() {
        return this.noMoreTurns()&&!this.getWinner();
    }

    getFieldValue(rowIndex, colIndex) {
        return this.field[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
