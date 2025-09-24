//#region Boss-Enemy
class Endboss extends MovableObject {
    //#region attributes
    height = 400;
    width = 250;
    y = 50;

    offset = {
        top: 60,
        right: 30,
        bottom: 30,
        left: 30
    };

    IMAGES_WALK = ImageHub.enemieBossChicken.walk;
    IMAGES_DEAD = ImageHub.enemieBossChicken.dead;
    //#endregion

    //#region constructor
    constructor() {
        super().loadImage(this.IMAGES_WALK[0]);
        this.loadImages(this.IMAGES_WALK);
        this.loadImages(this.IMAGES_DEAD);
        this.x = 3000;


        this.animationCounter = 0;
        this.animationSpeed = 15;

        this.isDead = false;
        this.deadFrameIndex = 0;
    }
    //#endregion
    //#region Endboss-Animation
    moveStep = () => {
        if (!this.isDead) {
            // this.x -= this.speed;
        }
    }
    animateStep = () => {
        this.animationCounter++;

        if (this.isDead) {
            if (this.animationCounter % this.animationSpeed === 0 && this.deadFrameIndex < this.IMAGES_DEAD.length) {
                this.img = this.imageCache[this.IMAGES_DEAD[this.deadFrameIndex]];
                this.deadFrameIndex++;
            }

            if (this.deadFrameIndex >= this.IMAGES_DEAD.length) {
                this.markedForDeletion = true;
            }
        }
    }

    die = () => {
        this.isDead = true;
        this.speed = 0;
        this.animationCounter = 0;
    }
    //#endregion
}
//#endregion