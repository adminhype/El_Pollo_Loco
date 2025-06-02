//#region Bottle
class Bottle extends DrawableObject {

    IMAGES = ImageHub.icons.salsaBottle;

    constructor() {
        super();
        this.loadImage('img/6_salsa_bottle/salsa_bottle.png');
        this.x = 200 + Math.random() * 2000;
        this.speed = 0.2 + Math.random() * 0.25;
        this.y = 380;
        this.width = 50;
        this.height = 60;
    }


}
//#endregion

