//#region Character
class Character extends MovableObject {
    //#region Attribut Pepe
    speed = 10;
    y = 170;
    height = 250;

    offset = {
        top: 100,
        right: 30,
        bottom: 10,
        left: 30
    };

    IMAGES_WALK = ImageHub.pepe.walk;
    IMAGES_JUMP = ImageHub.pepe.jump;
    IMAGES_DEAD = ImageHub.pepe.dead;
    IMAGES_HURT = ImageHub.pepe.hurt;
    world;
    //#endregion

    //#region constructor
    constructor() {
        super().loadImage('img/2_character_pepe/2_walk/W-21.png');
        this.loadImages(this.IMAGES_WALK);
        this.loadImages(this.IMAGES_JUMP);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_HURT); // load images with array
        this.applyGravity();
        IntervalHub.startInterval(this.charachterMovement, 1000 / 60);
        IntervalHub.startInterval(this.characterAnimation, 1000 / 10);
    }
    //#endregion

    //#region pepe animation
    jump() {
        this.speedY = 20;
    }
    charachterMovement = () => {
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
    }

    characterAnimation = () => {
        if (this.isDead()) {
            this.playAnimation(this.IMAGES_DEAD);
        } else if (this.isHurt()) { // if hurt then animate images hurt
            this.playAnimation(this.IMAGES_HURT);
        }
        else if (this.isAboveGround()) {
            this.playAnimation(this.IMAGES_JUMP);
        } else {
            if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                this.playAnimation(this.IMAGES_WALK)
            }
        }
    }
    //#endregion
}
//#endregion