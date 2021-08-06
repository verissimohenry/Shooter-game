class SceneMainMenu extends Phaser.Scene {
    constructor() {
        super({
            key: "SceneMainMenu"
        });
    }

    preload() {
        
    }    

    create() {
        this.scene.start("SceneMain");
    }
}
