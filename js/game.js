//#region Variablen
let canvas; // Zeichenfläche global 
let world; // Spiellogik / Objekte
let keyboard = new Keyboard(); // instanz Keyboard
//#endregion

//#region funktion über id aufrufen
function init() {
    canvas = document.getElementById('canvas'); // Element abrufen
    world = new World(canvas, keyboard); // World starten und Zeichenfläche übergeben


    console.log('my character is', world.character); // kontrolle, ob Spielfigur erstellt wurde 

}
//#endregion

// detectin arrow key press in js
// event > etwas passiert > json 

//#region
// keyboard event 
document.addEventListener('keydown', (e) => {
    if (e.keyCode == 39) { // 39 is key →
        keyboard.RIGHT = true;
    }
    if (e.keyCode == 37) { // 37 is key ←
        keyboard.LEFT = true;
    }
    if (e.keyCode == 38) { // 38 is key ↑
        keyboard.UP = true;

    } if (e.keyCode == 40) { // 40 is key ↓
        keyboard.DOWN = true;

    } if (e.keyCode == 32) { // 32 is key space
        keyboard.SPACE = true;
    }
});
//#endregion


//#region
// keyboard event 
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
});
//#endregion