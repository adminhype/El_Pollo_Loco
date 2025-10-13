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

    //#region Images
    //loadImage('img/test.png')
    loadImage(path) {
        this.img = new Image(); // this.img = document.getElementById('image') <img id="image" src>
        this.img.src = path;
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        // this.drawFrame(ctx); // draw frame for collision
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