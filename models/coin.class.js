class Coin extends DrawableObject {

    IMAGES = ImageHub.coin.coins;

    constructor() {
        super();
        this.loadImage('img/8_coin/coin_1.png');
        this.x = 200 + Math.random() * 2000;
        this.speed = 0.2 + Math.random() * 0.25;
        this.y = 180;
        this.width = 100;
        this.height = 100;
    }


}

