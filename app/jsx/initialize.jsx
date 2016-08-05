document.addEventListener('DOMContentLoaded', () => {
    require("jsx/player");
    let input = require("js/input");

    // Global game namespace
    // might want to externalize this if it becomes filled with functions
    // put this in a module I guess and export stuff
    window.Game = {
        init: function() {
            // This is what actually seems to create the class
            /*globals Player:false */
            // note: add this to a global namespace for the game
            window.Game.player = ReactDOM.render(
                <Player />,
                document.getElementById("app")
            );
        },

        loop: function() {
            input.checkInput();

            setTimeout(this.loop.bind(this), 10);
        }
    };

    window.Game.init();
    window.requestAnimationFrame(window.Game.loop.bind(window.Game));

    console.log('Initialized app');
});