export class moves {
    constructor() {
        this.king = [[1, 1], [1, 0], [1, -1], [0, 1], [0, -1], [-1, 1], [-1, 0], [-1, -1]];
        this.bishop = [[1, 1], [2, 2], [3, 3], [4, 4], [5, 5], [6, 6], [7, 7],
        [-1, -1], [-2, -2], [-3, -3], [-4, -4], [-5, -5], [-6, -6], [-7, -7],
        [-1, 1], [-2, 2], [-3, 3], [-4, 4], [-5, 5], [-6, 6], [-7, 7],
        [1, -1], [2, -2], [3, -3], [4, -4], [5, -5], [6, -6], [7, -7]];
        this.knight = [[2, 1], [1, 2], [1, -2], [2, -1], [-2, 1], [-1, 2], [-1, -2], [-2, -1]];
        this.rook = [[0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6], [0, 7],
        [0, -1], [0, -2], [0, -3], [0, -4], [0, -5], [0, -6], [0, -7],
        [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0],
        [-1, 0], [-2, 0], [-3, 0], [-4, 0], [-5, 0], [-6, 0], [-7, 0]];
        this.queen = this.bishop.concat(this.rook);
        this.pawn = [[1, 0]];
        this.pawn1 = [[-1, 0]];
    }
}
export class init {
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
}   