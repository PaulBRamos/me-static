let input = require("js/input.js");
let keyState = input.keyState;
let keys = input.keys;
let fireOncePerPress = false;

export  function checkInputForPlayer() {
    let player = window.Game.player,
        action = player.IDLE_RIGHT,
        left = player.state.left,
        acceleration = player.state.acceleration,
        router = window.Game.router;

    if (keyState[keys.DOWN] === true) {
        if (!fireOncePerPress) {
            if (player.state.isStandingOn) {
                let route = player.state.isStandingOn.config.route;

                if (route) {
                    router.loadRoute(route);
                }
            }
        }
        fireOncePerPress = true;
    }
    else if(keyState[keys.DOWN] === false) {
        fireOncePerPress = false;
    }
    
    if (keyState[keys.LEFT] && keyState[keys.RIGHT]) {
        acceleration = 0;

        if (player.state.action == player.WALKING_RIGHT) {
            action = player.IDLE_RIGHT;
        }
        else if (player.state.action == player.WALKING_LEFT) {
            action = player.IDLE_LEFT;
        }
    }

    if (keyState[keys.UP]) {
        if (player.state.grounded) {
            player.state.yAccel = -3;
            player.state.grounded = false;
            player.state.isStandingOn = null;
        }
    }
    if (keyState[keys.LEFT]) {
        if (player.state.action == player.JUMP_RIGHT) {
            acceleration = acceleration / 4;
        }

        // reset acceleration to 0 if switching to opposite side
        if (player.state.action == player.WALKING_RIGHT) {
            acceleration = 0;
        }
        
        action = player.WALKING_LEFT;
        

        left = left - (1 * acceleration);
        
        if (acceleration < 1) {
            acceleration += 0.05;
        }
    }
    else if (keyState[keys.RIGHT]) {
        if (player.state.action == player.JUMP_LEFT) {
            acceleration = acceleration / 4;
        }

        // reset acceleration to 0 if switching to opposite side
        if (player.state.action == player.WALKING_LEFT) {
            acceleration = 0;
        }
        action = player.WALKING_RIGHT;
        left = left + (1 * acceleration);

        if (acceleration < 1) {
            acceleration += 0.03;
        }
    }
    else {
        /* de-accelrate to stop */
        if (acceleration > 0) {
            if (player.state.grounded) {
                acceleration -= 0.02;
            }            
        }
        else {
            acceleration = 0;
        }

        // We need to pick the appropriate de-accel animation and also
        // change that to the appropriate idle sprite depending on current state
        // and value of acceleration
        if (player.state.action == player.WALKING_LEFT || 
            player.state.action == player.IDLE_LEFT || 
            player.state.action == player.JUMP_LEFT) {
            if (acceleration === 0) {
                if (player.state.grounded) {
                    action = player.IDLE_LEFT;
                }
                else {
                    action = player.JUMP_LEFT;
                }
            }
            else {
                action = player.WALKING_LEFT;
            }
            left = left - (1 * acceleration);
        }
        else if (player.state.action == player.WALKING_RIGHT ||
                 player.state.action == player.IDLE_RIGHT ||
                 player.state.action == player.JUMP_RIGHT) {
            if (acceleration === 0) {
                if (player.state.grounded) {
                    action = player.IDLE_RIGHT;
                }
                else {
                    action = player.JUMP_RIGHT;
                }
            }
            else {
                action = player.WALKING_RIGHT;
            }
            left = left + (1 * acceleration);
        }
    }

    if (!player.isMounted()) {
        return;
    }

    // note: add this to a global namespace for the game
    player.setState({
        action: action,
        left: left,
        acceleration: acceleration
    });
}