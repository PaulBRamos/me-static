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

        if (this.config.label) {
            let selectedElementLabel = document.querySelector(this.config.labelIdSelector);

            if (this.config.labelPosition === "fixed") {
                selectedElementLabel.style.position = "fixed";
                selectedElementLabel.style.top = this.config.labelTop;
                selectedElementLabel.style.left = this.config.labelLeft;
                // selectedElementLabel.classList.remove("");
                return;
            }

            let labelPositionTop = this.state.top - (this.config.labelOffset ? this.config.labelOffset : 40),
                labelPositionLeft = this.state.left - (selectedElementLabel.getBoundingClientRect().width / 2) + (this.getWidth() / 2);

            selectedElementLabel.style.top = labelPositionTop + "px";
            selectedElementLabel.style.left = labelPositionLeft + "px";
        }

        if (this.state.static) {
            return;
        }

        selectedElement.style.top = this.state.top + "px";
        selectedElement.style.left = this.state.left + "px";
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
        let animation = this.config.labelAnimation ? this.config.labelAnimation : "bounce";

        selectedElement = document.querySelector(this.config.idSelector);

        if (this.config.label) {

            outlet.insertAdjacentHTML("beforeend", `
                <div id="${this.config.id}-label" class="label ${animation}">
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