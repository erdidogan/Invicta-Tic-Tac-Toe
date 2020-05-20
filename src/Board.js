export default class Board {
    constructor() {
        this.cells = [
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ];
        this.playerX = 'x';
        this.playerO = 'o';
    }

    isGameOver() {
        return this.getPossibleMoves().length === 0 || this.playerHas3InARow(this.playerX) ||
            this.playerHas3InARow(this.playerO);
    }

    clone() {
        let clone = new Board();

        for (let i=0; i<3; i++) {
            for (let j=0; j<3; j++) {
                clone.cells[i][j] = this.cells[i][j];
            }
        }

        return clone;
    }

    getPossibleMoves() {
        let moves = [];
        for (let i=0; i<3; i++) {
            for (let j=0; j<3; j++) {
                if (this.cells[i][j] === '') {
                    moves.push({x: i, y: j});
                }
            }
        }
        return moves;
    }

    doMove(x, y, player) {
        if (this.cells[x][y] !== '') {
            return false;
        }

        this.cells[x][y] = player;
        return true;
    }

    getScore() {
        let score = 0;
        if (this.playerHas3InARow('x')) {
            score -= 100;
        }
        if (this.playerHas3InARow('o')) {
            score += 100;
        }
        return score;
    }

    playerHas3InARow(player) {
        // Horizontal rows
        for (let i=0; i<3; i++) {
            if (this.cells[0][i] === player && this.cells[1][i] === player && this.cells[2][i] === player) {
                return true;
            }
        }

        // Vertical rows
        for (let i=0; i<3; i++) {
            if (this.cells[i][0] === player && this.cells[i][1] === player && this.cells[i][2] === player) {
                return true;
            }
        }

        // Diagonals
        if (this.cells[0][0] === player && this.cells[1][1] === player && this.cells[2][2] === player) {
            return true;
        }
        return this.cells[0][2] === player && this.cells[1][1] === player && this.cells[2][0] === player;


    }

    toString() {
        let str = "";
        for (let i=0; i<3; i++) {
            for (let j=0; j<3; j++) {
                str += this.cells[j][i];
            }
            str += "\n"
        }
        return str;
    }
}
