export class Stage {
    constructor(config) {
        this.config = config;
        this.objects = [];
    }

    addObject(object) {
        this.objects.push(object);
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