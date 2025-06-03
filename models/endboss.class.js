//#region Boss-Enemy
class Endboss extends MovableObject {
    //#region attributes
    height = 400;
    width = 250;
    y = 50;
    IMAGES_WALK = ImageHub.enemieBossChicken.walk;
    //#endregion

    //#region constructor
    constructor() {
        super().loadImage(this.IMAGES_WALK[0]);
        this.loadImages(this.IMAGES_WALK);
        this.x = 2500;
        IntervalHub.startInterval(this.chickenEndbossAnimation, 1000 / 10)
    }
    //#endregion
    //#region Endboss-Animation
    chickenEndbossAnimation = () => {
        this.playAnimation(this.IMAGES_WALK)
    };

    //#endregion
}
//#endregion