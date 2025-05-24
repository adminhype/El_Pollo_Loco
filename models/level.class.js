//#region level 1
class Level {
    //#region attribute
    enemies;
    clouds;
    backgroundObjects;
    level_end_x = 2200;
    //#endregion
    //#region constructor 
    constructor(enemies, clouds, backgroundObjects) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
    }
}
//#endregion