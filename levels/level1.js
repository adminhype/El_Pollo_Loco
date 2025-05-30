//#region 
const level1 = new Level(
    [ // Gegner
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Endboss()
    ],
    [ //Wolken
        new Cloud(),
    ],
    [ // Hintergründe nach reihenfolge
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
    ]
);
//#endregion