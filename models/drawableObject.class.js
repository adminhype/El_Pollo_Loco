//#region Draw_Object
class DrawableObject {
    //#region Static Attributes
    img;
    currentImage = 0;
    imageCache = {};
    x = 120;
    y = 280;
    height = 150;
    width = 100;
    //#endregion

    //#region constructor
    //#endregion

    //#region Images
    //loadImage('img/test.png')
    loadImage(path) {
        this.img = new Image(); // this.img = document.getElementById('image') <img id="image" src>
        this.img.src = path;
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
    drawFrame(ctx) {
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