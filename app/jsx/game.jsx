let stage = require("js/stage.js");
let gameObject = require("js/gameobject.js");
let input = require("js/input");
let physics = require("js/physics");
let collision = require("js/collision");
require("jsx/player");
let render = require("js/render.js");

window.Game = {
    gameObjects: [],
    stages: [],

    init: function() {
           // This is what actually seems to create the class
            /*globals Player:false */
            // note: add this to a global namespace for the game

            // window.Game.player.render(document.getElementById("app"));

            // add stage
            let mainStage = new stage.Stage({
                theme: "mountains",
                targetOutletSelector: "#stage",
                playerOutletId: "player"
            });
            mainStage.render();

            // let mainGround = new ground.Ground();
            let mainGround = new gameObject.GameObject({
                classPrefix: "ground-center-"
            },{ static: true, type: "ground" });
            this.gameObjects.push(mainGround);

            // About
            let aboutTunnel = new gameObject.GameObject({
                classPrefix: "tunnel-"
            }, { top: 1, left: 300, type: "tunnel" });
            this.gameObjects.push(aboutTunnel);

            // Skills
            let skillsTunnel = new gameObject.GameObject({
                classPrefix: "tunnel-"
            }, { top: 1, left: 400, type: "tunnel" });
            this.gameObjects.push(skillsTunnel);

            // Experience
            let experienceTunnel = new gameObject.GameObject({
                classPrefix: "tunnel-"
            }, { top: 1, left: 500, type: "tunnel" });
            this.gameObjects.push(experienceTunnel);

            this.player = ReactDOM.render(
                <Player />,
                document.getElementById(mainStage.config.playerOutletId)
            );
            mainStage.objects.push(window.Game.player);
            this.gameObjects.push(window.Game.player);

            // add objects to the stage
            mainStage.addObject(mainGround);
            mainStage.addObject(aboutTunnel);
            mainStage.addObject(skillsTunnel);
            mainStage.addObject(experienceTunnel);

            this.stages.push(mainStage);
    },
        loop: function() {
            input.checkInput();

            physics.imposeGravity(this.gameObjects);

            collision.checkCollision(this.gameObjects);

            render.render(this.gameObjects);

            setTimeout(this.loop.bind(this), 10);
        }
};