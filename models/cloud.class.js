//#region Clouds
class Cloud extends MovableObject {
    //#region Cloud Attribute
    y = 20;
    height = 250;
    width = 500;
    speed = 0.2;
    //#endregion

    //#region Constructor
    constructor() {
        super().loadImage('img/5_background/layers/4_clouds/1.png');
        this.x = Math.random() * 2000;
        IntervalHub.startInterval(this.animate, 1000 / 60);
    }
    //#endregion

    //#region Cloud Animation
    animate = () => {
        this.moveLeft();
        this.x -= 0.1;
    }
    //#endregion
}
//#endregion