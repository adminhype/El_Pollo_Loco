//#region Klasse für Bewegbare Objekte
class MovableObject {
    x = 120; //Startposition<
    y = 280; //Startposition<
    img; // Bildobjekt, das später geladen wird 
    height = 150;
    width = 100;

    loadImage(path) {
        this.img = new Image(); // Neues Bildobjekt
        this.img.src = path;  // Bildpfad setzen > Canvas darstellung
    }
    moveRight() {
        console.log('Moving-right');

    }
    moveLeft() {

    }
}
//#endregion