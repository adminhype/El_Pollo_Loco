//#region Klasse für Map
class World {
    //#region Attributes
    character = new Character(); //Spielfigur
    enemies = [ // Gegner
        new Chicken(),
        new Chicken(),
        new Chicken()
    ]
    clouds = [ //Wolken
        new Cloud(),
    ]
    backgroundObjects = [ // Hintergründe nach reihenfolge
        new BackgroundObject('img/5_background/layers/air.png', 0),// bild und koordinaten
        new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 0),// ↓
        new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 0),//↓
        new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 0)// ←
    ]

    ctx; // Render-Kontext > Canvas
    canvas; // Zeichenfläche
    keyboard; // empty attribute > created at some point 
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

        // this.ctx.drawImage(this.character.img, this.character.x, this.character.y, this.character.width, this.character.height);
        this.addObjectsToMap(this.backgroundObjects) //Hintergrund zuerst
        this.addToMap(this.character); // Charakter darüber
        this.addObjectsToMap(this.enemies)// Gegner im Vordergrund
        this.addObjectsToMap(this.clouds) // Wolken über alles 

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
            this.ctx.save(); // status true
            this.ctx.translate(moObject.width, 0); // reflect image 180 degree
            this.ctx.scale(-1, 1);
            moObject.x = moObject.x * -1;
        }
        this.ctx.drawImage(moObject.img, moObject.x, moObject.y, moObject.width, moObject.height) // Objekt wird an seiner Position, mit eigener Größe gezeichnet

        if (moObject.otherDirection) { // undo ctx > default char
            moObject.x = moObject.x * -1;
            this.ctx.restore();
        }
    }
    //#endregion
}
//#endregion