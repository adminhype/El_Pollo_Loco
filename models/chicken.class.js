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

        this.animationCounter = 0;
        this.animationSpeed = 8;
    }
    //#endregion

    //#region Chicken Animation
    moveStep = () => {
        // this.x -= this.speed;
    }
    animateStep = () => {
        this.animationCounter++;
        if (this.animationCounter % this.animationSpeed === 0) {
            this.playAnimation(this.IMAGES_WALK);
        }
    }
}
//#endregion

//#endregion<<<