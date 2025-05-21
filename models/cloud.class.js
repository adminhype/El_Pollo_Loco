//#region Klasse für Wolken
class Cloud extends MovableObject {
    //#region Wolken Attribut
    y = 20; // Wolken oben
    height = 250; // größe
    width = 500;
    //#endregion
    //#region Wolken konstruktor
    constructor() {
        super().loadImage('img/5_background/layers/4_clouds/1.png'); //Wolken

        this.x = 0 + Math.random() * 500; // Zufällige Startposition
        this.animate();
    }
    //#endregion

    //#region Wolken bewegen Methode
    animate() {
        setInterval(() => {
            this.x += 0.2;
        }, 1000 / 60)
    }
    //#endregion
}
//#endregion