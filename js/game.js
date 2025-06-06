//#region Initialize global game variables
let canvas;
let world;
let keyboard = new Keyboard();
//#endregion

//#region Get and store DOM elements (canvas).
function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    console.log('my character is', world.character);
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