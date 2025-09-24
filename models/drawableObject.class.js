//#region Draw_Object
class DrawableObject {
    //#region Static Attributes
    img;
    currentImage = 0;
    imageCache = {};
    x = 2220; // fix charachter position later 
    y = 280;
    height = 150;
    width = 100;
    //#endregion

    //#region Images
    //loadImage('img/test.png')
    loadImage(path) {
        this.img = new Image(); // this.img = document.getElementById('image') <img id="image" src>
        this.img.src = path;
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        this.drawFrame(ctx); // draw frame for collision
    }
    drawFrame(ctx) {
        if ((this instanceof Character ||
            this instanceof Chicken ||
            this instanceof ChickenSmall ||
            this instanceof Endboss ||
            this instanceof Coin ||
            this instanceof Bottle)) { // show border for collision
            this.getRealFrame(); // get real frame for collision
            ctx.beginPath();
            ctx.lineWidth = '2';
            ctx.strokeStyle = 'yellow';
            ctx.rect(this.rX, this.rY, this.rW, this.rH);
            ctx.stroke();
        }
    }
    /**
  * 
  * @param {Array} arr ['img./img1.png','img./img2.png','....']
  */
    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }
    //#endregion
}
//#endregion