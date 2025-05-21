//#region Klasse für Gegner
class Chicken extends MovableObject {

    //#region Attribute Chicken
    y = 380; // Vertikale Position > Gegner steht auf dem Boden
    height = 50; // img > kleiner
    width = 50;
    IMAGES_WALK = [
        `img/3_enemies_chicken/chicken_normal/1_walk/1_w.png`,
        `img/3_enemies_chicken/chicken_normal/1_walk/2_w.png`,
        `img/3_enemies_chicken/chicken_normal/1_walk/3_w.png`

    ];
    //#endregion

    //#region Konstruktor 
    constructor() {
        super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png'); //Charakter
        this.loadImages(this.IMAGES_WALK); //LoadImage muss übergeben werden 
        this.x = 200 + Math.random() * 500; // Zufällige Startposition
        this.speed = 0.2 + Math.random() * 0.25; // random geschwindigkeit
        this.animate();
    }
    //#endregion

    //#region Chicken Animieren Methode
    //Chicken animieren
    animate() {
        this.moveLeft();

        setInterval(() => { // Endloschleife z.B alle 100ms > Charakter Bewegung
            let i = this.currentImage % this.IMAGES_WALK.length; //modulo % > index nicht größer als Array > Bilder durchlaufen ohne manuell auf 0 zusetzen
            let path = this.IMAGES_WALK[i]; //Pfad aus dem Array
            this.img = this.imageCache[path]; // Greift auf loadImages() > bild ändert sich
            this.currentImage++; // iterieren +1 > neues bild
        }, 100);
    }
    //#endregion
}
//#endregion