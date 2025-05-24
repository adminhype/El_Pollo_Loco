//#region 
class Endboss extends MovableObject {
    //#region attributes
    height = 400;
    width = 250;
    y = 50;
    IMAGES_WALK = [
        `img/4_enemie_boss_chicken/2_alert/G5.png`,
        `img/4_enemie_boss_chicken/2_alert/G6.png`,
        `img/4_enemie_boss_chicken/2_alert/G7.png`,
        `img/4_enemie_boss_chicken/2_alert/G8.png`,
        `img/4_enemie_boss_chicken/2_alert/G9.png`,
        `img/4_enemie_boss_chicken/2_alert/G10.png`,
        `img/4_enemie_boss_chicken/2_alert/G11.png`,
        `img/4_enemie_boss_chicken/2_alert/G12.png`
    ];
    //#endregion

    //#region constructor
    constructor() {
        super().loadImage(this.IMAGES_WALK[0]); // first images from array
        this.loadImages(this.IMAGES_WALK); // load all
        this.x = 2500;
        this.animate();
    }
    //#endregion
    //#region method
    animate() {
        setInterval(() => { // Endloschleife z.B alle 100ms > Charakter Bewegung
            this.playAnimation(this.IMAGES_WALK)
        }, 100);
    }
    //#endregion
}
//#endregion