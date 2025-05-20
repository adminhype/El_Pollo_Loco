//#region Klasse für Hintergrund-Objekte
class BackgroundObject extends MovableObject {
    //bild größe
    width = 720;
    height = 480;

    constructor(imagePath, x) {
        super().loadImage(imagePath); //Methode > Elternklasse > Bild laden
        //Position
        this.x = x; // horizontal
        this.y = 480 - this.height; // veritkal
    }
}
//#endregion