class SceneMainMenu extends Phaser.Scene {
  constructor() {
    super({
      key: "SceneMainMenu",
    });
  }

  preload = () => {
    this.load.image("sprBtnPlay", "content/sprBtnPlay.png");
    this.load.image("sprBtnPlayHover", "content/sprBtnPlayHover.png");
    this.load.image("sprBtnPlayDown", "content/sprBtnPlayDown.png");
    this.load.image("sprBtnRestart", "content/sprBtnRestart.png");
    this.load.image("sprBtnRestartHover", "content/sprBtnRestartHover.png");
    this.load.image("sprBtnRestartDown", "content/sprBtnRestartDown.png");

    this.load.audio("sndBtnOver", "content/sndBtnOver.wav");
    this.load.audio("sndBtnDown", "content/sndBtnDown.wav");
  };

  create = () => {
    this.sfx = {
      btnOver: this.sound.add("sndBtnOver"),
      btnDown: this.sound.add("sndBtnDown"),
    };

    this.btnPlay = this.add.sprite(
      this.game.config.width * 0.5,
      this.game.config.height * 0.5,
      "sprBtnPlay"
    );

    this.btnPlay.setInteractive();
  };
}
