export function render(gameObjects) {
    for (var i in gameObjects) {
        if (gameObjects[i].renderPosition) {
            gameObjects[i].renderPosition();
        }
    }
}