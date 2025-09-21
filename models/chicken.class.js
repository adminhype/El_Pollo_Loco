//#region Chicken
class Chicken extends MovableObject {
    //#region Attribute Chicken
    y = 360;
    height = 70;
    width = 70;

    offset = {
        top: 10,
        right: 5,
        bottom: 10,
        left: 5
    };

    IMAGES_WALK = ImageHub.chickenNormal.walk;

    //#endregion

    //#region Constructor
    constructor() {
        super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.loadImages(this.IMAGES_WALK);
        this.x = 200 + Math.random() * 2000;
        this.speed = 0.2 + Math.random() * 0.25;
        IntervalHub.startInterval(this.moveLeft, 1000 / 60);
        IntervalHub.startInterval(this.chickenAnimation, 1000 / 10);
    }
    //#endregion

    //#region Chicken Animation
    moveLeft = () => {
        this.x -= this.speed;
    }
    chickenAnimation = () => {
        this.playAnimation(this.IMAGES_WALK)

    }
}
//#endregion

//#endregion<<<