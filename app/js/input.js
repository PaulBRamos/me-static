let keyState = {};

const keys = {
    LEFT: 37,
    RIGHT: 39
};

window.addEventListener('keydown', (event) => {
    keyState[event.keyCode] = true;
});

window.addEventListener('keyup', (event) => {
    keyState[event.keyCode] = false;
});

export function checkInput() {
    let action = window.Game.player.IDLE,
        left = window.Game.player.state.left,
        acceleration = window.Game.player.state.acceleration;

    if (keyState[keys.LEFT] && keyState[keys.RIGHT]) {
        acceleration = 0;
        action = window.Game.player.IDLE;
    }
    else if (keyState[keys.LEFT]) {
        action = window.Game.player.WALKING_LEFT;
        left = left - (1 * acceleration);
        
        if (acceleration < 1) {
            acceleration += 0.05;
        }
    }
    else if (keyState[keys.RIGHT]) {
        action = window.Game.player.WALKING_RIGHT;
        left = left + (1 * acceleration);

        if (acceleration < 1) {
            acceleration += 0.05;
        }
    }
    else {
        action = window.Game.player.IDLE;
        acceleration = 0;
    }

    // note: add this to a global namespace for the game
    window.Game.player.setState({
        action: action,
        left: left,
        acceleration: acceleration
    });
}

// export function start() {
//     setInterval(checkInputLoop, 10);
// }