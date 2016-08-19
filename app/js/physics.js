let baseAcceleration = 0.6;

export function imposeGravity(gameObjects) {
    console.log(gameObjects);
    for (var object in gameObjects)  {
        let currObject = gameObjects[object];

        if (currObject.state.static) {
            continue;
        }

        if (!currObject.state.yAccel) {
            currObject.state.yAccel = baseAcceleration;
        }

        currObject.state.top = currObject.state.top + (1 * currObject.state.yAccel);
        currObject.state.yAccel += 0.1;
    }
}