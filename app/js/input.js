export let keyState = {};

export const keys = {
    LEFT: 37,
    RIGHT: 39,
    UP: 38,
    DOWN: 40
};

window.addEventListener('keydown', (event) => {
    keyState[event.keyCode] = true;
});

window.addEventListener('keyup', (event) => {
    keyState[event.keyCode] = false;
});

export function checkInput(gameObjects) {
    for (var i in gameObjects) {
        let gameObject = gameObjects[i];
        gameObject.checkInput();
    }
}