//#region Movable-Objects
class MovableObject extends DrawableObject {
    //#region Movable-Object Attributes
    speed = 0.2;
    otherDirection = false;
    speedY = 0;
    acceleration = 2.3;
    energy = 1000;
    lastHit = 0;

    offset = {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    };
    rX; // x coodinate hitbox
    rY; // y coordinate hitbox
    rW; // width hitbox
    rH; // height hitbox
    //#endregion

    //#region  Constructor
    constructor() {
        super();
    }
    //#endregion

    //#region Methods
    getRealFrame() {
        this.rX = this.x + this.offset.left;
        this.rY = this.y + this.offset.top;
        this.rW = this.width - this.offset.left - this.offset.right;
        this.rH = this.height - this.offset.top - this.offset.bottom;
    }
    //character.isCollding(chicken);
    isColliding(moObject) {
        this.getRealFrame();
        moObject.getRealFrame();
        return this.rX + this.rW > moObject.rX &&
            this.rY + this.rH > moObject.rY &&
            this.rX < moObject.rX + moObject.rW &&
            this.rY < moObject.rY + moObject.rH;
    }
    applyGravity() {
        if (this.isAboveGround() || this.speedY > 0) {
            this.y -= this.speedY;
            this.speedY -= this.acceleration;
        }
    }

    isAboveGround() {
        if (this instanceof ThrowableObject) { // throwable object should alwys fall 
            return true;
        } else {
            return this.y < 180;
        }
    }
    hit() { // refector hit > energy > not under zero
        this.energy -= 20;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime(); // save time in numbers
        }
    }
    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit // diff in ms
        timepassed = timepassed / 1000; // diff in sec
        // console.log((timepassed));
        return timepassed < 0.5; // hit under x sec
    }
    isDead() { // object death ? 
        return this.energy == 0; // energy 0 > death 
    }
    moveRight() {
        this.x += this.speed;
    }
    moveLeft() {
        this.x -= this.speed;
    }
    jump() {
        this.speedY = 18;
    }
    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }
    //#endregion
}
//#endregion