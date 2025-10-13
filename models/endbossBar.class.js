class StatusBarEndboss extends StatusBar {
    constructor() {
        super();
        this.IMAGES = ImageHub.statusbarEndboss.orange;
        this.loadImages(this.IMAGES);
        this.x = 500;
        this.y = 40;
        this.width = 200;
        this.height = 60;
        this.maxValue = 100;
        this.setPercentage(100);
    }

    setBossEnergy(energy) {
        let percentage = (energy / this.maxValue) * 100;
        this.setPercentage(percentage);
    }
    resolveImageIndex() {
        if (this.percentage > 80) return 5;
        else if (this.percentage > 60) return 4;
        else if (this.percentage > 40) return 3;
        else if (this.percentage > 20) return 2;
        else if (this.percentage > 0) return 1;
        else return 0;
    }
}