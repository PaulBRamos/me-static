(function() {
  'use strict';

  var globals = typeof window === 'undefined' ? global : window;
  if (typeof globals.require === 'function') return;

  var modules = {};
  var cache = {};
  var aliases = {};
  var has = ({}).hasOwnProperty;

  var expRe = /^\.\.?(\/|$)/;
  var expand = function(root, name) {
    var results = [], part;
    var parts = (expRe.test(name) ? root + '/' + name : name).split('/');
    for (var i = 0, length = parts.length; i < length; i++) {
      part = parts[i];
      if (part === '..') {
        results.pop();
      } else if (part !== '.' && part !== '') {
        results.push(part);
      }
    }
    return results.join('/');
  };

  var dirname = function(path) {
    return path.split('/').slice(0, -1).join('/');
  };

  var localRequire = function(path) {
    return function expanded(name) {
      var absolute = expand(dirname(path), name);
      return globals.require(absolute, path);
    };
  };

  var initModule = function(name, definition) {
    var hot = null;
    hot = hmr && hmr.createHot(name);
    var module = {id: name, exports: {}, hot: hot};
    cache[name] = module;
    definition(module.exports, localRequire(name), module);
    return module.exports;
  };

  var expandAlias = function(name) {
    return aliases[name] ? expandAlias(aliases[name]) : name;
  };

  var _resolve = function(name, dep) {
    return expandAlias(expand(dirname(name), dep));
  };

  var require = function(name, loaderPath) {
    if (loaderPath == null) loaderPath = '/';
    var path = expandAlias(name);

    if (has.call(cache, path)) return cache[path].exports;
    if (has.call(modules, path)) return initModule(path, modules[path]);

    throw new Error("Cannot find module '" + name + "' from '" + loaderPath + "'");
  };

  require.alias = function(from, to) {
    aliases[to] = from;
  };

  var extRe = /\.[^.\/]+$/;
  var indexRe = /\/index(\.[^\/]+)?$/;
  var addExtensions = function(bundle) {
    if (extRe.test(bundle)) {
      var alias = bundle.replace(extRe, '');
      if (!has.call(aliases, alias) || aliases[alias].replace(extRe, '') === alias + '/index') {
        aliases[alias] = bundle;
      }
    }

    if (indexRe.test(bundle)) {
      var iAlias = bundle.replace(indexRe, '');
      if (!has.call(aliases, iAlias)) {
        aliases[iAlias] = bundle;
      }
    }
  };

  require.register = require.define = function(bundle, fn) {
    if (typeof bundle === 'object') {
      for (var key in bundle) {
        if (has.call(bundle, key)) {
          require.register(key, bundle[key]);
        }
      }
    } else {
      modules[bundle] = fn;
      delete cache[bundle];
      addExtensions(bundle);
    }
  };

  require.list = function() {
    var list = [];
    for (var item in modules) {
      if (has.call(modules, item)) {
        list.push(item);
      }
    }
    return list;
  };

  var hmr = globals._hmr && new globals._hmr(_resolve, require, modules, cache);
  require._cache = cache;
  require.hmr = hmr && hmr.wrap;
  require.brunch = true;
  globals.require = require;
})();

