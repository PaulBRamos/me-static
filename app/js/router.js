let gameObject = require("js/gameobject.js");
let stage = require("js/stage.js");
require("jsx/player.jsx");

export class Router {
    constructor() {
        window.onpopstate = function(event) {
            let route = event.state.route;
            this.loadRoute(route);
        }.bind(this);
    }

    loadRoute(route) {
        let stageIndex = window.Game.findStage(route);

        // remove the ReactJS Player component from the stage
        if (window.Game.player) {
            ReactDOM.unmountComponentAtNode(document.querySelector("#" + window.Game.activeStage.config.playerOutletId));
            
            if (window.Game.activeStage) {
                window.Game.activeStage.removeObject(window.Game.player);

                // clear the stage?
                if (window.Game.activeStage.config.name != route) {
                    window.Game.activeStage.clearStage();
                    window.Game.removeStage(window.Game.activeStage);
                }
            }
        }

        switch (route) {
            case "home":
            case "":
                if (route === "") {
                    route = "home";
                }

                console.log(window.Game.stages);

                if (stageIndex !== false) {
                    window.Game.activeStage = window.Game.stages[stageIndex];
                }
                else {
                    // stage has never been created, so create it.
                    let mainStage = new stage.Stage({
                        name: route,
                        theme: "mountains",
                        targetOutletSelector: "#stage",
                        playerOutletId: "player",
                        gameObjects: [
                            // ground
                            new gameObject.GameObject({
                                classPrefix: "ground-center-"
                            },{ static: true, type: "ground" }),
                            // About stage tunnel
                            new gameObject.GameObject({
                                classPrefix: "tunnel-",
                                label: "About"
                            }, { top: 1, left: 300, type: "tunnel"}),
                            // Skills stage tunnel
                            new gameObject.GameObject({
                                classPrefix: "tunnel-",
                                label: "Skills"
                            }, { top: 1, left: 400, type: "tunnel" }),
                            // Experience stage tunnel
                            new gameObject.GameObject({
                                classPrefix: "tunnel-",
                                label: "Experience"
                            }, { top: 1, left: 500, type: "tunnel" })
                        ]
                    });

                    window.Game.stages.push(mainStage);
                    window.Game.activeStage = window.Game.stages[window.Game.findStage(route)];
                }
            break;
            case "about":
                if (stageIndex !== false) {
                    window.Game.activeStage = window.Game.stages[stageIndex];
                }
                else {
                    // stage has never been created, so create it.
                    let aboutStage = new stage.Stage({
                        name: "about",
                        theme: "mountains",
                        targetOutletSelector: "#stage",
                        playerOutletId: "player",
                        gameObjects: [
                            // ground
                            new gameObject.GameObject({
                                classPrefix: "ground-center-"
                            },{ static: true, type: "ground" }),
                            // Test Box
                            new gameObject.GameObject({
                                classPrefix: "box-",
                                float: true
                            }, { static: true, top: 170, left: 250, type: "box" })
                        ]
                    });

                    window.Game.stages.push(aboutStage);
                    window.Game.activeStage = window.Game.stages[window.Game.findStage(route)];
                }
            break;
        }

        if (route == "home") {
            route = "";
        }

        history.pushState({
            route: route,
        }, route, "/" + route);

        // load the player onto the stage
        // game is responsible for this since it's a React component
        // and his different requirements
        window.Game.loadPlayer();
    }
}