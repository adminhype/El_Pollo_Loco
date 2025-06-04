//#region statusbar
class BottleBar extends DrawableObject {

    //#region attribute
    IMAGES = ImageHub.statusbarBottle.blue;
    percentage = 100;
    x = 40; // coordinates
    y = 40;
    width = 200;
    height = 60;
    //#endregion

    //#region constructor
    constructor() {
        super(); // initialize superclass 
        this.loadImages(this.IMAGES);

        this.setPercentage(100); // 10=% img > path
    }
    //#endregion

    //#region method percent-logic and img selection
    setPercentage(percentage) { // use func outside with setPercenatage(50);
        this.percentage = percentage; // > between 0 and 5
        let path = this.IMAGES[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }
    resolveImageIndex() {
        if (this.percentage == 100) {
            return 5;
        } else if (this.percentage > 80) {
            return 4;
        } else if (this.percentage > 60) {
            return 3;
        } else if (this.percentage > 40) {
            return 2;
        } else if (this.percentage > 20) {
            return 1;
        } else {
            return 0;
        }
    }
    //#endregion

}
//#endregion

