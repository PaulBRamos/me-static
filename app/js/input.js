export let keyState = {};

export const keys = {
    LEFT: 37,
    RIGHT: 39,
    UP: 38,
    DOWN: 40
};

window.addEventListener('keydown touchstart', (event) => {
    keyState[event.keyCode] = true;
    event.preventDefault();
});

window.addEventListener('keyup touchend', (event) => {
    keyState[event.keyCode] = false;
    event.preventDefault();
});

export function checkInput(gameObjects) {
    for (var i in gameObjects) {
        let gameObject = gameObjects[i];
        gameObject.checkInput();
    }
}