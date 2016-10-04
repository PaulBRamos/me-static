let input = require("js/input");
let physics = require("js/physics");
let collision = require("js/collision");
let render = require("js/render.js");
let router = require("js/router.js");

window.Game = {
    stages: [],
    activeStage: null,
    router: null,

    findStage: function(name) {
        for (var i in this.stages) {
            if (this.stages[i].config.name == name) {
                return i;
            }
        }

        return false;
    },

    removeStage: function(stage) {
        var indexOfStage = this.findStage(stage);

        if (stage) {
            this.stages.splice(indexOfStage, 1);
        }
    },

    loadPlayer: function() {
        // Initialize the player separately since he's a react object
        this.player = ReactDOM.render(
            <Player />,
            document.getElementById(this.activeStage.config.playerOutletId)
        );
        this.activeStage.gameObjects.push(this.player);
    },

    init: function() {
        this.router = new router.Router();

        this.router.loadRoute("home");

        console.log("Setting up game loop");
        window.requestAnimationFrame(this.loop.bind(this));
    },
    loop: function() {
        input.checkInput(this.activeStage.gameObjects);

        physics.imposeGravity(this.activeStage.gameObjects);

        collision.checkCollision(this.activeStage.gameObjects);

        render.render(this.activeStage.gameObjects);

        setTimeout(this.loop.bind(this), 10);
    }
};