export class game {
    constructor() {
        this.chessBoard = [["rookb", "knightb", "bishopb", "queenb", "kingb", "bishopb", "knightb", "rookb"],
        ["pawnb", "pawnb", "pawnb", "pawnb", "pawnb", "pawnb", "pawnb", "pawnb"],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["pawnw", "pawnw", "pawnw", "pawnw", "pawnw", "pawnw", "pawnw", "pawnw"],
        ["rookw", "knightw", "bishopw", "queenw", "kingw", "bishopw", "knightw", "rookw"]];
    }
    getInBoundaryMoves(pieceMoves, currentPosition) {
        let moves = [];
        for (let j = 0; j < pieceMoves.length; j++) {
            for (let i = 0; i < pieceMoves[j].length; i++) {
                let a = currentPosition[0] + pieceMoves[j][i][0];
                let b = currentPosition[1] + pieceMoves[j][i][1];
                if (!(a > 7) && !(a < 0) && !(b > 7) && !(b < 0)) {
                    let l = this.chessBoard[a][b].length;
                    let arr = new Array();
                    arr.push(a, b);
                    if (l > 0) {
                        let currentPosPiece = this.chessBoard[currentPosition[0]][currentPosition[1]];
                        let len = currentPosPiece.length;
                        if (currentPosPiece.charAt(len - 1) != this.chessBoard[a][b].charAt(l - 1))
                            moves.push(arr);
                        break;
                    }
                    moves.push(arr);
                }
            }
        }
        return moves;
    }
    getKingMoves(currentPosition) {
        let currentPosPiece = this.chessBoard[currentPosition[0]][currentPosition[1]];
        if (currentPosPiece != "kingw" && currentPosPiece != "kingb") { return []; }
        let KingMoves = [[[1, 1]], [[1, 0]], [[1, -1]], [[0, 1]], [[0, -1]], [[-1, 1]], [[-1, 0]], [[-1, -1]]];
        let moves = this.getInBoundaryMoves(KingMoves, currentPosition);
        return moves;
    }
    getBishopMoves(currentPosition) {
        let currentPosPiece = this.chessBoard[currentPosition[0]][currentPosition[1]];
        if (currentPosPiece != "bishopw" && currentPosPiece != "bishopb") { return []; }
        let bishopMoves = [[[1, 1], [2, 2], [3, 3], [4, 4], [5, 5], [6, 6], [7, 7]],
        [[-1, -1], [-2, -2], [-3, -3], [-4, -4], [-5, -5], [-6, -6], [-7, -7]],
        [[-1, 1], [-2, 2], [-3, 3], [-4, 4], [-5, 5], [-6, 6], [-7, 7]],
        [[1, -1], [2, -2], [3, -3], [4, -4], [5, -5], [6, -6], [7, -7]]];
        let moves = [];
        moves = (this.getInBoundaryMoves(bishopMoves, currentPosition));
        return moves;
    }
    getKnightMoves(currentPosition) {
        let currentPosPiece = this.chessBoard[currentPosition[0]][currentPosition[1]];
        if (currentPosPiece != "knightw" && currentPosPiece != "knightb") { return []; }
        let knightMoves = [[[2, 1]], [[1, 2]], [[1, -2]], [[2, -1]], [[-2, 1]], [[-1, 2]], [[-1, -2]], [[-2, -1]]];
        let moves = this.getInBoundaryMoves(knightMoves, currentPosition);
        return moves;
    }
    getRookMoves(currentPosition) {
        let currentPosPiece = this.chessBoard[currentPosition[0]][currentPosition[1]];
        if (currentPosPiece != "rookw" && currentPosPiece != "rookb") { return []; }
        let rookMoves = [[[0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6], [0, 7]],
        [[0, -1], [0, -2], [0, -3], [0, -4], [0, -5], [0, -6], [0, -7]],
        [[1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0]],
        [[-1, 0], [-2, 0], [-3, 0], [-4, 0], [-5, 0], [-6, 0], [-7, 0]]];
        let moves = this.getInBoundaryMoves(rookMoves, currentPosition);
        return moves;
    }
    getQueenMoves(currentPosition) {
        let currentPosPiece = this.chessBoard[currentPosition[0]][currentPosition[1]];
        if (currentPosPiece != "queenw" && currentPosPiece != "queenb") { return []; }
        let queenMoves = [[[1, 1], [2, 2], [3, 3], [4, 4], [5, 5], [6, 6], [7, 7]],
        [[-1, -1], [-2, -2], [-3, -3], [-4, -4], [-5, -5], [-6, -6], [-7, -7]],
        [[-1, 1], [-2, 2], [-3, 3], [-4, 4], [-5, 5], [-6, 6], [-7, 7]],
        [[1, -1], [2, -2], [3, -3], [4, -4], [5, -5], [6, -6], [7, -7]],
        [[0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6], [0, 7]],
        [[0, -1], [0, -2], [0, -3], [0, -4], [0, -5], [0, -6], [0, -7]],
        [[1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0]],
        [[-1, 0], [-2, 0], [-3, 0], [-4, 0], [-5, 0], [-6, 0], [-7, 0]]];
        let moves = this.getInBoundaryMoves(queenMoves, currentPosition);
        return moves;
    }
    getPawnMoves(currentPosition) {
        let currentPosPiece = this.chessBoard[currentPosition[0]][currentPosition[1]];
        if (currentPosPiece != "pawnw" && currentPosPiece != "pawnb") { return []; }
        let pawnMoves = [[[1, 0]]];
        let pawnMoves1 = [[[-1, 0]]];
        let moves, pMoves;
        if (currentPosPiece.charAt(currentPosPiece.length - 1) == "b") {
            pMoves = pawnMoves;
        }
        else {
            pMoves = pawnMoves1;
        }
        if (currentPosition[0] == 1) {
            pMoves[0].push([2, 0]);
        }
        if (currentPosition[0] == 6) {
            pMoves[0].push([-2, 0]);
        }
        moves = this.getInBoundaryMoves(pMoves, currentPosition);
        return moves;
    }
    getPossibleMoves(currentPos) {
        let row = currentPos[0];
        let col = currentPos[1];
        let currentPosPiece = this.chessBoard[row][col];
        let l = currentPosPiece.length;
        let currentPiece = currentPosPiece.substring(0, l - 1);
        switch (currentPiece) {
            case "king":
                return this.getKingMoves([row, col]);
            case "queen":
                return this.getQueenMoves([row, col]);
            case "bishop":
                return this.getBishopMoves([row, col]);
            case "knight":
                return this.getKnightMoves([row, col]);
            case "rook":
                return this.getRookMoves([row, col]);
            case "pawn":
                return this.getPawnMoves([row, col]);
        }
        return [];
    }

    movePiece(currentPosition, destination) {
        let possibleMoves = this.getPossibleMoves(currentPosition);
        let flag = false;
        let arr;
        for (let i = 0; i < possibleMoves.length; i++) {
            arr = possibleMoves[i];
            if (arr[0] == destination[0] && arr[1] == destination[1]) { flag = true; break; }
        }
        if (flag) {
            this.chessBoard[destination[0]][destination[1]] = this.chessBoard[currentPosition[0]][currentPosition[1]];
            this.chessBoard[currentPosition[0]][currentPosition[1]] = "";
        }
    }

}