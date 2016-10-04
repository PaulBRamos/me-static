export function checkCollision(gameObjects) {    
    for (var i in gameObjects) {
        var currentObject = gameObjects[i];

        // check against all the gameobjects
        for (var j in gameObjects) {
            var compareObject = gameObjects[j];

            if (currentObject == compareObject) {
                continue;
            }

            if (currentObject.state.type == "player" && !currentObject.isMounted() ||
                compareObject.state.type == "player" && !compareObject.isMounted()) {
                return;
            }

            // bouncing off an object from the bottom
            if ( currentObject.state.type != "ground" && compareObject.state.type != "ground" &&
                 currentObject.state.left + currentObject.getWidth() > compareObject.state.left &&
                 currentObject.state.left <= compareObject.state.left + compareObject.getWidth() &&
                 currentObject.state.top == compareObject.state.top + compareObject.getHeight()
                 ) {
                if (currentObject.state.type == "player") {
                    if (compareObject.state.type == "box") {
                        if (compareObject.config.onHitBottom) {
                            compareObject.config.onHitBottom.call(compareObject);
                        }
                    }
                    currentObject.state.top = compareObject.state.top + compareObject.getHeight();
                    currentObject.state.yAccel = 0;
                }
            }
            // collision for gravity y-axis on the top of the object
            else if ( ( currentObject.state.top + currentObject.getHeight() >= compareObject.state.top) && 
                 (compareObject.state.top >= currentObject.state.top ) &&
                 currentObject.state.left + currentObject.getWidth() >= compareObject.state.left + 2 && 
                (currentObject.state.left <= (compareObject.state.left + compareObject.getWidth() - 2)) ) {

                if (currentObject.state.type == "box") {
                    //return;
                }

                if (currentObject.state.type == "player") {
                    currentObject.state.isStandingOn = compareObject;
                }
                        
                currentObject.state.top = compareObject.state.top - currentObject.getHeight();

                currentObject.state.grounded = true;
                currentObject.state.yAccel = 0.6;
            }    
            // collision for X-Axis, ignoring the ground
            else if ( currentObject.state.type != "ground" && compareObject.state.type != "ground" &&
                 currentObject.state.left + currentObject.getWidth() > compareObject.state.left &&
                 currentObject.state.left <= compareObject.state.left + compareObject.getWidth() &&
                 currentObject.state.top + currentObject.getHeight() > compareObject.state.top  &&
                 currentObject.state.top < compareObject.state.top + compareObject.getHeight()) {

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
        }
    }
}
