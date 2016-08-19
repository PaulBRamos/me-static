document.addEventListener('DOMContentLoaded', () => {
    require("jsx/player");
    let input = require("js/input");
    let physics = require("js/physics");
    let collision = require("js/collision");
    let stage = require("js/stage.js");
    let ground = require("js/ground.js");

    // Global game namespace
    // might want to externalize this if it becomes filled with functions
    // put this in a module I guess and export stuff
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

            let mainGround = new ground.Ground();
            this.gameObjects.push(mainGround);

            window.Game.player = ReactDOM.render(
                <Player />,
                document.getElementById(mainStage.config.playerOutletId)
            );
            mainStage.objects.push(window.Game.player);
            this.gameObjects.push(window.Game.player);

            // add objects to the stage
            mainStage.addObject(mainGround);

            // stages.push(stage);
        },

        loop: function() {
            input.checkInput();

            // TODO:
            // physics.imposeGravity(this.gameObjects);

            // TODO:
            // collision.checkCollision();

            setTimeout(this.loop.bind(this), 10);
        }
    };

    window.Game.init();
    
    window.requestAnimationFrame(window.Game.loop.bind(window.Game));

    console.log('Initialized app');
});