(function() {
var global = window;
var __makeRelativeRequire = function(require, mappings, pref) {
  var none = {};
  var tryReq = function(name, pref) {
    var val;
    try {
      val = require(pref + '/node_modules/' + name);
      return val;
    } catch (e) {
      if (e.toString().indexOf('Cannot find module') === -1) {
        throw e;
      }

      if (pref.indexOf('node_modules') !== -1) {
        var s = pref.split('/');
        var i = s.lastIndexOf('node_modules');
        var newPref = s.slice(0, i).join('/');
        return tryReq(name, newPref);
      }
    }
    return none;
  };
  return function(name) {
    if (name in mappings) name = mappings[name];
    if (!name) return;
    if (name[0] !== '.' && pref) {
      var val = tryReq(name, pref);
      if (val !== none) return val;
    }
    return require(name);
  }
};
require.register("js/box-handlers.js", function(exports, require, module) {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.aboutBox = aboutBox;
exports.imageBox = imageBox;
var bounceBox = function bounceBox() {
    var selectedElement = document.querySelector(this.config.idSelector);

    if (!this.config.hits) {
        return;
    }

    selectedElement.style.top = this.state.top - 10 + "px";
    setTimeout(function () {
        selectedElement.style.top = this.state.top + "px";
    }.bind(this), 100);
};

// we assume context is set by caller on relevant game object
function aboutBox() {
    bounceBox.call(this);

    var selectedElement = document.querySelector(this.config.idSelector),
        top = -140,
        left = -150;

    selectedElement.insertAdjacentHTML("beforeend", "\n        <div class=\"info-panel\" style=\"top: " + top + "px; left: " + left + "px;\">\n            I've been a software engineer for the past 10+ years, focusing largely on front-end architecture and development while working closely with\n            back-ends written in PHP, NodeJS, and Python. Over the years I've also written small games in C++, \n            contributed to jQuery, hacked Android and iOS apps, researched optical networks, and been published.\n        </div>\n    ");

    if (this.config.hits > 0) {
        this.config.hits--;
    }

    selectedElement.classList.add("empty");
}

function imageBox() {
    if (this.config.hits === 0) {
        return;
    }

    bounceBox.call(this);

    // TODO: Find the image width and position it based on that.
    var selectedElement = document.querySelector(this.config.idSelector),
        top = -45,
        left = -6;

    selectedElement.insertAdjacentHTML("beforeend", "\n        <img class=\"box-image\" src=\"" + this.config.imageForBox + "\" style=\"top: " + top + "px; left: " + left + "px;\" width=30>\n    ");

    if (this.config.hits > 0) {
        this.config.hits--;
    }

    selectedElement.classList.add("empty");
}
});

;require.register("js/collision.js", function(exports, require, module) {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.checkCollision = checkCollision;
function checkCollision(gameObjects) {
    for (var i in gameObjects) {
        var currentObject = gameObjects[i];

        // check against all the gameobjects
        for (var j in gameObjects) {
            var compareObject = gameObjects[j];

            if (currentObject == compareObject) {
                continue;
            }

            if (currentObject.state.type == "player" && !currentObject.isMounted() || compareObject.state.type == "player" && !compareObject.isMounted()) {
                return;
            }

            // bouncing off an object from the bottom
            if (currentObject.state.type != "ground" && compareObject.state.type != "ground" && currentObject.state.left + currentObject.getWidth() > compareObject.state.left && currentObject.state.left <= compareObject.state.left + compareObject.getWidth() && currentObject.state.top == compareObject.state.top + compareObject.getHeight()) {
                if (currentObject.state.type == "player") {
                    if (compareObject.state.type == "box") {
                        if (compareObject.config.onHitBottom) {
                            compareObject.config.onHitBottom.call(compareObject);
                        }
                    }
                    currentObject.state.top = compareObject.state.top + compareObject.getHeight();
                    currentObject.state.yAccel = 0;
                }
            }
            // collision for gravity y-axis on the top of the object
            else if (currentObject.state.top + currentObject.getHeight() >= compareObject.state.top && compareObject.state.top >= currentObject.state.top && currentObject.state.left + currentObject.getWidth() >= compareObject.state.left + 2 && currentObject.state.left <= compareObject.state.left + compareObject.getWidth() - 2) {

                    if (currentObject.state.type == "box") {
                        //return;
                    }

                    if (currentObject.state.type == "player") {
                        currentObject.state.isStandingOn = compareObject;
                    }

                    currentObject.state.top = compareObject.state.top - currentObject.getHeight();

                    currentObject.state.grounded = true;
                    currentObject.state.yAccel = 0.6;
                }
                // collision for X-Axis, ignoring the ground
                else if (currentObject.state.type != "ground" && compareObject.state.type != "ground" && currentObject.state.left + currentObject.getWidth() > compareObject.state.left && currentObject.state.left <= compareObject.state.left + compareObject.getWidth() && currentObject.state.top + currentObject.getHeight() > compareObject.state.top && currentObject.state.top < compareObject.state.top + compareObject.getHeight()) {

                        if (currentObject.state.type == "player") {
                            if (currentObject.state.left < compareObject.state.left) {
                                currentObject.state.left = compareObject.state.left - currentObject.getWidth();
                                if (!currentObject.state.grounded) {
                                    currentObject.state.acceleration = 0.5;
                                }
                            } else if (currentObject.state.left > compareObject.state.left) {
                                currentObject.state.left = compareObject.state.left + compareObject.getWidth();
                                if (!currentObject.state.grounded) {
                                    currentObject.state.acceleration = 0.5;
                                }
                            }
                        }
                    }
        }
    }
}
});

;require.register("js/gameobject.js", function(exports, require, module) {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GameObject = exports.GameObject = function () {
    function GameObject(config, state) {
        _classCallCheck(this, GameObject);

        this.config = config || {};
        if (state) {
            this.state = state || {};
        }
    }

    _createClass(GameObject, [{
        key: "checkInput",
        value: function checkInput() {
            if (this.config.checkInputHandler) {
                this.config.checkInputHandler.call(this);
            }
        }
    }, {
        key: "generateId",
        value: function generateId() {
            return '_' + Math.random().toString(36).substr(2, 9);
        }
    }, {
        key: "getHeight",
        value: function getHeight() {
            return document.querySelector(this.config.idSelector).getBoundingClientRect().height;
        }
    }, {
        key: "getWidth",
        value: function getWidth() {
            return document.querySelector(this.config.idSelector).getBoundingClientRect().width;
        }
    }, {
        key: "renderPosition",
        value: function renderPosition() {
            var selectedElement = document.querySelector(this.config.idSelector);

            if (this.config.label) {
                var selectedElementLabel = document.querySelector(this.config.labelIdSelector);

                if (this.config.labelPosition === "fixed") {
                    selectedElementLabel.style.position = "fixed";
                    selectedElementLabel.style.top = this.config.labelTop;
                    selectedElementLabel.style.left = this.config.labelLeft;
                    // selectedElementLabel.classList.remove("");
                    return;
                }

                var labelPositionTop = this.state.top - (this.config.labelOffset ? this.config.labelOffset : 40),
                    labelPositionLeft = this.state.left - selectedElementLabel.getBoundingClientRect().width / 2 + this.getWidth() / 2;

                selectedElementLabel.style.top = labelPositionTop + "px";
                selectedElementLabel.style.left = labelPositionLeft + "px";
            }

            if (this.state.static) {
                return;
            }

            selectedElement.style.top = this.state.top + "px";
            selectedElement.style.left = this.state.left + "px";
        }
    }, {
        key: "render",
        value: function render(outlet, theme) {
            this.config.theme = theme;
            this.config.outlet = outlet;
            this.config.id = this.generateId();
            this.config.idSelector = "#" + this.config.id;
            this.config.labelIdSelector = "#" + this.config.id + "-label";

            outlet.insertAdjacentHTML("beforeend", "\n            <div id=\"" + this.config.id + "\" class=\"" + this.config.classPrefix + theme + "\">\n\n            </div>\n        ");

            var selectedElement = void 0,
                selectedElementLabel = void 0;
            var animation = this.config.labelAnimation ? this.config.labelAnimation : "bounce";

            selectedElement = document.querySelector(this.config.idSelector);

            if (this.config.label) {

                outlet.insertAdjacentHTML("beforeend", "\n                <div id=\"" + this.config.id + "-label\" class=\"label " + animation + "\">\n                    " + this.config.label + "\n                </div>\n            ");
            }

            if (this.state.top) {
                selectedElement.style.top = this.state.top + "px";
            } else {
                this.state.top = selectedElement.getBoundingClientRect().top;
            }

            if (this.state.left) {
                selectedElement.style.left = this.state.left + "px";
            } else {
                this.state.left = selectedElement.getBoundingClientRect().left;
            }
        }
    }]);

    return GameObject;
}();
});

;require.register("js/input.js", function(exports, require, module) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.checkInput = checkInput;
var keyState = exports.keyState = {};

var keys = exports.keys = {
    LEFT: 37,
    RIGHT: 39,
    UP: 38,
    DOWN: 40
};

window.addEventListener('keydown', function (event) {
    keyState[event.keyCode] = true;
    event.preventDefault();
});

window.addEventListener('keyup', function (event) {
    keyState[event.keyCode] = false;
    event.preventDefault();
});

window.addEventListener('touchstart', function (event) {
    keyState[event.keyCode] = true;
    event.preventDefault();
});

window.addEventListener('touchend', function (event) {
    keyState[event.keyCode] = false;
    event.preventDefault();
});

function checkInput(gameObjects) {
    for (var i in gameObjects) {
        var gameObject = gameObjects[i];
        gameObject.checkInput();
    }
}
});

;require.register("js/physics.js", function(exports, require, module) {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.imposeGravity = imposeGravity;
var baseAcceleration = 0.6;

function imposeGravity(gameObjects) {
    for (var object in gameObjects) {
        var currObject = gameObjects[object];

        if (currObject.state.static) {
            continue;
        }

        if (!currObject.state.yAccel) {
            currObject.state.yAccel = baseAcceleration;
        }

        currObject.state.top = currObject.state.top + 1 * currObject.state.yAccel;
        currObject.state.yAccel += 0.1;
    }
}
});

;require.register("js/player-input-handler.js", function(exports, require, module) {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.checkInputForPlayer = checkInputForPlayer;
var input = require("js/input.js");
var keyState = input.keyState;
var keys = input.keys;
var fireOncePerPress = false;

function checkInputForPlayer() {
    var player = window.Game.player,
        action = player.IDLE_RIGHT,
        left = player.state.left,
        acceleration = player.state.acceleration,
        router = window.Game.router;

    if (keyState[keys.DOWN] === true) {
        if (!fireOncePerPress) {
            if (player.state.isStandingOn) {
                var route = player.state.isStandingOn.config.route;

                if (route) {
                    router.loadRoute(route);
                }
            }
        }
        fireOncePerPress = true;
    } else if (keyState[keys.DOWN] === false) {
        fireOncePerPress = false;
    }

    if (keyState[keys.LEFT] && keyState[keys.RIGHT]) {
        acceleration = 0;

        if (player.state.action == player.WALKING_RIGHT) {
            action = player.IDLE_RIGHT;
        } else if (player.state.action == player.WALKING_LEFT) {
            action = player.IDLE_LEFT;
        }
    }

    if (keyState[keys.UP]) {
        if (player.state.grounded) {
            player.state.yAccel = -3;
            player.state.grounded = false;
            player.state.isStandingOn = null;
        }
    }
    if (keyState[keys.LEFT]) {
        if (player.state.action == player.JUMP_RIGHT) {
            acceleration = acceleration / 4;
        }

        // reset acceleration to 0 if switching to opposite side
        if (player.state.action == player.WALKING_RIGHT) {
            acceleration = 0;
        }

        action = player.WALKING_LEFT;

        left = left - 1 * acceleration;

        if (acceleration < 1) {
            acceleration += 0.05;
        }
    } else if (keyState[keys.RIGHT]) {
        if (player.state.action == player.JUMP_LEFT) {
            acceleration = acceleration / 4;
        }

        // reset acceleration to 0 if switching to opposite side
        if (player.state.action == player.WALKING_LEFT) {
            acceleration = 0;
        }
        action = player.WALKING_RIGHT;
        left = left + 1 * acceleration;

        if (acceleration < 1) {
            acceleration += 0.03;
        }
    } else {
        /* de-accelrate to stop */
        if (acceleration > 0) {
            if (player.state.grounded) {
                acceleration -= 0.02;
            }
        } else {
            acceleration = 0;
        }

        // We need to pick the appropriate de-accel animation and also
        // change that to the appropriate idle sprite depending on current state
        // and value of acceleration
        if (player.state.action == player.WALKING_LEFT || player.state.action == player.IDLE_LEFT || player.state.action == player.JUMP_LEFT) {
            if (acceleration === 0) {
                if (player.state.grounded) {
                    action = player.IDLE_LEFT;
                } else {
                    action = player.JUMP_LEFT;
                }
            } else {
                action = player.WALKING_LEFT;
            }
            left = left - 1 * acceleration;
        } else if (player.state.action == player.WALKING_RIGHT || player.state.action == player.IDLE_RIGHT || player.state.action == player.JUMP_RIGHT) {
            if (acceleration === 0) {
                if (player.state.grounded) {
                    action = player.IDLE_RIGHT;
                } else {
                    action = player.JUMP_RIGHT;
                }
            } else {
                action = player.WALKING_RIGHT;
            }
            left = left + 1 * acceleration;
        }
    }

    if (!player.isMounted()) {
        return;
    }

    // note: add this to a global namespace for the game
    player.setState({
        action: action,
        left: left,
        acceleration: acceleration
    });
}
});

;require.register("js/render.js", function(exports, require, module) {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.render = render;
function render(gameObjects) {
    for (var i in gameObjects) {
        if (gameObjects[i].renderPosition) {
            gameObjects[i].renderPosition();
        }
    }
}
});

;require.register("js/router.js", function(exports, require, module) {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var gameObject = require("js/gameobject.js");
var stage = require("js/stage.js");
var boxHandlers = require("js/box-handlers.js");
require("jsx/player.jsx");

var Router = exports.Router = function () {
    function Router() {
        _classCallCheck(this, Router);

        window.onpopstate = function (event) {
            var route = event.state.route;
            this.loadRoute(route);
        }.bind(this);
    }

    _createClass(Router, [{
        key: "loadRoute",
        value: function loadRoute(route) {
            var stageIndex = window.Game.findStage(route);

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

                    if (stageIndex !== false) {
                        window.Game.activeStage = window.Game.stages[stageIndex];
                    } else {
                        // stage has never been created, so create it.
                        var mainStage = new stage.Stage({
                            name: route,
                            theme: "mountains",
                            targetOutletSelector: "#stage",
                            playerOutletId: "player",
                            gameObjects: [
                            // ground
                            new gameObject.GameObject({
                                classPrefix: "ground-center-"
                            }, { static: true, type: "ground" }),
                            // About stage tunnel
                            new gameObject.GameObject({
                                classPrefix: "tunnel-",
                                label: "About",
                                route: "about"
                            }, { top: 1, left: 300, type: "tunnel" }),
                            // Skills stage tunnel
                            new gameObject.GameObject({
                                classPrefix: "tunnel-",
                                label: "Skills",
                                route: "skills"
                            }, { top: 1, left: 400, type: "tunnel" }),
                            // Experience stage tunnel
                            new gameObject.GameObject({
                                classPrefix: "tunnel-",
                                label: "Experience",
                                route: "experience"
                            }, { top: 1, left: 500, type: "tunnel" })]
                        });

                        window.Game.stages.push(mainStage);
                        window.Game.activeStage = window.Game.stages[window.Game.findStage(route)];
                    }
                    break;
                case "about":
                    if (stageIndex !== false) {
                        window.Game.activeStage = window.Game.stages[stageIndex];
                    } else {
                        // stage has never been created, so create it.
                        var aboutStage = new stage.Stage({
                            name: "about",
                            theme: "mountains",
                            targetOutletSelector: "#stage",
                            playerOutletId: "player",
                            gameObjects: [
                            // ground
                            new gameObject.GameObject({
                                classPrefix: "ground-center-"
                            }, { static: true, type: "ground" }),
                            // About Box
                            new gameObject.GameObject({
                                classPrefix: "box-",
                                float: true,
                                onHitBottom: boxHandlers.aboutBox,
                                hits: 1
                            }, { static: true, top: 170, left: 250, type: "box" }),
                            // Home tunnel
                            new gameObject.GameObject({
                                classPrefix: "tunnel-",
                                label: "Home",
                                route: "home"
                            }, { top: 1, left: 400, type: "tunnel" })]
                        });

                        window.Game.stages.push(aboutStage);
                        window.Game.activeStage = window.Game.stages[window.Game.findStage(route)];
                    }
                    break;
                case "skills":
                    if (stageIndex !== false) {
                        window.Game.activeStage = window.Game.stages[stageIndex];
                    } else {
                        // stage has never been created, so create it.
                        var skillsStage = new stage.Stage({
                            name: "skills",
                            theme: "mountains",
                            targetOutletSelector: "#stage",
                            playerOutletId: "player",
                            gameObjects: [
                            // ground
                            new gameObject.GameObject({
                                classPrefix: "ground-center-"
                            }, { static: true, type: "ground" }),
                            // HTML5 Box
                            new gameObject.GameObject({
                                classPrefix: "box-",
                                float: true,
                                onHitBottom: boxHandlers.imageBox,
                                imageForBox: "img/html5_logo_pixel.png",
                                hits: 1,
                                label: "-->HTML5",
                                labelPosition: "fixed",
                                labelTop: "15px",
                                labelLeft: "15px",
                                labelAnimation: "shimmer"
                                // labelOffset: 60
                            }, { static: true, top: 170, left: 250, type: "box" }),
                            // JavaScript Box
                            new gameObject.GameObject({
                                classPrefix: "box-",
                                float: true,
                                onHitBottom: boxHandlers.imageBox,
                                imageForBox: "img/js_logo.png",
                                hits: 1,
                                label: "-->JavaScript (ES6)",
                                labelPosition: "fixed",
                                labelTop: "25px",
                                labelLeft: "15px",
                                labelAnimation: "shimmer"
                            }, { static: true, top: 170, left: 300, type: "box" }),
                            // CSS Box
                            new gameObject.GameObject({
                                classPrefix: "box-",
                                float: true,
                                onHitBottom: boxHandlers.imageBox,
                                imageForBox: "img/css_logo.png",
                                hits: 1,
                                label: "-->CSS3",
                                labelPosition: "fixed",
                                labelTop: "35px",
                                labelLeft: "15px",
                                labelAnimation: "shimmer"
                            }, { static: true, top: 170, left: 350, type: "box" }),
                            // React JS Box
                            new gameObject.GameObject({
                                classPrefix: "box-",
                                float: true,
                                onHitBottom: boxHandlers.imageBox,
                                imageForBox: "img/react_logo.png",
                                hits: 1,
                                label: "-->React JS",
                                labelPosition: "fixed",
                                labelTop: "45px",
                                labelLeft: "15px",
                                labelAnimation: "shimmer"
                            }, { static: true, top: 170, left: 400, type: "box" }),
                            // Backbone JS Box
                            new gameObject.GameObject({
                                classPrefix: "box-",
                                float: true,
                                onHitBottom: boxHandlers.imageBox,
                                imageForBox: "img/backbone_logo.png",
                                hits: 1,
                                label: "-->BackBone JS",
                                labelPosition: "fixed",
                                labelTop: "55px",
                                labelLeft: "15px",
                                labelAnimation: "shimmer"
                            }, { static: true, top: 170, left: 450, type: "box" }),
                            // Grunt Logo
                            new gameObject.GameObject({
                                classPrefix: "box-",
                                float: true,
                                onHitBottom: boxHandlers.imageBox,
                                imageForBox: "img/grunt_logo.png",
                                hits: 1,
                                label: "-->Grunt",
                                labelPosition: "fixed",
                                labelTop: "65px",
                                labelLeft: "15px",
                                labelAnimation: "shimmer"
                            }, { static: true, top: 170, left: 500, type: "box" }),
                            // Brunch Logo
                            new gameObject.GameObject({
                                classPrefix: "box-",
                                float: true,
                                onHitBottom: boxHandlers.imageBox,
                                imageForBox: "img/brunch_logo.png",
                                hits: 1,
                                label: "-->Brunch",
                                labelPosition: "fixed",
                                labelTop: "75px",
                                labelLeft: "15px",
                                labelAnimation: "shimmer"
                            }, { static: true, top: 170, left: 550, type: "box" }),
                            // Home tunnel
                            new gameObject.GameObject({
                                classPrefix: "tunnel-",
                                label: "Home",
                                route: "home"
                            }, { top: 1, left: 600, type: "tunnel" })]
                        });

                        window.Game.stages.push(skillsStage);
                        window.Game.activeStage = window.Game.stages[window.Game.findStage(route)];
                    }
                    break;
                case "experience":
                    var experienceStage = new stage.Stage({
                        name: "experience",
                        theme: "mountains",
                        targetOutletSelector: "#stage",
                        playerOutletId: "player",
                        gameObjects: [
                        // ground
                        new gameObject.GameObject({
                            classPrefix: "ground-center-"
                        }, { static: true, type: "ground" }),
                        // // About Box
                        // new gameObject.GameObject({
                        //     classPrefix: "box-",
                        //     float: true,
                        //     onHitBottom: boxHandlers.aboutBox,
                        //     hits: 1
                        // }, { static: true, top: 170, left: 250, type: "box" }),
                        // Home tunnel
                        new gameObject.GameObject({
                            classPrefix: "tunnel-",
                            label: "Home",
                            route: "home"
                        }, { top: 1, left: 400, type: "tunnel" })]
                    });

                    window.Game.stages.push(experienceStage);
                    window.Game.activeStage = window.Game.stages[window.Game.findStage(route)];
                    break;
            }

            if (route == "home") {
                route = "";
            }

            history.pushState({
                route: route
            }, route, "/" + route);

            // load the player onto the stage
            // game is responsible for this since it's a React component
            // and his different requirements
            window.Game.loadPlayer();
        }
    }]);

    return Router;
}();
});

