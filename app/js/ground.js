    export class Ground {
        constructor(config) {
            this.config = config;
            this.state = {};
        }

        render(outlet, theme) {
            console.log(outlet, theme);
            outlet.insertAdjacentHTML("beforeend",
            `
                <div class="ground-center-${theme}">

                </div>
            `);
        }
    }