require("./game.jsx");
require("../assets/css/box.css");
require("../assets/css/main.css");
require("../assets/css/player.css");
require("../assets/css/stages.css");
require("../assets/css/tunnel.css");


document.addEventListener('DOMContentLoaded', () => {
    console.log('Initializing App ...');
    window.Game.init();
    console.log("Game initialization complete");
});