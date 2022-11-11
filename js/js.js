import { init } from "./game.js";
let board, inititilize;
inititilize = new init();
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
            if ((i + j) % 2 == 0) {
                board[i][j].style.background = "grey";
            }
            else {
                board[i][j].style.background = "white";
            }
            pos++;
        }
    }
}
function initBoard() {
    colorCells();
    let pos = 0;
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            let image = document.createElement("img");
            let a = inititilize.chessBoard[i][j];
            if (a != "") {
                image.src = "pieces/" + a + ".svg";
                console.log(i+" "+j);
                // document.querySelector("#board > div:nth-child("+i+") > div:nth-child("+j+")").appendChild(image);
                board[i][j].appendChild(image);
                pos++;
            }
        }
    }
}
function setCellClickAction() {
    document.getElementById("board").onclick = e => {
        colorCells();
        if (e.target.className == 'col') {
            e.target.style.background = "rgb(0, 0, 0, 0.8)";
        }
        console.log(e.target);  // to get the element
        console.log(e.target.tagName);  // to get the element tag name alone
    }
}
function glowCells(movesArray, currentPos) {
    colorCells();
    for (let i = 0; i < movesArray.length; i++) {
        // for (let j = 0; j < 2; j++) {
        a = currentPos[0] + movesArray[i][0];
        b = currentPos[1] + movesArray[i][1];
        // console.log(movesArray[i][0] +" "+ movesArray[i][1] +" "+i +" "+a+" "+b+ " "+currentPos[0]+" "+currentPos[1]);
        board[a][b].style.background = "blue";
        // }
    }
}