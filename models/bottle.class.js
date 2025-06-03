//#region Bottle-Object
class Bottle extends DrawableObject {
    //#region Bottle Attributes
    IMAGES = ImageHub.icons.salsaBottle;
    //#endregion
    //#region constructor
    constructor() {
        super();
        this.loadImage('img/6_salsa_bottle/2_salsa_bottle_on_ground.png');
        this.x = 200 + Math.random() * 2000;
        this.speed = 0.2 + Math.random() * 0.25;
        this.y = 380;
        this.width = 50;
        this.height = 60;
    }
    //#endregion


}
//#endregion

