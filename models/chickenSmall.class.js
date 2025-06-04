//#region Small Cicken
class ChickenSmall extends MovableObject {

    //#region Attribute Small-Chicken
    y = 380;
    height = 50;
    width = 50;
    IMAGES_WALK = ImageHub.chickenSmall.walk;
    //#endregion

    //#region constructor 
    constructor() {
        super().loadImage('img/3_enemies_chicken/chicken_small/1_walk/1_w.png');
        this.loadImages(this.IMAGES_WALK);
        this.x = 200 + Math.random() * 2000;
        this.speed = 0.2 + Math.random() * 0.25;
        IntervalHub.startInterval(this.moveLeft, 1000 / 60);
        IntervalHub.startInterval(this.chickenSmallAnimation, 1000 / 10);
    }
    //#endregion

    //#region Small-Chicken Animation
    moveLeft = () => {
        this.x -= this.speed;
    }
    chickenSmallAnimation = () => {
        this.playAnimation(this.IMAGES_WALK)

    }
}
//#endregion

//#endregion