let stage = require("js/stage.js");
let gameObject = require("js/gameobject.js");
let input = require("js/input");
let physics = require("js/physics");
let collision = require("js/collision");
require("jsx/player");
let render = require("js/render.js");

window.Game = {
    stages: [],
    activeStage: null,

    init: function() {
            // add stage
            let mainStage = new stage.Stage({
                theme: "mountains",
                targetOutletSelector: "#stage",
                playerOutletId: "player",
                gameObjects: [
                    // ground
                    new gameObject.GameObject({
                        classPrefix: "ground-center-"
                    },{ static: true, type: "ground" }),
                    // About stage tunnel
                    new gameObject.GameObject({
                        classPrefix: "tunnel-",
                        label: "About"
                    }, { top: 1, left: 300, type: "tunnel"}),
                    // Skills stage tunnel
                    new gameObject.GameObject({
                        classPrefix: "tunnel-",
                        label: "Skills"
                    }, { top: 1, left: 400, type: "tunnel" }),
                    // Experience stage tunnel
                    new gameObject.GameObject({
                        classPrefix: "tunnel-",
                        label: "Experience"
                    }, { top: 1, left: 500, type: "tunnel" })
                ]
            });

            this.player = ReactDOM.render(
                <Player />,
                document.getElementById(mainStage.config.playerOutletId)
            );
            mainStage.gameObjects.push(window.Game.player);

            this.stages.push(mainStage);
            this.activeStage = this.stages[0];
    },
        loop: function() {
            input.checkInput();

            physics.imposeGravity(this.activeStage.gameObjects);

            collision.checkCollision(this.activeStage.gameObjects);

            render.render(this.activeStage.gameObjects);

            setTimeout(this.loop.bind(this), 10);
        }
};