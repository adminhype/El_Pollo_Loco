//#region level 1
class Level {

    //#region attribute
    // enemies;
    // clouds;
    // backgroundObjects;
    // salsaBottles;
    // coins;
    level_end_x = 2200;
    //#endregion
    //#region Objects
    enemies = [ // Gegner
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new ChickenSmall(),
        new ChickenSmall(),
        new ChickenSmall(),
        new Endboss()
    ];
    clouds = [
        new Cloud(),
        new Cloud(),
        new Cloud(),
        new Cloud(),
        new Cloud(),
        new Cloud(),
        new Cloud(),
        new Cloud(),
        new Cloud(),
        new Cloud(),
    ];
    backgroundObjects = [ // Hintergründe nach reihenfolge
        new BackgroundObject('img/5_background/layers/air.png', -719),// bild und koordinaten
        new BackgroundObject('img/5_background/layers/3_third_layer/2.png', -719),// ↓
        new BackgroundObject('img/5_background/layers/2_second_layer/2.png', -719),//↓
        new BackgroundObject('img/5_background/layers/1_first_layer/2.png', -719),// ←


        new BackgroundObject('img/5_background/layers/air.png', 0),// bild und koordinaten
        new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 0),// ↓
        new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 0),//↓
        new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 0),// ←
        new BackgroundObject('img/5_background/layers/air.png', 719),// bild und koordinaten
        new BackgroundObject('img/5_background/layers/3_third_layer/2.png', 719),// ↓
        new BackgroundObject('img/5_background/layers/2_second_layer/2.png', 719),//↓
        new BackgroundObject('img/5_background/layers/1_first_layer/2.png', 719),// ←

        new BackgroundObject('img/5_background/layers/air.png', 719 * 2),// bild und koordinaten
        new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 719 * 2),// ↓
        new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 719 * 2),//↓
        new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 719 * 2),// ←
        new BackgroundObject('img/5_background/layers/air.png', 719 * 3), // bild und koordinaten
        new BackgroundObject('img/5_background/layers/3_third_layer/2.png', 719 * 3),// ↓
        new BackgroundObject('img/5_background/layers/2_second_layer/2.png', 719 * 3),//↓
        new BackgroundObject('img/5_background/layers/1_first_layer/2.png', 719 * 3),// ←
    ];
    salsaBottles = [];
    coins = [];

    constructor(bottleCount = 5, coinCount = 5) {
        for (let i = 0; i < bottleCount; i++) {
            this.salsaBottles.push(new Bottle());
        }

        for (let i = 0; i < coinCount; i++) {
            this.coins.push(new Coin());
        }
    }
    //#endregion
}
//#endregion