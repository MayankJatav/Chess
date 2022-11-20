import { init, moves } from "./game.js";
let board, inititilize;
inititilize = new init();
let movesObj = new moves();
window.onload = function () {
    board = getBoard();
    setCellClickAction();
    initBoard();
}
function getBoard() {
    let cells = document.getElementsByClassName("col");
    let arr = new Array();
    let pos = 0;
    for (let i = 0; i < 8; i++) {
        let arr1 = new Array();
        for (let j = 0; j < 8; j++) {
            cells[pos].row = i;
            cells[pos].col = j;
            arr1.push(cells[pos]);
            pos++;
        }
        arr.push(arr1);
    }
    return arr;
}
function colorCells() {
    let pos = 0;
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            let a = inititilize.chessBoard[i][j];
            if ((i + j) % 2 == 0) {
                board[i][j].style.background = "grey";
            }
            else {
                board[i][j].style.background = "white";
            }
            if (a != "") {
                let imagesrc = "pieces/" + a + ".svg";
                board[i][j].style.backgroundImage = "url(" + imagesrc + ")";
                board[i][j].style.backgroundRepeat = "no-repeat";
                board[i][j].style.backgroundSize = "100%";
                pos++;
            }
            pos++;
        }
    }
}
function initBoard() {
    colorCells();
}
function setCellClickAction() {
    document.getElementById("board").onclick = e => {
        colorCells();
        if (e.target.className == 'col') {
            e.target.style.backgroundColor = "rgb(0, 0, 0, 0.8)";
            glowCells([e.target.row, e.target.col]);
        }
    }
}
function glowCells(currentPos) {
    let movesArray = movesObj.getPossibleMoves(currentPos);
    for (let i = 0; i < movesArray.length; i++) {
            board[movesArray[i][0]][movesArray[i][1]].style.backgroundColor = "blue";
    }
}