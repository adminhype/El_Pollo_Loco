//#region Klasse für Gegner
class Chicken extends MovableObject {
    y = 380; // Vertikale Position > Gegner steht auf dem Boden
    height = 50; // img > kleiner
    width = 50;
    constructor() {
        super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png'); //Charakter

        this.x = 200 + Math.random() * 500; // Zufällige Startposition
    }
}
//#endregion