export class GameObject {
    constructor(config, state) {
        this.config = config || {};
        if (state) {
            this.state = state || {};
        }
    }

    checkInput() {
        if (this.config.checkInputHandler) {
            this.config.checkInputHandler.call(this);
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
        let selectedElement = document.querySelector(this.config.idSelector);

        if (this.state.static) {
            return;
        }

        selectedElement.style.top = this.state.top + "px";
        selectedElement.style.left = this.state.left + "px";

        if (this.config.label) {
            let selectedElementLabel = document.querySelector(this.config.labelIdSelector);

            let labelPositionTop = this.state.top - 40,
                labelPositionLeft = this.state.left - (selectedElementLabel.getBoundingClientRect().width / 2) + (this.getWidth() / 2);

            selectedElementLabel.style.top = labelPositionTop + "px";
            selectedElementLabel.style.left = labelPositionLeft + "px";
        }
    }

    render(outlet, theme) {
        this.config.theme = theme;
        this.config.outlet = outlet;
        this.config.id = this.generateId();
        this.config.idSelector = "#" + this.config.id;
        this.config.labelIdSelector = "#" + this.config.id + "-label";

        outlet.insertAdjacentHTML("beforeend",
        `
            <div id="${this.config.id}" class="${this.config.classPrefix}${theme}">

            </div>
        `);

        let selectedElement, selectedElementLabel;

        selectedElement = document.querySelector(this.config.idSelector);

        if (this.config.label) {

            outlet.insertAdjacentHTML("beforeend", `
                <div id="${this.config.id}-label" class="label">
                    ${this.config.label}
                </div>
            `);
        }

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