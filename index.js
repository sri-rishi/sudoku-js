const board = document.getElementById("board");
const digits = document.getElementById("digits");
const errors = document.getElementById("error");

let numSelected = null;
let tileSelected = null;
let error = 0;

var boardArr = [
    "--74916-5",
    "2---6-3-9",
    "-----7-1-",
    "-586----4",
    "--3----9-",
    "--62--187",
    "9-4-7---2",
    "67-83----",
    "81--45---"
]

var solutionArr = [
    "387491625",
    "241568379",
    "569327418",
    "758619234",
    "123784596",
    "496253187",
    "934176852",
    "675832941",
    "812945763"
]

window.onload = () => {
    setGame();
}

const setGame = () => {
    // digits buttons 1-9
    for(let i = 1; i <= 9; i++) {
        const number = document.createElement("div");
        number.id = i;
        number.innerText = i;
        number.addEventListener("click", selectNumber)
        number.classList.add("numbers");
        digits.appendChild(number)
    }

    // 9 * 9 board
    for(let row = 0; row < 9; row++) {
        for(let col = 0; col < 9; col++) {
            const tile = document.createElement("div");
            tile.id = `${row}-${col}`;
            if(boardArr[row][col] !== "-" ){
                tile.innerText = boardArr[row][col];
                tile.classList.add("initial-tile")
            }
            if(row === 2 || row === 5) {
                tile.classList.add("horizontal-line")
            }
            if(col === 2 || col === 5) {
                tile.classList.add("vertical-line")
            }
            tile.addEventListener("click", selectTile);
            tile.classList.add("tile");
            board.appendChild(tile);
        }
    }
}

const selectNumber = (event) => {
    if(numSelected !== null) {
        numSelected.classList.remove("number-selected")
    }
    numSelected = event.target;
    numSelected.classList.add("number-selected");
}

const selectTile = (event) => {
    const currentTile = event.target
    if(numSelected) {
        if(currentTile.innerText !== "")  {
            return
        }

        const cords = currentTile.id.split("-");
        let row = parseInt(cords[0]);
        let col = parseInt(cords[1]);

        if(solutionArr[row][col] === numSelected.id) {
            currentTile.innerText = numSelected.id;
        }else {
            error += 1;
            errors.innerText = error;
        }
    }
}