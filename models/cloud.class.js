//#region Klasse für Wolken
class Cloud extends MovableObject {
    //#region Wolken Attribut
    y = 20; // Wolken oben
    height = 250; // größe
    width = 500;
    speed = 0.2; // pixel (Geschwindigkeit)
    //#endregion
    //#region Wolken konstruktor
    constructor() {
        super().loadImage('img/5_background/layers/4_clouds/1.png'); //Wolken

        this.x = Math.random() * 500; // Zufällige Startposition
        this.animate();
    }
    //#endregion

    //#region Wolken bewegen Methode
    animate() {
        this.moveLeft();
    }
    //#endregion
}
//#endregion