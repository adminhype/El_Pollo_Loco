//#region Klasse für Charakter
class Character extends MovableObject {
    //#region Attribut
    speed = 10;
    y = 120;
    height = 250;
    IMAGES_WALK = [
        `img/2_character_pepe/2_walk/W-21.png`,
        `img/2_character_pepe/2_walk/W-22.png`,
        `img/2_character_pepe/2_walk/W-23.png`,
        `img/2_character_pepe/2_walk/W-24.png`,
        `img/2_character_pepe/2_walk/W-25.png`,
        `img/2_character_pepe/2_walk/W-26.png`
    ];
    IMAGES_JUMP = [
        `img/2_character_pepe/3_jump/J-31.png`,
        `img/2_character_pepe/3_jump/J-32.png`,
        `img/2_character_pepe/3_jump/J-33.png`,
        `img/2_character_pepe/3_jump/J-34.png`,
        `img/2_character_pepe/3_jump/J-35.png`,
        `img/2_character_pepe/3_jump/J-36.png`,
        `img/2_character_pepe/3_jump/J-37.png`,
        `img/2_character_pepe/3_jump/J-38.png`,
        `img/2_character_pepe/3_jump/J-39.png`
    ];
    IMAGES_DEAD = [
        `img/2_character_pepe/5_dead/D-51.png`,
        `img/2_character_pepe/5_dead/D-52.png`,
        `img/2_character_pepe/5_dead/D-53.png`,
        `img/2_character_pepe/5_dead/D-54.png`,
        `img/2_character_pepe/5_dead/D-55.png`,
        `img/2_character_pepe/5_dead/D-56.png`,
        `img/2_character_pepe/5_dead/D-57.png`
    ];
    world;
    //#endregion

    //#region Konstruktor Character
    constructor() {
        super().loadImage('img/2_character_pepe/2_walk/W-21.png');
        this.loadImages(this.IMAGES_WALK);
        this.loadImages(this.IMAGES_JUMP);
        this.loadImages(this.IMAGES_DEAD);
        this.applyGravity();
        this.animate();
    }
    //#endregion

    //#region Character Animieren Methode
    animate() {
        setInterval(() => {
            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
                this.moveRight();
                this.otherDirection = false;
                // this.WALKING_SOUND.play();
            }
            if (this.world.keyboard.LEFT && this.x > 0) {
                this.moveLeft();
                this.otherDirection = true;
                // this.WALKING_SOUND.play();
            }
            if (this.world.keyboard.SPACE && !this.isAboveGround()) {
                this.jump();
            }
            this.world.camera_x = -this.x + 100;
        }, 1000 / 60);

        setInterval(() => {
            if (this.isDead()) {
                this.playAnimation(this.IMAGES_DEAD)
            } else if (this.isAboveGround()) {
                this.playAnimation(this.IMAGES_JUMP)
            } else {
                if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                    this.playAnimation(this.IMAGES_WALK)
                }
            }
        }, 1000 / 10);
    }
    jump() {
        this.speedY = 30;
    }
    //#endregion
}
//#endregion