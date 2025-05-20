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

    //#endregion

    //#region Konstruktor
    constructor(canvas) {
        this.ctx = canvas.getContext('2d'); //Zeichenbereich > Canvas
        this.canvas = canvas; // Zeichenfläche
        this.draw(); // draw wird aufgerufen
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

    //#region canvas position hinzufügen
    addToMap(moObject) {
        this.ctx.drawImage(moObject.img, moObject.x, moObject.y, moObject.width, moObject.height) // Objekt wird an seiner Position, mit eigener Größe gezeichnet
    }
    //#endregion
}
//#endregion