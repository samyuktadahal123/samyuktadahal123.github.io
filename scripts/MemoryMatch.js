// Memory Match Game
// Beginner version using arrow functions

let map = [];
let tile1 = null;
let tile2 = null;

// shuffle helper function
const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
};

// load the map with shuffled pairs
const loadMap = (rows = 4, cols = 4) => {
    let pairs = (rows * cols) / 2;
    let numbers = [];

    // make pairs of numbers
    for (let i = 1; i <= pairs; i++) {
        numbers.push(i);
        numbers.push(i);
    }

    numbers = shuffle(numbers); // shuffle numbers

    // fill 2D array
    map = [];
    let index = 0;
    for (let r = 0; r < rows; r++) {
        map[r] = [];
        for (let c = 0; c < cols; c++) {
            map[r][c] = numbers[index];
            index++;
        }
    }
};

// make the board table
const makeBoard = (rows = 4, cols = 4) => {
    let output = "<table>";
    for (let r = 0; r < rows; r++) {
        output += "<tr>";
        for (let c = 0; c < cols; c++) {
            output += "<td><button class='tile' id='" + r + "_" + c + 
                      "' onclick='process(" + r + "," + c + ")'></button></td>";
        }
        output += "</tr>";
    }
    output += "</table>";

    document.getElementById("gameBoard").innerHTML = output;
};

// reset board and reload everything
const resetBoard = () => {
    tile1 = null;
    tile2 = null;
    loadMap();
    makeBoard();
};

// process player clicking a tile
const process = (row = 0, col = 0) => {
    let clicked = document.getElementById(row + "_" + col);

    // ignore if tile already open
    if (clicked.innerHTML !== "") return;

    // show number
    clicked.innerHTML = map[row][col];

    if (!tile1) {
        tile1 = clicked;
    } else if (!tile2) {
        tile2 = clicked;
        setTimeout(checkMatch, 800); // wait then check
    }
};

// check if both tiles match
const checkMatch = () => {
    if (tile1.innerHTML == tile2.innerHTML) {
        tile1.style.visibility = "hidden";
        tile2.style.visibility = "hidden";
    } else {
        tile1.innerHTML = "";
        tile2.innerHTML = "";
    }

    tile1 = null;
    tile2 = null;
};

// start when page loads
window.onload = () => {
    resetBoard();
};
