//#region Klasse für Charakter
class Character extends MovableObject {
    //#region Attribut
    speed = 10; // char movement speed
    IMAGES_WALK = [
        `img/2_character_pepe/2_walk/W-21.png`,
        `img/2_character_pepe/2_walk/W-22.png`,
        `img/2_character_pepe/2_walk/W-23.png`,
        `img/2_character_pepe/2_walk/W-24.png`,
        `img/2_character_pepe/2_walk/W-25.png`,
        `img/2_character_pepe/2_walk/W-26.png`
    ]
    world;
    //#endregion

    //#region Konstruktor Character
    constructor() {
        super().loadImage('img/2_character_pepe/2_walk/W-21.png'); //Charakter
        this.loadImages(this.IMAGES_WALK);
        this.animate();
    }
    //#endregion

    //#region Character Animieren Methode
    //Character animieren
    animate() {

        setInterval(() => {
            if (this.world.keyboard.RIGHT) { //char move onkeydown
                this.x += this.speed;
                this.otherDirection = false;
            }
            if (this.world.keyboard.LEFT) {
                this.x -= this.speed;
                this.otherDirection = true;
            }
            this.world.camera_x = -this.x; // camera > char > on x axies & (-this) > same char & backgroundObj
        }, 1000 / 60);

        setInterval(() => { // Endloschleife z.B alle 100ms > Charakter Bewegung

            if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) { // left or right > true > shows animation
                this.x += this.speed;

                //walk animation
                let i = this.currentImage % this.IMAGES_WALK.length; //modulo % > index nicht größer als Array > Bilder durchlaufen ohne manuell auf 0 zusetzen
                let path = this.IMAGES_WALK[i]; //Pfad aus dem Array
                this.img = this.imageCache[path]; // Greift auf loadImages() > bild ändert sich
                this.currentImage++; // iterieren +1 > neues bild
            }
        }, 100);
    }
    jump() {

    }
    //#endregion
}
//#endregion