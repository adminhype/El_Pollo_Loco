//#region Klasse für Wolken
class Cloud extends MovableObject {

    y = 20; // Wolken oben
    height = 250; // größe
    width = 500;


    constructor() {
        super().loadImage('img/5_background/layers/4_clouds/1.png'); //Wolken

        this.x = 0 + Math.random() * 500; // Zufällige Startposition
    }
}
//#endregion