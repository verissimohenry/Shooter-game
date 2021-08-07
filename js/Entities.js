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
        this.body.setVelocity(0, 0);

        this.x = Phaser.Math.Clamp(this.x, 0, this.scene.game.config.width);
        this.y = Phaser.Math.Clamp(this.y, 0, this.scene.game.config.height);
        super(scene, x, y, key, "Player");
        this.setData("speed", 200);
        this.play("sprPlayer");
        this.scene = scene;
        this.scene.add.existing(this);
        this.scene.physics.world.enableBody(this, 0);
        this.setData("type", type);
        this.setData("isDead", false);

        class ChaserShip extends Entity {
            constructor(scene, x, y) {
                super(scene, x, y, "sprEnemy1", "ChaserShip");
                this.body.velocity.y = Phaser.Math.Between(50, 100);
            }
        }

        class GunShip extends Entity {
            constructor(scene, x, y) {
                super(scene, x, y, "sprEnemy0", "GunShip");
                this.body.velocity.y = Phaser.Math.Between(50, 100);
                this.play("sprEnemy0");
            }
        }

        class CarrierShip extends Entity {
            constructor(scene, x, y) {
                super(scene, x, y, "sprEnemy2", "CarrierShip");
                this.body.velocity.y = Phaser.Math.Between(50, 100);
                this.play("sprEnemy2");
            }
        }

        class EnemyLaser extends Entity {
            constructor(scene, x, y) {
                super(scene, x, y, "sprLaserEnemy0");
                this.body.velocity.y = 200;
            }
        }
    }


}