//#region 
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
        this.animate();
    }
    //#endregion
    //#region method
    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_WALK)
        }, 1000 / 10);
    }
    //#endregion
}
//#endregion