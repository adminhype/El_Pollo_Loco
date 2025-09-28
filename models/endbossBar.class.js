class StatusBarEndboss extends StatusBar {
    constructor() {
        super();
        this.IMAGES = ImageHub.statusbarEndboss.orange;
        this.loadImages(this.IMAGES);
        this.x = 500;
        this.y = 0;
        this.width = 200;
        this.height = 60;
        this.maxValue = 100;
        this.setPercentage(100);
    }

    setBossEnergy(energy) {
        let percentage = (energy / this.maxValue) * 100;
        this.setPercentage(percentage);
    }
}