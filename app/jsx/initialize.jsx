require("jsx/game");

document.addEventListener('DOMContentLoaded', () => {
    console.log('Initializing App ...');
    window.Game.init();
    console.log("Game initialization complete");
        
    console.log("Setting up game loop");
    window.requestAnimationFrame(window.Game.loop.bind(window.Game));    
});