export class GameObject {
    constructor(config, state) {
        this.config = config || {};
        if (state) {
            this.state = state || {};
        }
    }

    generateId() {
        return '_' + Math.random().toString(36).substr(2, 9);
    }

    getHeight() {
        return document.querySelector(this.config.idSelector).getBoundingClientRect().height;
    }

    getWidth() {
        return document.querySelector(this.config.idSelector).getBoundingClientRect().width;
    }

    renderPosition() {
        if (this.state.static) {
            return;
        }

        let selectedElement = document.querySelector(this.config.idSelector);

        selectedElement.style.top = this.state.top + "px";
        selectedElement.style.left = this.state.left + "px";
    }

    render(outlet, theme) {
        this.config.theme = theme;
        this.config.outlet = outlet;
        this.config.id = this.generateId();
        this.config.idSelector = "#" + this.config.id;

        outlet.insertAdjacentHTML("beforeend",
        `
            <div id="${this.config.id}" class="${this.config.classPrefix}${theme}">

            </div>
        `);

        let selectedElement = document.querySelector(this.config.idSelector);

        if (this.state.top) {
            selectedElement.style.top = this.state.top + "px";
        }
        else {
            this.state.top = selectedElement.getBoundingClientRect().top;
        }

        if (this.state.left) {
            selectedElement.style.left = this.state.left + "px";
        }
        else {
            this.state.left = selectedElement.getBoundingClientRect().left;    
        }
    }
}