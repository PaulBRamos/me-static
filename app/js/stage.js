export class Stage {
    constructor(config) {
        this.config = config;
        this.gameObjects = [];

        this.render();
    }

    generateId() {
        return '_' + Math.random().toString(36).substr(2, 9);
    }

    removeObject(object) {
        for (var i in this.gameObjects) {
            if (this.gameObjects[i] == object) {
                this.gameObjects.splice(i, 1);
            }
        }
    }

    clearStage() {
        let stageOutlet = document.querySelector(this.config.targetOutletSelector);
        stageOutlet.style.opacity = 0;
        stageOutlet.innerHTML = "";
    }

    addObject(object) {
        this.gameObjects.push(object);
        object.render(document.querySelector(this.config.targetOutletSelector), this.config.theme);
    }

    render() {
        let outlet = document.querySelector(this.config.targetOutletSelector),
            el = document.createElement("div"),
            pageName = this.config.name;

        this.config.id = this.generateId();
        this.config.idSelector = "#" + this.config.id;

        if (pageName == "home") {
            // pageName = "";
        }

        // render
        outlet.insertAdjacentHTML("beforeend",`
            <div id="player"></div>
            
            <div id="${this.config.id}" class="background-${this.config.theme}">
                <div class="page-heading">
                    ${pageName}
                </div>
            </div>
        `);

        if (this.config.gameObjects) {
            for (let i in this.config.gameObjects) {
                let gameObject = this.config.gameObjects[i];
                this.addObject(gameObject);
            }
        }

        setTimeout(function() {
            outlet.style.opacity = 1;
        }, 500);
    }
}