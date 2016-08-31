export function checkCollision(gameObjects) {    
    for (var i in gameObjects) {
        var currentObject = gameObjects[i];

        // check against all the gameobjects
        for (var j in gameObjects) {
            var compareObject = gameObjects[j];

            if (currentObject == compareObject) {
                continue;
            }

            // collision for X-Axis, ignoring the ground
            if ( currentObject.state.type != "ground" && compareObject.state.type != "ground" &&
                 currentObject.state.left + currentObject.getWidth() > compareObject.state.left &&
                 currentObject.state.left <= compareObject.state.left + compareObject.getWidth() &&
                 currentObject.state.top + currentObject.getHeight() > compareObject.state.top + 2) {

                if ( currentObject.state.type == "player") {
                    if ( currentObject.state.left < compareObject.state.left) {
                        currentObject.state.left = compareObject.state.left - currentObject.getWidth();
                        if (!currentObject.state.grounded) {
                            currentObject.state.acceleration = 0.5;
                        }
                    }
                    else if (currentObject.state.left > compareObject.state.left) {
                        currentObject.state.left = compareObject.state.left + compareObject.getWidth();
                        if (!currentObject.state.grounded) {
                            currentObject.state.acceleration = 0.5;
                        }
                    }
                }
            }
            // collision for gravity y-axis
            else if ( currentObject.state.top + currentObject.getHeight() > compareObject.state.top &&
                 currentObject.state.left > compareObject.state.left - 5 && 
                (currentObject.state.left < (compareObject.state.left + compareObject.getWidth() - 5)) ) {
                currentObject.state.top = compareObject.state.top - currentObject.getHeight();

                currentObject.state.grounded = true;
                currentObject.state.yAccel = 0.6;
            }    
        }
    }
}