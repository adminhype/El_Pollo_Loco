//#region Map
class World {
    //#region Attribute: Character, Level and Ui_Elements
    character = new Character();
    level = new Level();
    ctx;
    canvas;
    keyboard;
    camera_x = 0;

    statusBar = new StatusBar();
    bottlBar = new BottleBar();
    coinBar = new CoinBar();
    throwableObjects = [];
    collectedBottles = [];
    collectedCoins = [];
    //#endregion

    //#region Create Canvas, Keyboard, initialization
    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.setWorld();
        this.draw();
    }
    //#endregion

    //#region Game-Logic (run, collisions, throw, ....)
    setWorld() {
        this.character.world = this;
    }
    checkThrowObjects() {
        if (this.character.isSleeping()) return;
        let now = new Date().getTime();
        let throwCooldown = 300;

        if (this.keyboard.F && this.bottlBar.percentage > 0 &&
            (!this.lastThrowTime || now - this.lastThrowTime > throwCooldown)) {
            let offsetX = this.character.width - 20;
            let offsetY = this.character.height / 2;

            let bottle = new ThrowableObject(
                this.character.x + offsetX,
                this.character.y + offsetY,
            );

            this.throwableObjects.push(bottle);
            this.bottlBar.setPercentage(this.bottlBar.percentage - 20);
            this.lastThrowTime = now;
        }
    }
    checkCollisions() {
        this.checkEnemyCollisions();
        this.checkBottleCollisions();
        this.checkCoinCollisions();
        this.checkThrowableCollisions();
    }

    checkEnemyCollisions() {
        this.level.enemies.forEach((enemy) => {
            if (!this.character.isColliding(enemy) || enemy.isDead) return;
            const feet = this.character.y + this.character.height;
            const stomp = this.character.speedY < 0 && feet <= enemy.y + enemy.height;

            if (stomp) {
                enemy.die();
            } else if (!this.character.isHurt()) {
                this.character.hit();
                this.statusBar.setPercentage(this.character.energy);
            }
        });
    }

    checkBottleCollisions() {
        this.level.salsaBottles = this.level.salsaBottles.filter((bottle) => {
            if (this.character.isColliding(bottle)) {
                this.collectedBottles.push(bottle);
                this.bottlBar.setPercentage(Math.min(100, this.bottlBar.percentage + 20));
                return false;
            }
            return true;
        });
    }

    checkCoinCollisions() {
        this.level.coins = this.level.coins.filter((coin) => {
            if (this.character.isColliding(coin)) {
                this.collectedCoins.push(coin);
                this.coinBar.setPercentage(Math.min(100, this.coinBar.percentage + 20));
                return false;
            }
            return true;
        });
    }

    checkThrowableCollisions() {
        this.throwableObjects.forEach((bottle) => {
            this.level.enemies.forEach((enemy) => {
                if (bottle.isColliding(enemy) && !enemy.isDead) {
                    enemy.die();
                    bottle.markedForDeletion = true;
                }
            });
        });
    }
    //#endregion

    //#region Render: World and Objects 
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.save();
        this.ctx.translate(this.camera_x, 0); // move char with camera
        this.addObjectsToMap(this.level.backgroundObjects);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.throwableObjects);
        this.addObjectsToMap(this.level.salsaBottles);
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.enemies);
        this.addToMap(this.character);
        this.ctx.restore();
        // fix statusbar moving with char 

        // this.ctx.translate(-this.camera_x, 0); // back
        this.addToMap(this.statusBar);
        this.addToMap(this.bottlBar);
        this.addToMap(this.coinBar);
        // this.ctx.translate(this.camera_x, 0); // forward
        this.update();
        let self = this;
        requestAnimationFrame(() => {
            self.draw();
        });
    }
    //#endregion
    update() {
        this.checkCollisions();
        this.checkThrowObjects();

        this.character.applyGravity();
        this.character.characterMovement();
        this.character.characterAnimation();
        this.level.enemies.forEach(enemy => {
            if (enemy.moveStep) enemy.moveStep(this.character);
            if (enemy.animateStep) enemy.animateStep(this.character);
        });
        this.level.enemies = this.level.enemies.filter(e => !e.markedForDeletion);
        this.throwableObjects = this.throwableObjects.filter(obj => !obj.markedForDeletion);
    }
    //#region Draw multiply Objects on Canvas
    addObjectsToMap(objects) {
        objects.forEach(obj => {
            if (obj instanceof ThrowableObject) {
                obj.update();
                obj.animate();
            }
            if (obj instanceof Coin) {
                obj.animate();
            }
            this.addToMap(obj);
        })
    }
    //#endregion

    //#region Draw Object and Image Reverse
    addToMap(moObject) {
        if (moObject.otherDirection) {
            this.flipImage(moObject);
        }
        moObject.draw(this.ctx);
        moObject.drawFrame(this.ctx);

        if (moObject.otherDirection) {
            this.flipImageBack(moObject);
        }
    }
    flipImage(moObject) {
        this.ctx.save();
        this.ctx.translate(moObject.width, 0);
        this.ctx.scale(-1, 1);
        moObject.x = moObject.x * -1;
    }
    flipImageBack(moObject) {
        moObject.x = moObject.x * -1;
        this.ctx.restore();
    }
    //#endregion
}
//#endregion