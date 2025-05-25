//#region Klasse für Map
class World {
    //#region Attributes
    character = new Character(); //Spielfigur
    level = level1;


    ctx; // Render-Kontext > Canvas
    canvas; // Zeichenfläche
    keyboard; // empty attribute > created at some point 
    camera_x = 0; // draw world > left
    //#endregion

    //#region Konstruktor
    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d'); //Zeichenbereich > Canvas
        this.canvas = canvas; // Zeichenfläche
        this.keyboard = keyboard; //draw area
        this.draw(); // draw wird aufgerufen
        this.setWorld(); // for Char 
    }
    //#endregion

    //#region Method 
    setWorld() {
        this.character.world = this; // this = current instance of world
    }
    //#endregion

    //#region Methode um Welt anzeigen zu lassen
    // world zeichnen
    draw() {
        // Canvas wird geleert > Geisterbilder vermeiden
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0); // draw element > 100px left ↓ all element 

        // this.ctx.drawImage(this.character.img, this.character.x, this.character.y, this.character.width, this.character.height);
        this.addObjectsToMap(this.level.backgroundObjects) //Hintergrund zuerst
        this.addToMap(this.character); // Charakter darüber
        this.addObjectsToMap(this.level.enemies)// Gegner im Vordergrund
        this.addObjectsToMap(this.level.clouds) // Wolken über alles 

        this.ctx.translate(-this.camera_x, 0); // undo right > element


        //Rekursiver aufruf von draw > Endlosschleife
        let self = this;
        requestAnimationFrame(() => {
            self.draw(); // "self" notwendig, da "this" im Arrow-Callback sonst undefiniert wäre
        });
    }
    //#endregion

    //#region Methode: mehrere Objekte auf Canvas zeichnen
    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o); // Jedes Objekt im Array wird einzeln ausgegeben
        })
    }
    //#endregion

    //#region canvas position hinzufügen & charachter bewegen
    //reflect img
    addToMap(moObject) {
        if (moObject.otherDirection) { // object has different direction y/n ? if y
            this.flipImage(moObject);
        }
        moObject.draw(this.ctx); // context > draw > movable object
        //collsion rectangle ↓
        moObject.drawFrame(this.ctx);

        if (moObject.otherDirection) { // undo ctx > default char
            this.flipImageBack(moObject);
        }
    }
    flipImage(moObject) {
        this.ctx.save(); // status true
        this.ctx.translate(moObject.width, 0); // reflect image 180 degree
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