//#region Throw bottle class
class ThrowableObject extends MovableObject {
    //#region attributes
    //#endregion

    //#region constructor
    constructor(x, y) {
        super().loadImage(`img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png`); // loadImage defin > drawableObject
        this.x = x;
        this.y = y;
        this.height = 60;
        this.width = 40;
        this.throw();

    }
    //#endregion

    //#region method
    throw() {
        this.speedY = 30;
        this.applyGravity();
        setInterval(() => {
            this.x += 10;
        }, 1000 / 25)
    }
    //#endregion
}
//#endregion