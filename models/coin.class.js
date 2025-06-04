//#region Coin
class Coin extends MovableObject {
    //#endregion
    //#region Coin Attribute
    y = 180;
    width = 100;
    height = 100;

    offset = {
        top: 30,
        right: 30,
        bottom: 30,
        left: 30
    };

    IMAGES = ImageHub.coin.coins;
    //#endregion
    //#region Constructor
    constructor() {
        super();
        this.loadImage('img/8_coin/coin_1.png');
        this.x = 200 + Math.random() * 2000;
        this.speed = 0.2 + Math.random() * 0.25;
    }
    //#endregion
}
//#endregion