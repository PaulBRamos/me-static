    export class Ground {
        constructor(config) {
            this.config = config || {};
            this.state = {
                top: 0,
                left: 0,
                static: this.config.static || false
            };
        }

        getHeight() {
            return document.querySelector(".ground-center-" + this.config.theme).getBoundingClientRect().height;
        }

        getWidth() {
            return document.querySelector(".ground-center-" + this.config.theme).getBoundingClientRect().width;
        }

        render(outlet, theme) {
            this.config.theme = theme;
            this.config.outlet = outlet;

            outlet.insertAdjacentHTML("beforeend",
            `
                <div class="ground-center-${theme}">

                </div>
            `);

            this.state.left = document.querySelector(".ground-center-" + theme).getBoundingClientRect().left;
            this.state.top = document.querySelector(".ground-center-" + theme).getBoundingClientRect().top;
        }
    }