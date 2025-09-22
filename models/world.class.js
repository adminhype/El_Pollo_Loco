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
        this.draw();
        this.setWorld();
        this.checkCollisions();
        this.run();
    }
    //#endregion

    //#region Game-Logic (run, collisions, throw, ....)
    setWorld() {
        this.character.world = this;
    }
    run() {
        setInterval(() => {
            this.checkCollisions();
            this.checkThrowObjects();
        }, 1000 / 5)
    }
    checkThrowObjects() {
        if (this.character.isSleeping()) return;
        if (this.keyboard.F && this.bottlBar.percentage > 0) {
            let offsetX = this.character.width - 20;
            let offsetY = this.character.height / 2;

            let bottle = new ThrowableObject(
                this.character.x + offsetX,
                this.character.y + offsetY,
            );

            this.throwableObjects.push(bottle);
            this.bottlBar.setPercentage(this.bottlBar.percentage - 20);
        }
    }

    checkCollisions() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy) && !this.character.isHurt()) {
                this.character.hit();
                this.statusBar.setPercentage(this.character.energy); // change statusbar on collision with enemy
            }
        });
        this.level.salsaBottles.forEach((bottle, index) => {
            if (this.character.isColliding(bottle)) {
                this.collectedBottles.push(bottle); //show items for end screen
                this.level.salsaBottles.splice(index, 1);
                this.bottlBar.setPercentage(Math.min(100, this.bottlBar.percentage + 20));
            }
        });
        this.level.coins.forEach((coin, index) => {
            if (this.character.isColliding(coin)) {
                this.collectedCoins.push(coin);
                this.level.coins.splice(index, 1);
                this.coinBar.setPercentage(Math.min(100, this.coinBar.percentage + 20));
            }
        });
    }
    //#endregion

    //#region Render: World and Objects 
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0); // move char with camera
        this.addObjectsToMap(this.level.backgroundObjects);
        this.addToMap(this.character);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.throwableObjects);
        this.addObjectsToMap(this.level.salsaBottles);
        this.addObjectsToMap(this.level.coins);
        this.ctx.translate(-this.camera_x, 0);
        // fix statusbar moving with char 

        // this.ctx.translate(-this.camera_x, 0); // back
        this.addToMap(this.statusBar);
        this.addToMap(this.bottlBar);
        this.addToMap(this.coinBar);
        // this.ctx.translate(this.camera_x, 0); // forward
        let self = this;
        requestAnimationFrame(() => {
            self.draw();
        });
    }
    //#endregion

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