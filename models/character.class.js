//#region Klasse für Charakter
class Character extends MovableObject {
    //#region Attribut
    speed = 10; // char movement speed
    IMAGES_WALK = [
        `img/2_character_pepe/2_walk/W-21.png`,
        `img/2_character_pepe/2_walk/W-22.png`,
        `img/2_character_pepe/2_walk/W-23.png`,
        `img/2_character_pepe/2_walk/W-24.png`,
        `img/2_character_pepe/2_walk/W-25.png`,
        `img/2_character_pepe/2_walk/W-26.png`
    ]
    world;
    //#endregion

    //#region Konstruktor Character
    constructor() {
        super().loadImage('img/2_character_pepe/2_walk/W-21.png'); //Charakter
        this.loadImages(this.IMAGES_WALK);
        this.animate();
    }
    //#endregion

    //#region Character Animieren Methode
    //Character animieren
    animate() {

        setInterval(() => {
            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) { // test moving right x smaller then 0
                this.x += this.speed;
                this.otherDirection = false;
            }
            console.log(this.world.level.level_end_x);

            if (this.world.keyboard.LEFT && this.x > 0) { // stop moving left
                this.x -= this.speed;
                this.otherDirection = true;
            }
            this.world.camera_x = -this.x + 100; // + 100 changed start position char
        }, 1000 / 60);

        setInterval(() => { // Endloschleife z.B alle 100ms > Charakter Bewegung

            if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) { // left or right > true > shows animation
                //walk animation
                this.playAnimation(this.IMAGES_WALK)
            }
        }, 100);
    }
    jump() {

    }
    //#endregion
}
//#endregion