;require.register("js/stage.js", function(exports, require, module) {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Stage = exports.Stage = function () {
    function Stage(config) {
        _classCallCheck(this, Stage);

        this.config = config;
        this.gameObjects = [];

        this.render();
    }

    _createClass(Stage, [{
        key: "generateId",
        value: function generateId() {
            return '_' + Math.random().toString(36).substr(2, 9);
        }
    }, {
        key: "removeObject",
        value: function removeObject(object) {
            for (var i in this.gameObjects) {
                if (this.gameObjects[i] == object) {
                    this.gameObjects.splice(i, 1);
                }
            }
        }
    }, {
        key: "clearStage",
        value: function clearStage() {
            var stageOutlet = document.querySelector(this.config.targetOutletSelector);
            stageOutlet.style.opacity = 0;
            stageOutlet.innerHTML = "";
        }
    }, {
        key: "addObject",
        value: function addObject(object) {
            this.gameObjects.push(object);
            object.render(document.querySelector(this.config.targetOutletSelector), this.config.theme);
        }
    }, {
        key: "render",
        value: function render() {
            var outlet = document.querySelector(this.config.targetOutletSelector),
                el = document.createElement("div"),
                pageName = this.config.name;

            this.config.id = this.generateId();
            this.config.idSelector = "#" + this.config.id;

            if (pageName == "home") {}
            // pageName = "";


            // render
            outlet.insertAdjacentHTML("beforeend", "\n            <div id=\"player\"></div>\n            \n            <div id=\"" + this.config.id + "\" class=\"background-" + this.config.theme + "\">\n                <div class=\"page-heading\">\n                    " + pageName + "\n                </div>\n            </div>\n        ");

            if (this.config.gameObjects) {
                for (var i in this.config.gameObjects) {
                    var gameObject = this.config.gameObjects[i];
                    this.addObject(gameObject);
                }
            }

            setTimeout(function () {
                outlet.style.opacity = 1;
            }, 500);
        }
    }]);

    return Stage;
}();
});

