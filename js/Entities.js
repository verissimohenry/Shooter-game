class Entity extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, key, type) {
        moveUp(); {
            this.body.velocity.y = -this.getData("speed");
        }

        moveDown(); {
            this.body.velocity.y = this.getData("speed");
        }

        moveLeft(); {
            this.body.velocity.x = -this.getData("speed");
        }

        moveRight(); {
            this.body.velocity.x = this.getData("speed");
        }
        super(scene, x, y, key, "Player");
        this.setData("speed", 200);
        this.play("sprPlayer");
        this.scene = scene;
        this.scene.add.existing(this);
        this.scene.physics.world.enableBody(this, 0);
        this.setData("type", type);
        this.setData("isDead", false);
    }
}