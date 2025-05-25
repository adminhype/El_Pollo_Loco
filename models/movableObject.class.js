//#region Klasse für Bewegbare Objekte
class MovableObject {

    //#region Attribute
    x = 120; //Startposition<
    y = 280; //Startposition<
    img; // Bildobjekt, das später geladen wird 
    height = 150;
    width = 100;
    imageCache = {}; //Bilder werden zwischen gespeichert
    currentImage = 0;
    speed = 0.2;
    otherDirection = false; // reflect char
    speedY = 0;// how fast object moving down
    acceleration = 2.6; //object acceleration rate
    //#endregion

    //#region Methoden

    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) { // use later > change graphics
                this.y -= this.speedY; // y - speedY negative
                this.speedY -= this.acceleration; // object moving down
            }
        }, 1000 / 25);
    };
    isAboveGround() {
        return this.y < 180; // stop falling over y axis
    }
    loadImage(path) {
        this.img = new Image(); // Neues Bildobjekt
        this.img.src = path;  // Bildpfad setzen > Canvas darstellung
    }

    // refector moObjecet > world.class↓
    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height) // Objekt wird an seiner Position, mit eigener Größe gezeichnet
    }
    drawFrame(ctx) {
        //only show chicken and char border
        if (this instanceof Character || this instanceof Chicken) {
            ctx.beginPath();
            ctx.lineWidth = '2';
            ctx.strokeStyle = 'yellow';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }

    /**
     * 
     * @param {Array} arr ['img./img1.png','img./img2.png','....']
     */
    //imageChache
    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image(); //Bildobject
            img.src = path; // BIld wird geladen
            this.imageCache[path] = img; //Wert speichern als Schlüssel
        });
    }
    moveRight() {
        this.x += this.speed;
    }
    moveLeft() {
        this.x -= this.speed;
    }
    jump() {
        this.speedY = 30; // jump height
    }
    playAnimation(images) {
        let i = this.currentImage % this.IMAGES_WALK.length; //modulo % > index nicht größer als Array > Bilder durchlaufen ohne manuell auf 0 zusetzen
        let path = images[i]; //Pfad aus dem Array
        this.img = this.imageCache[path]; // Greift auf loadImages() > bild ändert sich
        this.currentImage++; // iterieren +1 > neues bild
    }
    //#endregion
}
//#endregion