;require.register("jsx/game.jsx", function(exports, require, module) {
let input = require("js/input");
let physics = require("js/physics");
let collision = require("js/collision");
let render = require("js/render.js");
let router = require("js/router.js");

window.Game = {
    stages: [],
    activeStage: null,
    router: null,

    findStage: function(name) {
        for (var i in this.stages) {
            if (this.stages[i].config.name == name) {
                return i;
            }
        }

        return false;
    },

    removeStage: function(stage) {
        var indexOfStage = this.findStage(stage);

        if (stage) {
            this.stages.splice(indexOfStage, 1);
        }
    },

    loadPlayer: function() {
        // Initialize the player separately since he's a react object
        this.player = ReactDOM.render(
            React.createElement(Player, null),
            document.getElementById(this.activeStage.config.playerOutletId)
        );
        this.activeStage.gameObjects.push(this.player);
    },

    init: function() {
        this.router = new router.Router();

        this.router.loadRoute("home");

        console.log("Setting up game loop");
        window.requestAnimationFrame(this.loop.bind(this));
    },
    loop: function() {
        input.checkInput(this.activeStage.gameObjects);

        physics.imposeGravity(this.activeStage.gameObjects);

        collision.checkCollision(this.activeStage.gameObjects);

        render.render(this.activeStage.gameObjects);

        setTimeout(this.loop.bind(this), 10);
    }
};
});

