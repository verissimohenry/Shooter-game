# Shooter-game

# Javascript-Capstone Project: Build a Shooter Game

<h1 align="center">
  Shooter-game
</h1>

> Capstone project in the Microverse JavaScript Curriculum

Implementation of a Space Shooter Game built with the [Phaser 3](https://phaser.io/phaser3) framework

## About The Project

The main goal of this project is to build a platform game. Phaser and Javascript are the main technologies used to develop this project.

Live version of the project: [Live version](https://thirsty-pare-7e6ef7.netlify.app/)

Project Link: [Javascript-Capstone](https://github.com/verissimohenry/Shooter-game.git)

## The game

This is a never-ending game. The user faces different alien ships at random times. The user uses a laser (Space) to shoot and explode enemy ships. Every different enemy ship shot adds a different point to the user's score. When the user's ship is shot by an enemy laser, or an enemy ship touches the user's ship, the game ends. The user can restart the game. Also, users' high scores are stored in an API, and users can display the highest ten scores in the scoreboard scene.

### Game design

The game uses one laser sprite, one user ship, four enemy ships, and two backgrounds. Two backgrounds are displayed on each other to create a more interesting background and higher contrast. The user ship is black and white to have high contrast with the background. The enemy ships have fantastic designs, and they are relatively more colored to create confusion with the dark background with low contrast. There is background music, and explosion sounds in the game.

# Screenshort

![Screenshot](src/assets/images.png)

![Screenshot](src/assets/images1.png)

![Screenshot](src/assets/images3.png)

![Screenshot](src/assets/images4.png)

# User Ship

![Screenshot](src/assets/ship.png)

# Enemy ships
- Chaser Ship

![Screenshot](src/assets/enemy.png)

- Carrier Ship

![Screenshot](src/assets/enemy1.png)

- Gun Ship

![Screenshot](src/assets/enemy2.png)

- Hollow Ship

![Screenshot](src/assets/enemy3.png)

# Laser

![Screenshot](src/assets/laser.png)

# Explosion Sprite

![Screenshot](src/assets/explosion.png)

### How to Play

- Input your name on the first page and click the submit button, There is a menu on the next page which are Play, Options, Credits and Scoreboard. You can disable the sound in the options menu. Click on the play menu to start your game. You can move around the screen using W, S, D, and A keys and use the Space Bar to shoot whenever you see an enemy.

#### Get a local copy

_npm required_ - [get npm](https://www.npmjs.com/get-npm)

### Installation

You can play the game on [live version](), or install it locally using the following steps:

**Clone the repository by running this command in your terminal**

`$ git@github.com:verissimohenry/Shooter-game.git`

**Navigate into the newly created folder**

`$ cd phaser-js-game`

#### Get the dependencies needed for the game

`$ npm install`

#### Start the server

`$ npm start`

**Visit this link to see the game in your browser**

`http://localhost:8080/`

**Run Jest tests**

`$ npm run test`

## Technologies used

- HTML5/CSS
- Phaser 3
- Webpack
- Javascript
- Eslint
- Babel
- Jest for testing
- [Heroku](https://www.heroku.com/) for deployment
- [Leaderboard API service](https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/bFQvTZfPrvjkHOOILnoM/scores/) for high scores

## Author

👤 **Verissimo Henry**

- Github: [@githubhandle](https://github.com/verissimohenry)
- Twitter: [@twitterhandle](https://twitter.com/verissimohenry)
- Linkedin: [linkedin](https://www.linkedin.com/in/henry-verissimo-618906167/)
- Email: verissimohenry04@gmail.com

## Contributing

Contributions, issues and feature requests are welcome!

## Show your Support

Give a ⭐️ if you like this project!

## Acknowledgments

- [Microverse](https://www.microverse.org/)
- [Phaser](https://phaser.io/)
- [OpenGameArt](https://opengameart.org/)
- [https://learn.yorkcs.com/](https://learn.yorkcs.com/)
