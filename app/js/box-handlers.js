let bounceBox = function() {
    let selectedElement = document.querySelector(this.config.idSelector);

    if (!this.config.hits) {
        return;
    }

    selectedElement.style.top = (this.state.top - 10) + "px";
    setTimeout(function() {
        selectedElement.style.top = this.state.top + "px";
    }.bind(this), 100);
};

// we assume context is set by caller on relevant game object
export function aboutBox() {
    bounceBox.call(this);

    let selectedElement = document.querySelector(this.config.idSelector),
        top = -140,
        left = -150;

    selectedElement.insertAdjacentHTML("beforeend",
    `
        <div class="info-panel" style="top: ${top}px; left: ${left}px;">
            I've been a software engineer for the past 10+ years, focusing largely on front-end architecture and development while working closely with
            back-ends written in PHP, NodeJS, and Python. Over the years I've also written small games in C++, 
            contributed to jQuery, hacked Android and iOS apps, researched optical networks, and been published.
        </div>
    `);

    if (this.config.hits > 0) {
        this.config.hits--;
    }

    selectedElement.classList.add("empty");
}

export function imageBox() {
    if (this.config.hits === 0) {
        return;
    }

    bounceBox.call(this);

    // TODO: Find the image width and position it based on that.
    let selectedElement = document.querySelector(this.config.idSelector),
        top = -45,
        left = -6;

    selectedElement.insertAdjacentHTML("beforeend",
    `
        <img class="box-image" src="${this.config.imageForBox}" style="top: ${top}px; left: ${left}px;" width=30>
    `);    

    if (this.config.hits > 0) {
        this.config.hits--;
    }

    selectedElement.classList.add("empty");
}