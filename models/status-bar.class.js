//#region class statusbar
class StatusBar extends DrawableObject {

    //#region attribute
    IMAGES = ImageHub.statusbarCoin.green;
    percentage = 100;
    //#endregion

    //#region constructor
    constructor() {
        super(); // initialize superclass 
        this.loadImages(this.IMAGES);
        this.x = 40; // coordinates
        this.y = 0;
        this.width = 200;
        this.height = 60;
        this.setPercentage(100); // 10=% img > path
    }
    //#endregion

    //#region methoden
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

