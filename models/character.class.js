//#region Character
class Character extends MovableObject {
    //#region Attribut Pepe
    speed = 10;
    y = 120;
    height = 250;

    offset = {
        top: 100,
        right: 30,
        bottom: 10,
        left: 30
    };
    SLEEP_DELAY = 2;
    JUMP_FRAME_DELAY = 200;

    IMAGES_IDLE = ImageHub.pepe.idle;
    IMAGES_WALK = ImageHub.pepe.walk;
    IMAGES_JUMP = ImageHub.pepe.jump;
    IMAGES_DEAD = ImageHub.pepe.dead;
    IMAGES_HURT = ImageHub.pepe.hurt;
    IMAGES_SLEEP = ImageHub.pepe.longIdle;
    world;
    //#endregion

    //#region constructor
    constructor() {
        super().loadImage('img/2_character_pepe/2_walk/W-21.png');
        this.lastAction = this.getNow();
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_WALK);
        this.loadImages(this.IMAGES_JUMP);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_HURT); // load images with array
        this.loadImages(this.IMAGES_SLEEP);
        this.applyGravity();
        IntervalHub.startInterval(this.charachterMovement, 1000 / 60);
        IntervalHub.startInterval(this.characterAnimation, 1000 / 10);
    }
    //#endregion
    getNow() {
        return new Date().getTime();
    }

    //#region pepe animation
    jump() {
        this.speedY = 25;
    }
    charachterMovement = () => {
        let moved = false;

        if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
            this.moveRight();
            this.otherDirection = false;
            moved = true;
            // this.WALKING_SOUND.play();
        }
        if (this.world.keyboard.LEFT && this.x > 0) {
            this.moveLeft();
            this.otherDirection = true;
            moved = true;
            // this.WALKING_SOUND.play();
        }
        if (this.world.keyboard.SPACE && !this.isAboveGround()) {
            this.jump();
            moved = true;
        }
        if (moved) this.lastAction = this.getNow();
        this.world.camera_x = -this.x + 100;
    }

    characterAnimation = () => {
        if (this.isDead()) {
            this.playAnimation(this.IMAGES_DEAD);
        } else if (this.isHurt()) {
            this.playAnimation(this.IMAGES_HURT);
        } else if (this.isAboveGround()) {
            this.playJumpAnimation();
        } else if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
            this.playAnimation(this.IMAGES_WALK);
        } else {
            if (this.isSleeping()) this.playAnimation(this.IMAGES_SLEEP);
            else this.playAnimation(this.IMAGES_IDLE);
        }
    }
    playJumpAnimation() {
        const now = this.getNow();
        if (!this.lastJumpFrameTime || now - this.lastJumpFrameTime > this.JUMP_FRAME_DELAY) {
            this.playAnimation(this.IMAGES_JUMP);
            this.lastJumpFrameTime = now;
        }
    }

    isSleeping() {
        let idleTime = (this.getNow() - this.lastAction) / 1000;
        return idleTime > this.SLEEP_DELAY; // start sleep after 2sec
    }
    //#endregion
}
//#endregion