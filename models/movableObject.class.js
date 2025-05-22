//#region Klasse für Bewegbare Objekte
class MovableObject {

    //#region Attribute
    x = 120; //Startposition<
    y = 280; //Startposition<
    img; // Bildobjekt, das später geladen wird 
    height = 150;
    width = 100;
    imageCache = {}; //Bilder werden zwischen gespeichert
    currentImage = 0;
    speed = 0.2;
    otherDirection = false; // reflect char
    //#endregion

    //#region Methoden
    loadImage(path) {
        this.img = new Image(); // Neues Bildobjekt
        this.img.src = path;  // Bildpfad setzen > Canvas darstellung
    }

    /**
     * 
     * @param {Array} arr ['img./img1.png','img./img2.png','....']
     */
    //imageChache
    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image(); //Bildobject
            img.src = path; // BIld wird geladen
            this.imageCache[path] = img; //Wert speichern als Schlüssel
        });
    }
    moveRight() {
        console.log('Moving-right');

    }
    moveLeft() {
        setInterval(() => {
            this.x -= this.speed;
        }, 1000 / 60)
    }
    //#endregion
}
//#endregion