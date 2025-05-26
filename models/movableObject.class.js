//#region Klasse für Bewegbare Objekte
class MovableObject {

    //#region Attribute
    x = 120;
    y = 280;
    img;
    height = 150;
    width = 100;
    imageCache = {};
    currentImage = 0;
    speed = 0.2;
    otherDirection = false;
    speedY = 0;
    acceleration = 2.6;
    energy = 100;
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
    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }
    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    }
    drawFrame(ctx) {
        if (this instanceof Character || this instanceof Chicken) {
            ctx.beginPath();
            ctx.lineWidth = '2';
            ctx.strokeStyle = 'yellow';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
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
        }
    }
    isDead() { // object death ? 
        return this.energy == 0; // energy 0 > death 
    }
    /**
     * 
     * @param {Array} arr ['img./img1.png','img./img2.png','....']
     */
    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
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
        let i = this.currentImage % this.IMAGES_WALK.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }
    //#endregion
}
//#endregion