require.register("jsx/initialize.jsx", function(exports, require, module) {
require("jsx/game");

document.addEventListener('DOMContentLoaded', function()  {
    console.log('Initializing App ...');
    window.Game.init();
    console.log("Game initialization complete");
});
});

require.register("jsx/player.jsx", function(exports, require, module) {
let playerInputHandler = require("js/player-input-handler.js");

window.Player = React.createClass({displayName: 'Player',
    IDLE_RIGHT: "idle-right",
    IDLE_LEFT: "idle-left",
    WALKING_RIGHT: "walking-right",
    WALKING_LEFT: "walking-left",
    JUMP_RIGHT: "jump-right",
    JUMP_LEFT: "jump-left",

    getInitialState: function () {
        return {
            action: this.IDLE_RIGHT,
            top: 0,
            left: 200,
            accelration: 1,
            type: "player",
            grounded: null,
            isStandingOn: null,
        };
    },
    checkInput: function() {
        playerInputHandler.checkInputForPlayer();
    },
    getWidth: function() {
        return document.querySelector(".player").getBoundingClientRect().width;
    },
    getHeight: function() {
        return document.querySelector(".player").getBoundingClientRect().height;
    },
    render: function () {
        if (!this.state.grounded) {
            if (this.state.action == this.WALKING_RIGHT ||
                this.state.action == this.IDLE_RIGHT) {
                this.state.action = this.JUMP_RIGHT;
                // console.log("change to rogjt jump");
            }
            else if (this.state.action == this.WALKING_LEFT ||
                this.state.action == this.IDLE_LEFT) {
                // console.log("change to left jump");
                this.state.action = window.Game.player.JUMP_LEFT;
            }
        }

        var playerClass = "player " + this.state.action;

        var style = {
            top: this.state.top,
            left: this.state.left
        };

        return (
            React.createElement("div", {className: playerClass, style: style, ref: "player"}
                
            )
        );
    }
  });
});

require.register("___globals___", function(exports, require, module) {
  
});})();require('___globals___');


//# sourceMappingURL=app.js.map