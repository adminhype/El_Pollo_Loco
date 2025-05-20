//#region Variablen
let canvas; // Zeichenfläche global 
let world; // Spiellogik / Objekte
//#endregion
//#region funktion über id aufrufen
function init() {
    canvas = document.getElementById('canvas'); // Element abrufen
    world = new World(canvas); // World starten und Zeichenfläche übergeben


    console.log('my character is', world.character); // kontrolle, ob Spielfigur erstellt wurde 

}
//#endregion

