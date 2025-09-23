//#region Small Cicken
class ChickenSmall extends MovableObject {
    //#region Attribute Small-Chicken
    y = 380;
    height = 50;
    width = 50;

    offset = {
        top: 15,
        right: 10,
        bottom: 20,
        left: 10
    };

    IMAGES_WALK = ImageHub.chickenSmall.walk;
    //#endregion

    //#region constructor 
    constructor() {
        super().loadImage('img/3_enemies_chicken/chicken_small/1_walk/1_w.png');
        this.loadImages(this.IMAGES_WALK);
        this.x = 200 + Math.random() * 2000;
        this.speed = 0.2 + Math.random() * 0.25;

        this.animationCounter = 0;
        this.animationSpeed = 10;
    }
    //#endregion

    //#region Small-Chicken Animation
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
//#endregion