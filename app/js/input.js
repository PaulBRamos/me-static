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

// TODO: definitely can be optinmized, and consolidate somse stuff
// maybe the player is responsible for calculating its own state?
// I think the right way to do this was to have an array of gameobjects
// that checked for input, similar to what we're doing with imposeGraphivty
// in the physics module, but considering only the player ever responds to
// input in our little app, it doesn't make much of a difference
export function checkInput() {
    let action = window.Game.player.IDLE_RIGHT,
        left = window.Game.player.state.left,
        acceleration = window.Game.player.state.acceleration;

    if (keyState[keys.LEFT] && keyState[keys.RIGHT]) {
        acceleration = 0;

        if (window.Game.player.state.action == window.Game.player.WALKING_RIGHT) {
            action = window.Game.player.IDLE_RIGHT;
        }
        else if (window.Game.player.state.action == window.Game.player.WALKING_LEFT) {
            action = window.Game.player.IDLE_LEFT;
        }
    }
    else if (keyState[keys.LEFT]) {
        // reset acceleration to 0 if switching to opposite side
        if (window.Game.player.state.action == window.Game.player.WALKING_RIGHT) {
            acceleration = 0;
        }

        action = window.Game.player.WALKING_LEFT;
        left = left - (1 * acceleration);
        
        if (acceleration < 1) {
            acceleration += 0.05;
        }
    }
    else if (keyState[keys.RIGHT]) {
        // reset acceleration to 0 if switching to opposite side
        if (window.Game.player.state.action == window.Game.player.WALKING_LEFT) {
            acceleration = 0;
        }
        action = window.Game.player.WALKING_RIGHT;
        left = left + (1 * acceleration);

        if (acceleration < 1) {
            acceleration += 0.05;
        }
    }
    else {
        /* de-accelrate to stop */
        if (acceleration > 0) {
            acceleration -= 0.07;
        }
        else {
            acceleration = 0;
        }

        // We need to pick the appropriate de-accel animation and also
        // change that to the appropriate idle sprite depending on current state
        // and value of acceleration
        if (window.Game.player.state.action == window.Game.player.WALKING_LEFT || 
            window.Game.player.state.action == window.Game.player.IDLE_LEFT) {
            if (acceleration === 0) {
                action = window.Game.player.IDLE_LEFT;
            }
            else {
                action = window.Game.player.WALKING_LEFT;
            }
            left = left - (1 * acceleration);
        }
        else if (window.Game.player.state.action == window.Game.player.WALKING_RIGHT ||
                 window.Game.player.state.action == window.Game.player.IDLE_RIGHT) {
            if (acceleration === 0) {
                action = window.Game.player.IDLE_RIGHT;
            }
            else {
                action = window.Game.player.WALKING_RIGHT;
            }
            left = left + (1 * acceleration);
        }
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