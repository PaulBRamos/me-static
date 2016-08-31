export class Stage {
    constructor(config) {
        this.config = config;
        this.gameObjects = [];

        this.render();

        if (this.config.gameObjects) {
            for (let i in this.config.gameObjects) {
                let gameObject = this.config.gameObjects[i];
                this.addObject(gameObject);
            }
        }
    }

    addObject(object) {
        this.gameObjects.push(object);
        object.render(document.querySelector(this.config.targetOutletSelector), this.config.theme);
    }

    clear() {
        let outlet = document.querySelector(this.config.targetOutletSelector);

        outlet.innerHTML = "";
    }

    render() {
        let outlet = document.querySelector(this.config.targetOutletSelector),
            el = document.createElement("div");

        // render
        outlet.insertAdjacentHTML("beforeend",
            `
        <div id="player"></div>
            <div class="background-${this.config.theme}">

            </div>
        `);

    }
}