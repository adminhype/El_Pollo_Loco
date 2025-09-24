//#region Throw-Bottle
class ThrowableObject extends MovableObject {
    //#region Load-Bottle and Startposition
    constructor(x, y) {
        super().loadImage(ImageHub.bottleSplash.rotation[0]);
        this.x = x;
        this.y = y;
        this.height = 60;
        this.width = 40;

        this.loadImages(ImageHub.bottleSplash.rotation);
        this.loadImages(ImageHub.bottleSplash.splash);

        this.isBroken = false;
        this.speedY = 20;
        this.speedX = 6;
        this.acceleration = 1;
        this.animationSpeed = 4;
        this.currentFrame = 0;
        this.frameCounter = 0;
        this.markedForDeletion = false;

    }
    //#endregion
    update() {
        if (this.isBroken) return;
        this.x += this.speedX;
        this.y -= this.speedY;
        this.speedY -= this.acceleration;
        if (this.y >= 380) {
            this.breakBottle();
        }
    }

    animate() {
        if (!this.isBroken) {
            if (this.frameCounter % 4 === 0) {
                this.playAnimation(ImageHub.bottleSplash.rotation);
            }
        } else {
            if (this.currentFrame < ImageHub.bottleSplash.splash.length) {
                this.loadImage(ImageHub.bottleSplash.splash[this.currentFrame]);
                this.currentFrame++;
            }
        }
        this.frameCounter++;
    }

    breakBottle() {
        this.isBroken = true;
        this.speedY = 0;
        this.y = 380;
        this.currentFrame = 0;

        setTimeout(() => {
            this.markedForDeletion = true;
        }, 1000);
    }
}
//#endregion