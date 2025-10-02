//#region Initialize global game variables
let canvas;
let world;
let keyboard = new Keyboard();
const worlds = [];
//#endregion

//#region Get and store DOM elements (canvas).
function init() {
    canvas = document.getElementById('canvas');
    console.log("warte auf game start");
}
function startGame(screenID, buttonID) {
    canvas = document.getElementById("canvas");
    resetGameState();
    if (worlds.length === 0) {
        worlds.push(new World(canvas, keyboard));
    }
    makeScreenInvisible(screenID, buttonID);
}

function resetGameState() {
    if (worlds.length === 1) {
        worlds.splice(0, 1, new World(canvas, keyboard));
    }
}
function makeScreenInvisible(screenID, buttonGroupID) {
    const screenRef = document.getElementById(screenID);
    const buttonGroupRef = document.getElementById(buttonGroupID);

    screenRef.classList.add("d-none");
    screenRef.classList.remove("d-flex");
    buttonGroupRef.classList.add("d-none");
    buttonGroupRef.classList.remove("d-flex");
}

function showStartScreen(screenID, buttonGroupID) {
    makeScreenInvisible(screenID, buttonGroupID);

    document.getElementById("start").classList.remove("d-none");
    document.getElementById("start").classList.add("d-flex");

    document.getElementById("start-buttons").classList.remove("d-none");
    document.getElementById("start-buttons").classList.add("d-flex");
}
//#endregion
//#region Register keyboard events for gameplay.
document.addEventListener('keydown', (e) => {

    if (e.keyCode == 39) { // 39 is key →
        keyboard.RIGHT = true;
    }
    if (e.keyCode == 37) { // 37 is key ←
        keyboard.LEFT = true;
    }
    if (e.keyCode == 38) { // 38 is key ↑
        keyboard.UP = true;
    }
    if (e.keyCode == 40) { // 40 is key ↓
        keyboard.DOWN = true;
    }
    if (e.keyCode == 32) { // 32 is key space
        keyboard.SPACE = true;
    }
    if (e.keyCode == 70) { // 70 is key F
        keyboard.F = true;
    }
});

document.addEventListener('keyup', (e) => {
    if (e.keyCode == 39) { // 39 is key →
        keyboard.RIGHT = false;
    }
    if (e.keyCode == 37) { // 37 is key ←
        keyboard.LEFT = false;
    }
    if (e.keyCode == 38) { // 38 is key ↑
        keyboard.UP = false;

    } if (e.keyCode == 40) { // 40 is key ↓
        keyboard.DOWN = false;

    } if (e.keyCode == 32) { // 32 is key space
        keyboard.SPACE = false;
    }
    if (e.keyCode == 70) { // 70 is key F
        keyboard.F = false;
    }
});
//#endregion