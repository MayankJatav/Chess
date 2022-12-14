import { game } from "./game.js";
let board;
let gameCurrent = new game();
window.onload = function () {
    board = getBoard();
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
            let a = gameCurrent.chessBoard[i][j];
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
let source;
function setCellClickAction() {
    document.getElementById("board").onclick = e => {
        let bgColor = e.target.style.backgroundColor;
        colorCells();
        if (e.target.className == 'col') {
            let current = [e.target.row, e.target.col];
            if (bgColor == "blue") {
                gameCurrent.movePiece(source, current);
                colorCells();
            }
            else {
                source = [e.target.row, e.target.col];
                glowCells(source);
                e.target.style.backgroundColor = "rgb(0, 0, 0, 0.8)";
            }
        }
    }
}
function glowCells(currentPos) {
    let movesArray = gameCurrent.getMoves(currentPos);
    for (let i = 0; i < movesArray.length; i++) {
        board[movesArray[i][0]][movesArray[i][1]].style.backgroundColor = "blue";
    }
}
let startGameBtn = document.getElementById("startGameBtn")
startGameBtn.onclick = function startGame() {
    gameCurrent = new game();
    colorCells();
    setCellClickAction();
    startGameBtn.textContent = "Reset Game";
}