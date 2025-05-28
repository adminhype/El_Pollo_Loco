//#region Klasse für Map
class World {
    //#region Attributes
    character = new Character();
    level = level1;
    ctx;
    canvas;
    keyboard;
    camera_x = 0;
    //#endregion

    //#region Konstruktor
    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.checkCollisions();
    }
    //#endregion


    //#region Method 
    setWorld() {
        this.character.world = this;
    }
    checkCollisions() {
        setInterval(() => {
            this.level.enemies.forEach((enemy) => {
                if (this.character.isColliding(enemy)) {
                    this.character.hit();
                    // console.log('Collision with Char, energy', this.character.energy);
                }
            })
        }, 1000 / 5);
    }
    //#endregion

    //#region Methode um Welt anzeigen zu lassen
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);

        this.addObjectsToMap(this.level.backgroundObjects)
        this.addToMap(this.character);
        this.addObjectsToMap(this.level.enemies)
        this.addObjectsToMap(this.level.clouds)

        this.ctx.translate(-this.camera_x, 0);

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