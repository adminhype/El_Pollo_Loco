//#region Klasse für Map
class World {
    //#region Attributes
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
    //#endregion

    //#region create world
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

    //#region Method 
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
        if (this.keyboard.F) { // press f > throw bottle
            let bottle = new ThrowableObject(this.character.x + 100, this.character.y + 100);
            this.throwableObjects.push(bottle);
        }
    }
    checkCollisions() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                this.character.hit();
                this.statusBar.setPercentage(this.character.energy); // change statusbar on collision with enemy
            }
        });
    }
    //#endregion

    //#region Methode um Welt anzeigen zu lassen
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

    //#region Methode: mehrere Objekte auf Canvas zeichnen
    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        })
    }
    //#endregion

    //#region canvas position hinzufügen & charachter bewegen
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