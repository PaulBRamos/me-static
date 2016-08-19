export function checkCollision(gameObjects) {
    for (var i in gameObjects) {
        var currentObject = gameObjects[i];

        // check against all the gameobjects
        for (var j in gameObjects) {
            var compareObject = gameObjects[j];

            if (currentObject == compareObject) {
                continue;
            }

            // check x
            if (currentObject.state.left < compareObject.state.left &&
                currentObject.state.left + currentObject.getWidth() > compareObject.state.left) {
                // collision happened on x-axis
            }

            // check y
            if (currentObject.state.top < compareObject.state.top &&
                currentObject.state.top + currentObject.getHeight() > compareObject.state.top) {
                // collision happened on y-axis
            }

        }
    }
}