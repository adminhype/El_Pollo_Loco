//#region Klasse für Bewegbare Objekte
class MovableObject extends DrawableObject {

    //#region Attribute movable objects
    speed = 0.2;
    otherDirection = false;
    speedY = 0;
    acceleration = 2.6;
    energy = 100;
    lastHit = 0;
    //#endregion

    //#region Methoden

    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25);
    };
    isAboveGround() {
        return this.y < 180;
    }

    //character.isCollding(chicken);
    isColliding(moObject) {
        return this.x + this.width > moObject.x &&
            this.y + this.height > moObject.y &&
            this.x < moObject.x &&
            this.y < moObject.y + moObject.height;
    }

    hit() { // refector hit > energy > not under zero
        this.energy -= 2;
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
        this.speedY = 30;
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