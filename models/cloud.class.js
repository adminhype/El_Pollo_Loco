//#region Klasse für Wolken
class Cloud extends MovableObject {
    //#region Wolken Attribut
    y = 20;
    height = 250;
    width = 500;
    speed = 0.2;
    //#endregion
    //#region Wolken konstruktor
    constructor() {
        super().loadImage('img/5_background/layers/4_clouds/1.png');
        this.x = Math.random() * 500;
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