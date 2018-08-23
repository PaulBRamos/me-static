/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/jsx/initialize.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/assets/css/box.css":
/*!********************************!*\
  !*** ./app/assets/css/box.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader!./box.css */ \"./node_modules/css-loader/index.js!./app/assets/css/box.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./app/assets/css/box.css?");

/***/ }),

/***/ "./app/assets/css/main.css":
/*!*********************************!*\
  !*** ./app/assets/css/main.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader!./main.css */ \"./node_modules/css-loader/index.js!./app/assets/css/main.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./app/assets/css/main.css?");

/***/ }),

/***/ "./app/assets/css/player.css":
/*!***********************************!*\
  !*** ./app/assets/css/player.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader!./player.css */ \"./node_modules/css-loader/index.js!./app/assets/css/player.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./app/assets/css/player.css?");

/***/ }),

/***/ "./app/assets/font/emulogic.ttf":
/*!**************************************!*\
  !*** ./app/assets/font/emulogic.ttf ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"fonts/emulogic.ttf\";\n\n//# sourceURL=webpack:///./app/assets/font/emulogic.ttf?");

/***/ }),

/***/ "./app/assets/img/box.png":
/*!********************************!*\
  !*** ./app/assets/img/box.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"26a50e4c38792304fade9eff5b455313.png\";\n\n//# sourceURL=webpack:///./app/assets/img/box.png?");

/***/ }),

/***/ "./app/assets/img/mario_sprite_sheet.png":
/*!***********************************************!*\
  !*** ./app/assets/img/mario_sprite_sheet.png ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"445e81e3bb19ba55b2a62af125967ddf.png\";\n\n//# sourceURL=webpack:///./app/assets/img/mario_sprite_sheet.png?");

/***/ }),

/***/ "./app/assets/img/mario_title.png":
/*!****************************************!*\
  !*** ./app/assets/img/mario_title.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"2e0933edf10b8cd3f325362cd9879b3b.png\";\n\n//# sourceURL=webpack:///./app/assets/img/mario_title.png?");

/***/ }),

/***/ "./app/js/box-handlers.js":
/*!********************************!*\
  !*** ./app/js/box-handlers.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.aboutBox = aboutBox;\nexports.imageBox = imageBox;\nvar bounceBox = function bounceBox() {\n    var selectedElement = document.querySelector(this.config.idSelector);\n\n    if (!this.config.hits) {\n        return;\n    }\n\n    selectedElement.style.top = this.state.top - 10 + \"px\";\n    setTimeout(function () {\n        selectedElement.style.top = this.state.top + \"px\";\n    }.bind(this), 100);\n};\n\n// we assume context is set by caller on relevant game object\nfunction aboutBox() {\n    bounceBox.call(this);\n\n    var selectedElement = document.querySelector(this.config.idSelector),\n        top = -140,\n        left = -150;\n\n    selectedElement.insertAdjacentHTML(\"beforeend\", \"\\n        <div class=\\\"info-panel\\\" style=\\\"top: \" + top + \"px; left: \" + left + \"px;\\\">\\n            I've been a software engineer for the past 10+ years, focusing largely on front-end architecture and development while working closely with\\n            back-ends written in PHP, NodeJS, and Python. Over the years I've also written small games in C++, \\n            contributed to jQuery, hacked Android and iOS apps, researched optical networks, and been published.\\n        </div>\\n    \");\n\n    if (this.config.hits > 0) {\n        this.config.hits--;\n    }\n\n    selectedElement.classList.add(\"empty\");\n}\n\nfunction imageBox() {\n    if (this.config.hits === 0) {\n        return;\n    }\n\n    bounceBox.call(this);\n\n    // TODO: Find the image width and position it based on that.\n    var selectedElement = document.querySelector(this.config.idSelector),\n        top = -45,\n        left = -6;\n\n    selectedElement.insertAdjacentHTML(\"beforeend\", \"\\n        <img class=\\\"box-image\\\" src=\\\"\" + this.config.imageForBox + \"\\\" style=\\\"top: \" + top + \"px; left: \" + left + \"px;\\\" width=30>\\n    \");\n\n    if (this.config.hits > 0) {\n        this.config.hits--;\n    }\n\n    selectedElement.classList.add(\"empty\");\n}\n\n//# sourceURL=webpack:///./app/js/box-handlers.js?");

/***/ }),

/***/ "./app/js/collision.js":
/*!*****************************!*\
  !*** ./app/js/collision.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.checkCollision = checkCollision;\nfunction checkCollision(gameObjects) {\n    for (var i in gameObjects) {\n        var currentObject = gameObjects[i];\n\n        // check against all the gameobjects\n        for (var j in gameObjects) {\n            var compareObject = gameObjects[j];\n\n            if (currentObject == compareObject) {\n                continue;\n            }\n\n            if (currentObject.state.type == \"player\" && !currentObject.isMounted() || compareObject.state.type == \"player\" && !compareObject.isMounted()) {\n                return;\n            }\n\n            // bouncing off an object from the bottom\n            if (currentObject.state.type != \"ground\" && compareObject.state.type != \"ground\" && currentObject.state.left + currentObject.getWidth() > compareObject.state.left && currentObject.state.left <= compareObject.state.left + compareObject.getWidth() && currentObject.state.top == compareObject.state.top + compareObject.getHeight()) {\n                if (currentObject.state.type == \"player\") {\n                    if (compareObject.state.type == \"box\") {\n                        if (compareObject.config.onHitBottom) {\n                            compareObject.config.onHitBottom.call(compareObject);\n                        }\n                    }\n                    currentObject.state.top = compareObject.state.top + compareObject.getHeight();\n                    currentObject.state.yAccel = 0;\n                }\n            }\n            // collision for gravity y-axis on the top of the object\n            else if (currentObject.state.top + currentObject.getHeight() >= compareObject.state.top && compareObject.state.top >= currentObject.state.top && currentObject.state.left + currentObject.getWidth() >= compareObject.state.left + 2 && currentObject.state.left <= compareObject.state.left + compareObject.getWidth() - 2) {\n\n                    if (currentObject.state.type == \"box\") {\n                        //return;\n                    }\n\n                    if (currentObject.state.type == \"player\") {\n                        currentObject.state.isStandingOn = compareObject;\n                    }\n\n                    currentObject.state.top = compareObject.state.top - currentObject.getHeight();\n\n                    currentObject.state.grounded = true;\n                    currentObject.state.yAccel = 0.6;\n                }\n                // collision for X-Axis, ignoring the ground\n                else if (currentObject.state.type != \"ground\" && compareObject.state.type != \"ground\" && currentObject.state.left + currentObject.getWidth() > compareObject.state.left && currentObject.state.left <= compareObject.state.left + compareObject.getWidth() && currentObject.state.top + currentObject.getHeight() > compareObject.state.top && currentObject.state.top < compareObject.state.top + compareObject.getHeight()) {\n\n                        if (currentObject.state.type == \"player\") {\n                            if (currentObject.state.left < compareObject.state.left) {\n                                currentObject.state.left = compareObject.state.left - currentObject.getWidth();\n                                if (!currentObject.state.grounded) {\n                                    currentObject.state.acceleration = 0.5;\n                                }\n                            } else if (currentObject.state.left > compareObject.state.left) {\n                                currentObject.state.left = compareObject.state.left + compareObject.getWidth();\n                                if (!currentObject.state.grounded) {\n                                    currentObject.state.acceleration = 0.5;\n                                }\n                            }\n                        }\n                    }\n        }\n    }\n}\n\n//# sourceURL=webpack:///./app/js/collision.js?");

/***/ }),

/***/ "./app/js/gameobject.js":
/*!******************************!*\
  !*** ./app/js/gameobject.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar GameObject = exports.GameObject = function () {\n    function GameObject(config, state) {\n        _classCallCheck(this, GameObject);\n\n        this.config = config || {};\n        if (state) {\n            this.state = state || {};\n        }\n    }\n\n    _createClass(GameObject, [{\n        key: \"checkInput\",\n        value: function checkInput() {\n            if (this.config.checkInputHandler) {\n                this.config.checkInputHandler.call(this);\n            }\n        }\n    }, {\n        key: \"generateId\",\n        value: function generateId() {\n            return '_' + Math.random().toString(36).substr(2, 9);\n        }\n    }, {\n        key: \"getHeight\",\n        value: function getHeight() {\n            return document.querySelector(this.config.idSelector).getBoundingClientRect().height;\n        }\n    }, {\n        key: \"getWidth\",\n        value: function getWidth() {\n            return document.querySelector(this.config.idSelector).getBoundingClientRect().width;\n        }\n    }, {\n        key: \"renderPosition\",\n        value: function renderPosition() {\n            var selectedElement = document.querySelector(this.config.idSelector);\n\n            if (this.config.label) {\n                var selectedElementLabel = document.querySelector(this.config.labelIdSelector);\n\n                if (this.config.labelPosition === \"fixed\") {\n                    selectedElementLabel.style.position = \"fixed\";\n                    selectedElementLabel.style.top = this.config.labelTop;\n                    selectedElementLabel.style.left = this.config.labelLeft;\n                    // selectedElementLabel.classList.remove(\"\");\n                    return;\n                }\n\n                var labelPositionTop = this.state.top - (this.config.labelOffset ? this.config.labelOffset : 40),\n                    labelPositionLeft = this.state.left - selectedElementLabel.getBoundingClientRect().width / 2 + this.getWidth() / 2;\n\n                selectedElementLabel.style.top = labelPositionTop + \"px\";\n                selectedElementLabel.style.left = labelPositionLeft + \"px\";\n            }\n\n            if (this.state.static) {\n                return;\n            }\n\n            selectedElement.style.top = this.state.top + \"px\";\n            selectedElement.style.left = this.state.left + \"px\";\n        }\n    }, {\n        key: \"render\",\n        value: function render(outlet, theme) {\n            this.config.theme = theme;\n            this.config.outlet = outlet;\n            this.config.id = this.generateId();\n            this.config.idSelector = \"#\" + this.config.id;\n            this.config.labelIdSelector = \"#\" + this.config.id + \"-label\";\n\n            outlet.insertAdjacentHTML(\"beforeend\", \"\\n            <div id=\\\"\" + this.config.id + \"\\\" class=\\\"\" + this.config.classPrefix + theme + \"\\\">\\n\\n            </div>\\n        \");\n\n            var selectedElement = void 0,\n                selectedElementLabel = void 0;\n            var animation = this.config.labelAnimation ? this.config.labelAnimation : \"bounce\";\n\n            selectedElement = document.querySelector(this.config.idSelector);\n\n            if (this.config.label) {\n\n                outlet.insertAdjacentHTML(\"beforeend\", \"\\n                <div id=\\\"\" + this.config.id + \"-label\\\" class=\\\"label \" + animation + \"\\\">\\n                    \" + this.config.label + \"\\n                </div>\\n            \");\n            }\n\n            if (this.state.top) {\n                selectedElement.style.top = this.state.top + \"px\";\n            } else {\n                this.state.top = selectedElement.getBoundingClientRect().top;\n            }\n\n            if (this.state.left) {\n                selectedElement.style.left = this.state.left + \"px\";\n            } else {\n                this.state.left = selectedElement.getBoundingClientRect().left;\n            }\n        }\n    }]);\n\n    return GameObject;\n}();\n\n//# sourceURL=webpack:///./app/js/gameobject.js?");

/***/ }),

/***/ "./app/js/input.js":
/*!*************************!*\
  !*** ./app/js/input.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.checkInput = checkInput;\nvar keyState = exports.keyState = {};\n\nvar keys = exports.keys = {\n    LEFT: 37,\n    RIGHT: 39,\n    UP: 38,\n    DOWN: 40\n};\n\nwindow.addEventListener('keydown', function (event) {\n    keyState[event.keyCode] = true;\n});\n\nwindow.addEventListener('keyup', function (event) {\n    keyState[event.keyCode] = false;\n});\n\nfunction checkInput(gameObjects) {\n    for (var i in gameObjects) {\n        var gameObject = gameObjects[i];\n        gameObject.checkInput();\n    }\n}\n\n//# sourceURL=webpack:///./app/js/input.js?");

/***/ }),

/***/ "./app/js/physics.js":
/*!***************************!*\
  !*** ./app/js/physics.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.imposeGravity = imposeGravity;\nvar baseAcceleration = 0.6;\n\nfunction imposeGravity(gameObjects) {\n    for (var object in gameObjects) {\n        var currObject = gameObjects[object];\n\n        if (currObject.state.static) {\n            continue;\n        }\n\n        if (!currObject.state.yAccel) {\n            currObject.state.yAccel = baseAcceleration;\n        }\n\n        currObject.state.top = currObject.state.top + 1 * currObject.state.yAccel;\n        currObject.state.yAccel += 0.1;\n    }\n}\n\n//# sourceURL=webpack:///./app/js/physics.js?");

/***/ }),

/***/ "./app/js/player-input-handler.js":
/*!****************************************!*\
  !*** ./app/js/player-input-handler.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.checkInputForPlayer = checkInputForPlayer;\nvar input = __webpack_require__(/*! ./input.js */ \"./app/js/input.js\");\nvar keyState = input.keyState;\nvar keys = input.keys;\nvar fireOncePerPress = false;\n\nfunction checkInputForPlayer() {\n    var player = window.Game.player,\n        action = player.IDLE_RIGHT,\n        left = player.state.left,\n        acceleration = player.state.acceleration,\n        router = window.Game.router;\n\n    if (keyState[keys.DOWN] === true) {\n        if (!fireOncePerPress) {\n            if (player.state.isStandingOn) {\n                var route = player.state.isStandingOn.config.route;\n\n                if (route) {\n                    router.loadRoute(route);\n                }\n            }\n        }\n        fireOncePerPress = true;\n    } else if (keyState[keys.DOWN] === false) {\n        fireOncePerPress = false;\n    }\n\n    if (keyState[keys.LEFT] && keyState[keys.RIGHT]) {\n        acceleration = 0;\n\n        if (player.state.action == player.WALKING_RIGHT) {\n            action = player.IDLE_RIGHT;\n        } else if (player.state.action == player.WALKING_LEFT) {\n            action = player.IDLE_LEFT;\n        }\n    }\n\n    if (keyState[keys.UP]) {\n        if (player.state.grounded) {\n            player.state.yAccel = -3;\n            player.state.grounded = false;\n            player.state.isStandingOn = null;\n        }\n    }\n    if (keyState[keys.LEFT]) {\n        if (player.state.action == player.JUMP_RIGHT) {\n            acceleration = acceleration / 4;\n        }\n\n        // reset acceleration to 0 if switching to opposite side\n        if (player.state.action == player.WALKING_RIGHT) {\n            acceleration = 0;\n        }\n\n        action = player.WALKING_LEFT;\n\n        left = left - 1 * acceleration;\n\n        if (acceleration < 1) {\n            acceleration += 0.05;\n        }\n    } else if (keyState[keys.RIGHT]) {\n        if (player.state.action == player.JUMP_LEFT) {\n            acceleration = acceleration / 4;\n        }\n\n        // reset acceleration to 0 if switching to opposite side\n        if (player.state.action == player.WALKING_LEFT) {\n            acceleration = 0;\n        }\n        action = player.WALKING_RIGHT;\n        left = left + 1 * acceleration;\n\n        if (acceleration < 1) {\n            acceleration += 0.03;\n        }\n    } else {\n        /* de-accelrate to stop */\n        if (acceleration > 0) {\n            if (player.state.grounded) {\n                acceleration -= 0.02;\n            }\n        } else {\n            acceleration = 0;\n        }\n\n        // We need to pick the appropriate de-accel animation and also\n        // change that to the appropriate idle sprite depending on current state\n        // and value of acceleration\n        if (player.state.action == player.WALKING_LEFT || player.state.action == player.IDLE_LEFT || player.state.action == player.JUMP_LEFT) {\n            if (acceleration === 0) {\n                if (player.state.grounded) {\n                    action = player.IDLE_LEFT;\n                } else {\n                    action = player.JUMP_LEFT;\n                }\n            } else {\n                action = player.WALKING_LEFT;\n            }\n            left = left - 1 * acceleration;\n        } else if (player.state.action == player.WALKING_RIGHT || player.state.action == player.IDLE_RIGHT || player.state.action == player.JUMP_RIGHT) {\n            if (acceleration === 0) {\n                if (player.state.grounded) {\n                    action = player.IDLE_RIGHT;\n                } else {\n                    action = player.JUMP_RIGHT;\n                }\n            } else {\n                action = player.WALKING_RIGHT;\n            }\n            left = left + 1 * acceleration;\n        }\n    }\n\n    if (!player.isMounted()) {\n        return;\n    }\n\n    // note: add this to a global namespace for the game\n    player.setState({\n        action: action,\n        left: left,\n        acceleration: acceleration\n    });\n}\n\n//# sourceURL=webpack:///./app/js/player-input-handler.js?");

/***/ }),

/***/ "./app/js/render.js":
/*!**************************!*\
  !*** ./app/js/render.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.render = render;\nfunction render(gameObjects) {\n    for (var i in gameObjects) {\n        if (gameObjects[i].renderPosition) {\n            gameObjects[i].renderPosition();\n        }\n    }\n}\n\n//# sourceURL=webpack:///./app/js/render.js?");

/***/ }),

/***/ "./app/js/router.js":
/*!**************************!*\
  !*** ./app/js/router.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar gameObject = __webpack_require__(/*! ./gameobject.js */ \"./app/js/gameobject.js\");\nvar stage = __webpack_require__(/*! ./stage.js */ \"./app/js/stage.js\");\nvar boxHandlers = __webpack_require__(/*! ./box-handlers.js */ \"./app/js/box-handlers.js\");\n__webpack_require__(/*! ../jsx/player.jsx */ \"./app/jsx/player.jsx\");\n\nvar Router = exports.Router = function () {\n    function Router() {\n        _classCallCheck(this, Router);\n\n        window.onpopstate = function (event) {\n            var route = event.state.route;\n            this.loadRoute(route);\n        }.bind(this);\n    }\n\n    _createClass(Router, [{\n        key: \"loadRoute\",\n        value: function loadRoute(route) {\n            var stageIndex = window.Game.findStage(route);\n\n            // remove the ReactJS Player component from the stage\n            if (window.Game.player) {\n                ReactDOM.unmountComponentAtNode(document.querySelector(\"#\" + window.Game.activeStage.config.playerOutletId));\n\n                if (window.Game.activeStage) {\n                    window.Game.activeStage.removeObject(window.Game.player);\n\n                    // clear the stage?\n                    if (window.Game.activeStage.config.name != route) {\n                        window.Game.activeStage.clearStage();\n                        window.Game.removeStage(window.Game.activeStage);\n                    }\n                }\n            }\n\n            switch (route) {\n                case \"home\":\n                case \"\":\n                    if (route === \"\") {\n                        route = \"home\";\n                    }\n\n                    if (stageIndex !== false) {\n                        window.Game.activeStage = window.Game.stages[stageIndex];\n                    } else {\n                        // stage has never been created, so create it.\n                        var mainStage = new stage.Stage({\n                            name: route,\n                            theme: \"mountains\",\n                            targetOutletSelector: \"#stage\",\n                            playerOutletId: \"player\",\n                            gameObjects: [\n                            // ground\n                            new gameObject.GameObject({\n                                classPrefix: \"ground-center-\"\n                            }, { static: true, type: \"ground\" }),\n                            // About stage tunnel\n                            new gameObject.GameObject({\n                                classPrefix: \"tunnel-\",\n                                label: \"About\",\n                                route: \"about\"\n                            }, { top: 1, left: 300, type: \"tunnel\" }),\n                            // Skills stage tunnel\n                            new gameObject.GameObject({\n                                classPrefix: \"tunnel-\",\n                                label: \"Skills\",\n                                route: \"skills\"\n                            }, { top: 1, left: 400, type: \"tunnel\" }),\n                            // Experience stage tunnel\n                            new gameObject.GameObject({\n                                classPrefix: \"tunnel-\",\n                                label: \"Experience\",\n                                route: \"experience\"\n                            }, { top: 1, left: 500, type: \"tunnel\" })]\n                        });\n\n                        window.Game.stages.push(mainStage);\n                        window.Game.activeStage = window.Game.stages[window.Game.findStage(route)];\n                    }\n                    break;\n                case \"about\":\n                    if (stageIndex !== false) {\n                        window.Game.activeStage = window.Game.stages[stageIndex];\n                    } else {\n                        // stage has never been created, so create it.\n                        var aboutStage = new stage.Stage({\n                            name: \"about\",\n                            theme: \"mountains\",\n                            targetOutletSelector: \"#stage\",\n                            playerOutletId: \"player\",\n                            gameObjects: [\n                            // ground\n                            new gameObject.GameObject({\n                                classPrefix: \"ground-center-\"\n                            }, { static: true, type: \"ground\" }),\n                            // About Box\n                            new gameObject.GameObject({\n                                classPrefix: \"box-\",\n                                float: true,\n                                onHitBottom: boxHandlers.aboutBox,\n                                hits: 1\n                            }, { static: true, top: 170, left: 250, type: \"box\" }),\n                            // Home tunnel\n                            new gameObject.GameObject({\n                                classPrefix: \"tunnel-\",\n                                label: \"Home\",\n                                route: \"home\"\n                            }, { top: 1, left: 400, type: \"tunnel\" })]\n                        });\n\n                        window.Game.stages.push(aboutStage);\n                        window.Game.activeStage = window.Game.stages[window.Game.findStage(route)];\n                    }\n                    break;\n                case \"skills\":\n                    if (stageIndex !== false) {\n                        window.Game.activeStage = window.Game.stages[stageIndex];\n                    } else {\n                        // stage has never been created, so create it.\n                        var skillsStage = new stage.Stage({\n                            name: \"skills\",\n                            theme: \"mountains\",\n                            targetOutletSelector: \"#stage\",\n                            playerOutletId: \"player\",\n                            gameObjects: [\n                            // ground\n                            new gameObject.GameObject({\n                                classPrefix: \"ground-center-\"\n                            }, { static: true, type: \"ground\" }),\n                            // HTML5 Box\n                            new gameObject.GameObject({\n                                classPrefix: \"box-\",\n                                float: true,\n                                onHitBottom: boxHandlers.imageBox,\n                                imageForBox: \"img/html5_logo_pixel.png\",\n                                hits: 1,\n                                label: \"-->HTML5\",\n                                labelPosition: \"fixed\",\n                                labelTop: \"15px\",\n                                labelLeft: \"15px\",\n                                labelAnimation: \"shimmer\"\n                                // labelOffset: 60\n                            }, { static: true, top: 170, left: 250, type: \"box\" }),\n                            // JavaScript Box\n                            new gameObject.GameObject({\n                                classPrefix: \"box-\",\n                                float: true,\n                                onHitBottom: boxHandlers.imageBox,\n                                imageForBox: \"img/js_logo.png\",\n                                hits: 1,\n                                label: \"-->JavaScript (ES6)\",\n                                labelPosition: \"fixed\",\n                                labelTop: \"25px\",\n                                labelLeft: \"15px\",\n                                labelAnimation: \"shimmer\"\n                            }, { static: true, top: 170, left: 300, type: \"box\" }),\n                            // CSS Box\n                            new gameObject.GameObject({\n                                classPrefix: \"box-\",\n                                float: true,\n                                onHitBottom: boxHandlers.imageBox,\n                                imageForBox: \"img/css_logo.png\",\n                                hits: 1,\n                                label: \"-->CSS3\",\n                                labelPosition: \"fixed\",\n                                labelTop: \"35px\",\n                                labelLeft: \"15px\",\n                                labelAnimation: \"shimmer\"\n                            }, { static: true, top: 170, left: 350, type: \"box\" }),\n                            // React JS Box\n                            new gameObject.GameObject({\n                                classPrefix: \"box-\",\n                                float: true,\n                                onHitBottom: boxHandlers.imageBox,\n                                imageForBox: \"img/react_logo.png\",\n                                hits: 1,\n                                label: \"-->React JS\",\n                                labelPosition: \"fixed\",\n                                labelTop: \"45px\",\n                                labelLeft: \"15px\",\n                                labelAnimation: \"shimmer\"\n                            }, { static: true, top: 170, left: 400, type: \"box\" }),\n                            // Backbone JS Box\n                            new gameObject.GameObject({\n                                classPrefix: \"box-\",\n                                float: true,\n                                onHitBottom: boxHandlers.imageBox,\n                                imageForBox: \"img/backbone_logo.png\",\n                                hits: 1,\n                                label: \"-->BackBone JS\",\n                                labelPosition: \"fixed\",\n                                labelTop: \"55px\",\n                                labelLeft: \"15px\",\n                                labelAnimation: \"shimmer\"\n                            }, { static: true, top: 170, left: 450, type: \"box\" }),\n                            // Grunt Logo\n                            new gameObject.GameObject({\n                                classPrefix: \"box-\",\n                                float: true,\n                                onHitBottom: boxHandlers.imageBox,\n                                imageForBox: \"img/grunt_logo.png\",\n                                hits: 1,\n                                label: \"-->Grunt\",\n                                labelPosition: \"fixed\",\n                                labelTop: \"65px\",\n                                labelLeft: \"15px\",\n                                labelAnimation: \"shimmer\"\n                            }, { static: true, top: 170, left: 500, type: \"box\" }),\n                            // Brunch Logo\n                            new gameObject.GameObject({\n                                classPrefix: \"box-\",\n                                float: true,\n                                onHitBottom: boxHandlers.imageBox,\n                                imageForBox: \"img/brunch_logo.png\",\n                                hits: 1,\n                                label: \"-->Brunch\",\n                                labelPosition: \"fixed\",\n                                labelTop: \"75px\",\n                                labelLeft: \"15px\",\n                                labelAnimation: \"shimmer\"\n                            }, { static: true, top: 170, left: 550, type: \"box\" }),\n                            // Home tunnel\n                            new gameObject.GameObject({\n                                classPrefix: \"tunnel-\",\n                                label: \"Home\",\n                                route: \"home\"\n                            }, { top: 1, left: 600, type: \"tunnel\" })]\n                        });\n\n                        window.Game.stages.push(skillsStage);\n                        window.Game.activeStage = window.Game.stages[window.Game.findStage(route)];\n                    }\n                    break;\n                case \"experience\":\n                    var experienceStage = new stage.Stage({\n                        name: \"experience\",\n                        theme: \"mountains\",\n                        targetOutletSelector: \"#stage\",\n                        playerOutletId: \"player\",\n                        gameObjects: [\n                        // ground\n                        new gameObject.GameObject({\n                            classPrefix: \"ground-center-\"\n                        }, { static: true, type: \"ground\" }),\n                        // // About Box\n                        // new gameObject.GameObject({\n                        //     classPrefix: \"box-\",\n                        //     float: true,\n                        //     onHitBottom: boxHandlers.aboutBox,\n                        //     hits: 1\n                        // }, { static: true, top: 170, left: 250, type: \"box\" }),\n                        // Home tunnel\n                        new gameObject.GameObject({\n                            classPrefix: \"tunnel-\",\n                            label: \"Home\",\n                            route: \"home\"\n                        }, { top: 1, left: 400, type: \"tunnel\" })]\n                    });\n\n                    window.Game.stages.push(experienceStage);\n                    window.Game.activeStage = window.Game.stages[window.Game.findStage(route)];\n                    break;\n            }\n\n            if (route == \"home\") {\n                route = \"\";\n            }\n\n            history.pushState({\n                route: route\n            }, route, \"/\" + route);\n\n            // load the player onto the stage\n            // game is responsible for this since it's a React component\n            // and his different requirements\n            window.Game.loadPlayer();\n        }\n    }]);\n\n    return Router;\n}();\n\n//# sourceURL=webpack:///./app/js/router.js?");

/***/ }),

/***/ "./app/js/stage.js":
/*!*************************!*\
  !*** ./app/js/stage.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Stage = exports.Stage = function () {\n    function Stage(config) {\n        _classCallCheck(this, Stage);\n\n        this.config = config;\n        this.gameObjects = [];\n\n        this.render();\n    }\n\n    _createClass(Stage, [{\n        key: \"generateId\",\n        value: function generateId() {\n            return '_' + Math.random().toString(36).substr(2, 9);\n        }\n    }, {\n        key: \"removeObject\",\n        value: function removeObject(object) {\n            for (var i in this.gameObjects) {\n                if (this.gameObjects[i] == object) {\n                    this.gameObjects.splice(i, 1);\n                }\n            }\n        }\n    }, {\n        key: \"clearStage\",\n        value: function clearStage() {\n            var stageOutlet = document.querySelector(this.config.targetOutletSelector);\n            stageOutlet.style.opacity = 0;\n            stageOutlet.innerHTML = \"\";\n        }\n    }, {\n        key: \"addObject\",\n        value: function addObject(object) {\n            this.gameObjects.push(object);\n            object.render(document.querySelector(this.config.targetOutletSelector), this.config.theme);\n        }\n    }, {\n        key: \"render\",\n        value: function render() {\n            var outlet = document.querySelector(this.config.targetOutletSelector),\n                el = document.createElement(\"div\"),\n                pageName = this.config.name;\n\n            this.config.id = this.generateId();\n            this.config.idSelector = \"#\" + this.config.id;\n\n            if (pageName == \"home\") {}\n            // pageName = \"\";\n\n\n            // render\n            outlet.insertAdjacentHTML(\"beforeend\", \"\\n            <div id=\\\"player\\\"></div>\\n            \\n            <div id=\\\"\" + this.config.id + \"\\\" class=\\\"background-\" + this.config.theme + \"\\\">\\n                <div class=\\\"page-heading\\\">\\n                    \" + pageName + \"\\n                </div>\\n            </div>\\n        \");\n\n            if (this.config.gameObjects) {\n                for (var i in this.config.gameObjects) {\n                    var gameObject = this.config.gameObjects[i];\n                    this.addObject(gameObject);\n                }\n            }\n\n            setTimeout(function () {\n                outlet.style.opacity = 1;\n            }, 500);\n        }\n    }]);\n\n    return Stage;\n}();\n\n//# sourceURL=webpack:///./app/js/stage.js?");

/***/ }),

/***/ "./app/jsx/game.jsx":
/*!**************************!*\
  !*** ./app/jsx/game.jsx ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar input = __webpack_require__(/*! ../js/input */ \"./app/js/input.js\");\nvar physics = __webpack_require__(/*! ../js/physics */ \"./app/js/physics.js\");\nvar collision = __webpack_require__(/*! ../js/collision */ \"./app/js/collision.js\");\nvar render = __webpack_require__(/*! ../js/render.js */ \"./app/js/render.js\");\nvar router = __webpack_require__(/*! ../js/router.js */ \"./app/js/router.js\");\n\nwindow.Game = {\n    stages: [],\n    activeStage: null,\n    router: null,\n\n    findStage: function findStage(name) {\n        for (var i in this.stages) {\n            if (this.stages[i].config.name == name) {\n                return i;\n            }\n        }\n\n        return false;\n    },\n\n    removeStage: function removeStage(stage) {\n        var indexOfStage = this.findStage(stage);\n\n        if (stage) {\n            this.stages.splice(indexOfStage, 1);\n        }\n    },\n\n    loadPlayer: function loadPlayer() {\n        // Initialize the player separately since he's a react object\n        this.player = ReactDOM.render(React.createElement(Player, null), document.getElementById(this.activeStage.config.playerOutletId));\n        this.activeStage.gameObjects.push(this.player);\n    },\n\n    init: function init() {\n        this.router = new router.Router();\n\n        this.router.loadRoute(\"home\");\n\n        console.log(\"Setting up game loop\");\n        window.requestAnimationFrame(this.loop.bind(this));\n    },\n    loop: function loop() {\n        input.checkInput(this.activeStage.gameObjects);\n\n        physics.imposeGravity(this.activeStage.gameObjects);\n\n        collision.checkCollision(this.activeStage.gameObjects);\n\n        render.render(this.activeStage.gameObjects);\n\n        setTimeout(this.loop.bind(this), 10);\n    }\n};\n\n//# sourceURL=webpack:///./app/jsx/game.jsx?");

/***/ }),

/***/ "./app/jsx/initialize.jsx":
/*!********************************!*\
  !*** ./app/jsx/initialize.jsx ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./game.jsx */ \"./app/jsx/game.jsx\");\n__webpack_require__(/*! ../assets/css/box.css */ \"./app/assets/css/box.css\");\n__webpack_require__(/*! ../assets/css/main.css */ \"./app/assets/css/main.css\");\n__webpack_require__(/*! ../assets/css/player.css */ \"./app/assets/css/player.css\");\n\ndocument.addEventListener('DOMContentLoaded', function () {\n    console.log('Initializing App ...');\n    window.Game.init();\n    console.log(\"Game initialization complete\");\n});\n\n//# sourceURL=webpack:///./app/jsx/initialize.jsx?");

/***/ }),

/***/ "./app/jsx/player.jsx":
/*!****************************!*\
  !*** ./app/jsx/player.jsx ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar playerInputHandler = __webpack_require__(/*! ../js/player-input-handler.js */ \"./app/js/player-input-handler.js\");\n\nwindow.Player = React.createClass({\n    displayName: \"Player\",\n\n    IDLE_RIGHT: \"idle-right\",\n    IDLE_LEFT: \"idle-left\",\n    WALKING_RIGHT: \"walking-right\",\n    WALKING_LEFT: \"walking-left\",\n    JUMP_RIGHT: \"jump-right\",\n    JUMP_LEFT: \"jump-left\",\n\n    getInitialState: function getInitialState() {\n        return {\n            action: this.IDLE_RIGHT,\n            top: 0,\n            left: 200,\n            accelration: 1,\n            type: \"player\",\n            grounded: null,\n            isStandingOn: null\n        };\n    },\n    checkInput: function checkInput() {\n        playerInputHandler.checkInputForPlayer();\n    },\n    getWidth: function getWidth() {\n        return document.querySelector(\".player\").getBoundingClientRect().width;\n    },\n    getHeight: function getHeight() {\n        return document.querySelector(\".player\").getBoundingClientRect().height;\n    },\n    render: function render() {\n        if (!this.state.grounded) {\n            if (this.state.action == this.WALKING_RIGHT || this.state.action == this.IDLE_RIGHT) {\n                this.state.action = this.JUMP_RIGHT;\n                // console.log(\"change to rogjt jump\");\n            } else if (this.state.action == this.WALKING_LEFT || this.state.action == this.IDLE_LEFT) {\n                // console.log(\"change to left jump\");\n                this.state.action = window.Game.player.JUMP_LEFT;\n            }\n        }\n\n        var playerClass = \"player \" + this.state.action;\n\n        var style = {\n            top: this.state.top,\n            left: this.state.left\n        };\n\n        return React.createElement(\"div\", { className: playerClass, style: style, ref: \"player\" });\n    }\n});\n\n//# sourceURL=webpack:///./app/jsx/player.jsx?");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./app/assets/css/box.css":
/*!**********************************************************!*\
  !*** ./node_modules/css-loader!./app/assets/css/box.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var escape = __webpack_require__(/*! ../../../node_modules/css-loader/lib/url/escape.js */ \"./node_modules/css-loader/lib/url/escape.js\");\nexports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \".box-mountains {\\n    background: url(\" + escape(__webpack_require__(/*! ../img/box.png */ \"./app/assets/img/box.png\")) + \") 0 0 no-repeat;\\n    width: 16px;\\n    height: 16px;\\n    position: absolute;\\n}\\n\\n.box-mountains {\\n    animation: scrollquestionmark 1s steps(4) infinite;\\n}\\n\\n.box-mountains.empty {\\n    animation: none;\\n    background-position: -64px 0;\\n}\\n\\n.box-image {\\n    position: absolute;\\n    z-index: 4;\\n    animation: floatupslightlyanddisappear 3s;\\n    /*opacity: 0;*/\\n}\\n\\n@keyframes scrollquestionmark {\\n    from { \\n        background-position: 0 0;\\n    }\\n    to {\\n        background-position: -32px 0;\\n    }\\n    to {\\n        background-position: -46px 0;\\n    }\\n    to {\\n        background-position: -64px 0;\\n    }\\n}\\n\\n@keyframes floatupslightlyanddisappear {\\n    from {\\n        \\n    }\\n    to {\\n        /*top: -100px;*/\\n        /*width: 200px;*/\\n        \\n    }\\n}\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./app/assets/css/box.css?./node_modules/css-loader");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./app/assets/css/main.css":
/*!***********************************************************!*\
  !*** ./node_modules/css-loader!./app/assets/css/main.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var escape = __webpack_require__(/*! ../../../node_modules/css-loader/lib/url/escape.js */ \"./node_modules/css-loader/lib/url/escape.js\");\nexports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \".main-logo {\\n    background: url(\" + escape(__webpack_require__(/*! ../img/mario_title.png */ \"./app/assets/img/mario_title.png\")) + \") no-repeat;\\n    width: 200px;\\n    height: 72px;\\n    position: absolute;\\n    top: 50px;\\n    left: 50%;\\n    margin-left: -100px;\\n\\n    animation: scrolldown cubic-bezier(0.645, 0.045, 0.355, 1) 2s;\\n}\\n\\n@keyframes scrolldown {\\n    0% { \\n        top: -100px;\\n    }\\n    100% {\\n        top: 50px;\\n    }\\n}\\n\\n.label {\\n    color: #fff;\\n    font-size: 8px;\\n    font-family: Emulogic;\\n    position: absolute;\\n\\n    text-shadow: 1px 1px 3px #000;\\n}\\n\\n.bounce {\\n    animation: textfloatbounce cubic-bezier(0.645, 0.045, 0.355, 1) 2s infinite;\\n}\\n\\n.shimmer {\\n    animation: shimmer cubic-bezier(0.645, 0.045, 0.355, 1) 5s;\\n}\\n\\n@keyframes shimmer {\\n    0% {\\n        \\n    }\\n    100% {\\n        \\n    }\\n}\\n\\n@keyframes textfloatbounce {\\n    0% {\\n        margin-top: 0;\\n    }\\n    50% {\\n        margin-top: 10px;\\n    }\\n    100% {\\n        margin-top: 0;\\n    }\\n}\\n\\n.page-heading {\\n    font-family: \\\"Mario\\\";\\n    font-size: 30px;\\n    position: fixed;\\n    top: 10px;\\n    right: 20px;\\n    color: #00d8f8;\\n    text-transform: uppercase;\\n    -webkit-text-stroke: 1px #000;\\n\\n    text-shadow: 3px 5px 0px #000;\\n}\\n\\n.info-panel {\\n    font-family: \\\"Emulogic\\\";\\n    font-size: 9px;\\n    color: #fff;\\n    background: #000;\\n    width: 500px;\\n    height: 100px;\\n    position: absolute;\\n    padding: 10px;\\n    z-index: 3;\\n}\\n\\n@font-face {\\n    font-family: \\\"Emulogic\\\";\\n    src: url(\" + escape(__webpack_require__(/*! ../font/emulogic.ttf */ \"./app/assets/font/emulogic.ttf\")) + \");\\n}\\n\\n/* @font-face {\\n    font-family: \\\"Mario\\\";\\n    src: url(\\\"../font/mario.ttf\\\");\\n} */\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./app/assets/css/main.css?./node_modules/css-loader");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./app/assets/css/player.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader!./app/assets/css/player.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var escape = __webpack_require__(/*! ../../../node_modules/css-loader/lib/url/escape.js */ \"./node_modules/css-loader/lib/url/escape.js\");\nexports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \".player {\\n    background: url(\" + escape(__webpack_require__(/*! ../img/mario_sprite_sheet.png */ \"./app/assets/img/mario_sprite_sheet.png\")) + \") no-repeat;\\n    z-index: 3;\\n    position: absolute;\\n}\\n\\n.player.walking-right, .player.walking-left {\\n    animation: walk .25s steps(2) infinite;\\n}\\n\\n.player.walking-left, .player.idle-left {\\n    transform: scaleX(-1);\\n    filter: flipH;\\n}\\n\\n.player.idle-right, .player.idle-left {\\n    background-position: -14px -10px;\\n    width: 14px;\\n    height: 20px;\\n}\\n\\n.player.jump-left {\\n    transform: scaleX(-1);\\n    filter: flipH;   \\n}\\n\\n.player.jump-right, .player.jump-left {\\n    /*background-position: -116px -7px;*/\\n    background-position: -133px -7px;\\n    width: 15px;\\n    height: 22px;\\n}\\n\\n@keyframes walk {\\n    from { \\n        background-position: -31px -10px;\\n        width: 15px;\\n        height: 19px;\\n    }\\n    to {\\n        background-position: 4px -10px;\\n        width: 14px;\\n        height: 20px;\\n    }\\n}\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./app/assets/css/player.css?./node_modules/css-loader");

/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\nmodule.exports = function(useSourceMap) {\n\tvar list = [];\n\n\t// return the list of modules as css string\n\tlist.toString = function toString() {\n\t\treturn this.map(function (item) {\n\t\t\tvar content = cssWithMappingToString(item, useSourceMap);\n\t\t\tif(item[2]) {\n\t\t\t\treturn \"@media \" + item[2] + \"{\" + content + \"}\";\n\t\t\t} else {\n\t\t\t\treturn content;\n\t\t\t}\n\t\t}).join(\"\");\n\t};\n\n\t// import a list of modules into the list\n\tlist.i = function(modules, mediaQuery) {\n\t\tif(typeof modules === \"string\")\n\t\t\tmodules = [[null, modules, \"\"]];\n\t\tvar alreadyImportedModules = {};\n\t\tfor(var i = 0; i < this.length; i++) {\n\t\t\tvar id = this[i][0];\n\t\t\tif(typeof id === \"number\")\n\t\t\t\talreadyImportedModules[id] = true;\n\t\t}\n\t\tfor(i = 0; i < modules.length; i++) {\n\t\t\tvar item = modules[i];\n\t\t\t// skip already imported module\n\t\t\t// this implementation is not 100% perfect for weird media query combinations\n\t\t\t//  when a module is imported multiple times with different media queries.\n\t\t\t//  I hope this will never occur (Hey this way we have smaller bundles)\n\t\t\tif(typeof item[0] !== \"number\" || !alreadyImportedModules[item[0]]) {\n\t\t\t\tif(mediaQuery && !item[2]) {\n\t\t\t\t\titem[2] = mediaQuery;\n\t\t\t\t} else if(mediaQuery) {\n\t\t\t\t\titem[2] = \"(\" + item[2] + \") and (\" + mediaQuery + \")\";\n\t\t\t\t}\n\t\t\t\tlist.push(item);\n\t\t\t}\n\t\t}\n\t};\n\treturn list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n\tvar content = item[1] || '';\n\tvar cssMapping = item[3];\n\tif (!cssMapping) {\n\t\treturn content;\n\t}\n\n\tif (useSourceMap && typeof btoa === 'function') {\n\t\tvar sourceMapping = toComment(cssMapping);\n\t\tvar sourceURLs = cssMapping.sources.map(function (source) {\n\t\t\treturn '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'\n\t\t});\n\n\t\treturn [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n\t}\n\n\treturn [content].join('\\n');\n}\n\n// Adapted from convert-source-map (MIT)\nfunction toComment(sourceMap) {\n\t// eslint-disable-next-line no-undef\n\tvar base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n\tvar data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;\n\n\treturn '/*# ' + data + ' */';\n}\n\n\n//# sourceURL=webpack:///./node_modules/css-loader/lib/css-base.js?");

/***/ }),

/***/ "./node_modules/css-loader/lib/url/escape.js":
/*!***************************************************!*\
  !*** ./node_modules/css-loader/lib/url/escape.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function escape(url) {\n    if (typeof url !== 'string') {\n        return url\n    }\n    // If url is already wrapped in quotes, remove them\n    if (/^['\"].*['\"]$/.test(url)) {\n        url = url.slice(1, -1);\n    }\n    // Should url be wrapped?\n    // See https://drafts.csswg.org/css-values-3/#urls\n    if (/[\"'() \\t\\n]/.test(url)) {\n        return '\"' + url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n') + '\"'\n    }\n\n    return url\n}\n\n\n//# sourceURL=webpack:///./node_modules/css-loader/lib/url/escape.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n\nvar stylesInDom = {};\n\nvar\tmemoize = function (fn) {\n\tvar memo;\n\n\treturn function () {\n\t\tif (typeof memo === \"undefined\") memo = fn.apply(this, arguments);\n\t\treturn memo;\n\t};\n};\n\nvar isOldIE = memoize(function () {\n\t// Test for IE <= 9 as proposed by Browserhacks\n\t// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n\t// Tests for existence of standard globals is to allow style-loader\n\t// to operate correctly into non-standard environments\n\t// @see https://github.com/webpack-contrib/style-loader/issues/177\n\treturn window && document && document.all && !window.atob;\n});\n\nvar getTarget = function (target, parent) {\n  if (parent){\n    return parent.querySelector(target);\n  }\n  return document.querySelector(target);\n};\n\nvar getElement = (function (fn) {\n\tvar memo = {};\n\n\treturn function(target, parent) {\n                // If passing function in options, then use it for resolve \"head\" element.\n                // Useful for Shadow Root style i.e\n                // {\n                //   insertInto: function () { return document.querySelector(\"#foo\").shadowRoot }\n                // }\n                if (typeof target === 'function') {\n                        return target();\n                }\n                if (typeof memo[target] === \"undefined\") {\n\t\t\tvar styleTarget = getTarget.call(this, target, parent);\n\t\t\t// Special case to return head of iframe instead of iframe itself\n\t\t\tif (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n\t\t\t\ttry {\n\t\t\t\t\t// This will throw an exception if access to iframe is blocked\n\t\t\t\t\t// due to cross-origin restrictions\n\t\t\t\t\tstyleTarget = styleTarget.contentDocument.head;\n\t\t\t\t} catch(e) {\n\t\t\t\t\tstyleTarget = null;\n\t\t\t\t}\n\t\t\t}\n\t\t\tmemo[target] = styleTarget;\n\t\t}\n\t\treturn memo[target]\n\t};\n})();\n\nvar singleton = null;\nvar\tsingletonCounter = 0;\nvar\tstylesInsertedAtTop = [];\n\nvar\tfixUrls = __webpack_require__(/*! ./urls */ \"./node_modules/style-loader/lib/urls.js\");\n\nmodule.exports = function(list, options) {\n\tif (typeof DEBUG !== \"undefined\" && DEBUG) {\n\t\tif (typeof document !== \"object\") throw new Error(\"The style-loader cannot be used in a non-browser environment\");\n\t}\n\n\toptions = options || {};\n\n\toptions.attrs = typeof options.attrs === \"object\" ? options.attrs : {};\n\n\t// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n\t// tags it will allow on a page\n\tif (!options.singleton && typeof options.singleton !== \"boolean\") options.singleton = isOldIE();\n\n\t// By default, add <style> tags to the <head> element\n        if (!options.insertInto) options.insertInto = \"head\";\n\n\t// By default, add <style> tags to the bottom of the target\n\tif (!options.insertAt) options.insertAt = \"bottom\";\n\n\tvar styles = listToStyles(list, options);\n\n\taddStylesToDom(styles, options);\n\n\treturn function update (newList) {\n\t\tvar mayRemove = [];\n\n\t\tfor (var i = 0; i < styles.length; i++) {\n\t\t\tvar item = styles[i];\n\t\t\tvar domStyle = stylesInDom[item.id];\n\n\t\t\tdomStyle.refs--;\n\t\t\tmayRemove.push(domStyle);\n\t\t}\n\n\t\tif(newList) {\n\t\t\tvar newStyles = listToStyles(newList, options);\n\t\t\taddStylesToDom(newStyles, options);\n\t\t}\n\n\t\tfor (var i = 0; i < mayRemove.length; i++) {\n\t\t\tvar domStyle = mayRemove[i];\n\n\t\t\tif(domStyle.refs === 0) {\n\t\t\t\tfor (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();\n\n\t\t\t\tdelete stylesInDom[domStyle.id];\n\t\t\t}\n\t\t}\n\t};\n};\n\nfunction addStylesToDom (styles, options) {\n\tfor (var i = 0; i < styles.length; i++) {\n\t\tvar item = styles[i];\n\t\tvar domStyle = stylesInDom[item.id];\n\n\t\tif(domStyle) {\n\t\t\tdomStyle.refs++;\n\n\t\t\tfor(var j = 0; j < domStyle.parts.length; j++) {\n\t\t\t\tdomStyle.parts[j](item.parts[j]);\n\t\t\t}\n\n\t\t\tfor(; j < item.parts.length; j++) {\n\t\t\t\tdomStyle.parts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\t\t} else {\n\t\t\tvar parts = [];\n\n\t\t\tfor(var j = 0; j < item.parts.length; j++) {\n\t\t\t\tparts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\n\t\t\tstylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};\n\t\t}\n\t}\n}\n\nfunction listToStyles (list, options) {\n\tvar styles = [];\n\tvar newStyles = {};\n\n\tfor (var i = 0; i < list.length; i++) {\n\t\tvar item = list[i];\n\t\tvar id = options.base ? item[0] + options.base : item[0];\n\t\tvar css = item[1];\n\t\tvar media = item[2];\n\t\tvar sourceMap = item[3];\n\t\tvar part = {css: css, media: media, sourceMap: sourceMap};\n\n\t\tif(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});\n\t\telse newStyles[id].parts.push(part);\n\t}\n\n\treturn styles;\n}\n\nfunction insertStyleElement (options, style) {\n\tvar target = getElement(options.insertInto)\n\n\tif (!target) {\n\t\tthrow new Error(\"Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.\");\n\t}\n\n\tvar lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];\n\n\tif (options.insertAt === \"top\") {\n\t\tif (!lastStyleElementInsertedAtTop) {\n\t\t\ttarget.insertBefore(style, target.firstChild);\n\t\t} else if (lastStyleElementInsertedAtTop.nextSibling) {\n\t\t\ttarget.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);\n\t\t} else {\n\t\t\ttarget.appendChild(style);\n\t\t}\n\t\tstylesInsertedAtTop.push(style);\n\t} else if (options.insertAt === \"bottom\") {\n\t\ttarget.appendChild(style);\n\t} else if (typeof options.insertAt === \"object\" && options.insertAt.before) {\n\t\tvar nextSibling = getElement(options.insertAt.before, target);\n\t\ttarget.insertBefore(style, nextSibling);\n\t} else {\n\t\tthrow new Error(\"[Style Loader]\\n\\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\\n Must be 'top', 'bottom', or Object.\\n (https://github.com/webpack-contrib/style-loader#insertat)\\n\");\n\t}\n}\n\nfunction removeStyleElement (style) {\n\tif (style.parentNode === null) return false;\n\tstyle.parentNode.removeChild(style);\n\n\tvar idx = stylesInsertedAtTop.indexOf(style);\n\tif(idx >= 0) {\n\t\tstylesInsertedAtTop.splice(idx, 1);\n\t}\n}\n\nfunction createStyleElement (options) {\n\tvar style = document.createElement(\"style\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\n\tif(options.attrs.nonce === undefined) {\n\t\tvar nonce = getNonce();\n\t\tif (nonce) {\n\t\t\toptions.attrs.nonce = nonce;\n\t\t}\n\t}\n\n\taddAttrs(style, options.attrs);\n\tinsertStyleElement(options, style);\n\n\treturn style;\n}\n\nfunction createLinkElement (options) {\n\tvar link = document.createElement(\"link\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\toptions.attrs.rel = \"stylesheet\";\n\n\taddAttrs(link, options.attrs);\n\tinsertStyleElement(options, link);\n\n\treturn link;\n}\n\nfunction addAttrs (el, attrs) {\n\tObject.keys(attrs).forEach(function (key) {\n\t\tel.setAttribute(key, attrs[key]);\n\t});\n}\n\nfunction getNonce() {\n\tif (false) {}\n\n\treturn __webpack_require__.nc;\n}\n\nfunction addStyle (obj, options) {\n\tvar style, update, remove, result;\n\n\t// If a transform function was defined, run it on the css\n\tif (options.transform && obj.css) {\n\t    result = options.transform(obj.css);\n\n\t    if (result) {\n\t    \t// If transform returns a value, use that instead of the original css.\n\t    \t// This allows running runtime transformations on the css.\n\t    \tobj.css = result;\n\t    } else {\n\t    \t// If the transform function returns a falsy value, don't add this css.\n\t    \t// This allows conditional loading of css\n\t    \treturn function() {\n\t    \t\t// noop\n\t    \t};\n\t    }\n\t}\n\n\tif (options.singleton) {\n\t\tvar styleIndex = singletonCounter++;\n\n\t\tstyle = singleton || (singleton = createStyleElement(options));\n\n\t\tupdate = applyToSingletonTag.bind(null, style, styleIndex, false);\n\t\tremove = applyToSingletonTag.bind(null, style, styleIndex, true);\n\n\t} else if (\n\t\tobj.sourceMap &&\n\t\ttypeof URL === \"function\" &&\n\t\ttypeof URL.createObjectURL === \"function\" &&\n\t\ttypeof URL.revokeObjectURL === \"function\" &&\n\t\ttypeof Blob === \"function\" &&\n\t\ttypeof btoa === \"function\"\n\t) {\n\t\tstyle = createLinkElement(options);\n\t\tupdate = updateLink.bind(null, style, options);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\n\t\t\tif(style.href) URL.revokeObjectURL(style.href);\n\t\t};\n\t} else {\n\t\tstyle = createStyleElement(options);\n\t\tupdate = applyToTag.bind(null, style);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\t\t};\n\t}\n\n\tupdate(obj);\n\n\treturn function updateStyle (newObj) {\n\t\tif (newObj) {\n\t\t\tif (\n\t\t\t\tnewObj.css === obj.css &&\n\t\t\t\tnewObj.media === obj.media &&\n\t\t\t\tnewObj.sourceMap === obj.sourceMap\n\t\t\t) {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tupdate(obj = newObj);\n\t\t} else {\n\t\t\tremove();\n\t\t}\n\t};\n}\n\nvar replaceText = (function () {\n\tvar textStore = [];\n\n\treturn function (index, replacement) {\n\t\ttextStore[index] = replacement;\n\n\t\treturn textStore.filter(Boolean).join('\\n');\n\t};\n})();\n\nfunction applyToSingletonTag (style, index, remove, obj) {\n\tvar css = remove ? \"\" : obj.css;\n\n\tif (style.styleSheet) {\n\t\tstyle.styleSheet.cssText = replaceText(index, css);\n\t} else {\n\t\tvar cssNode = document.createTextNode(css);\n\t\tvar childNodes = style.childNodes;\n\n\t\tif (childNodes[index]) style.removeChild(childNodes[index]);\n\n\t\tif (childNodes.length) {\n\t\t\tstyle.insertBefore(cssNode, childNodes[index]);\n\t\t} else {\n\t\t\tstyle.appendChild(cssNode);\n\t\t}\n\t}\n}\n\nfunction applyToTag (style, obj) {\n\tvar css = obj.css;\n\tvar media = obj.media;\n\n\tif(media) {\n\t\tstyle.setAttribute(\"media\", media)\n\t}\n\n\tif(style.styleSheet) {\n\t\tstyle.styleSheet.cssText = css;\n\t} else {\n\t\twhile(style.firstChild) {\n\t\t\tstyle.removeChild(style.firstChild);\n\t\t}\n\n\t\tstyle.appendChild(document.createTextNode(css));\n\t}\n}\n\nfunction updateLink (link, options, obj) {\n\tvar css = obj.css;\n\tvar sourceMap = obj.sourceMap;\n\n\t/*\n\t\tIf convertToAbsoluteUrls isn't defined, but sourcemaps are enabled\n\t\tand there is no publicPath defined then lets turn convertToAbsoluteUrls\n\t\ton by default.  Otherwise default to the convertToAbsoluteUrls option\n\t\tdirectly\n\t*/\n\tvar autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;\n\n\tif (options.convertToAbsoluteUrls || autoFixUrls) {\n\t\tcss = fixUrls(css);\n\t}\n\n\tif (sourceMap) {\n\t\t// http://stackoverflow.com/a/26603875\n\t\tcss += \"\\n/*# sourceMappingURL=data:application/json;base64,\" + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + \" */\";\n\t}\n\n\tvar blob = new Blob([css], { type: \"text/css\" });\n\n\tvar oldSrc = link.href;\n\n\tlink.href = URL.createObjectURL(blob);\n\n\tif(oldSrc) URL.revokeObjectURL(oldSrc);\n}\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/addStyles.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n/**\n * When source maps are enabled, `style-loader` uses a link element with a data-uri to\n * embed the css on the page. This breaks all relative urls because now they are relative to a\n * bundle instead of the current page.\n *\n * One solution is to only use full urls, but that may be impossible.\n *\n * Instead, this function \"fixes\" the relative urls to be absolute according to the current page location.\n *\n * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.\n *\n */\n\nmodule.exports = function (css) {\n  // get current location\n  var location = typeof window !== \"undefined\" && window.location;\n\n  if (!location) {\n    throw new Error(\"fixUrls requires window.location\");\n  }\n\n\t// blank or null?\n\tif (!css || typeof css !== \"string\") {\n\t  return css;\n  }\n\n  var baseUrl = location.protocol + \"//\" + location.host;\n  var currentDir = baseUrl + location.pathname.replace(/\\/[^\\/]*$/, \"/\");\n\n\t// convert each url(...)\n\t/*\n\tThis regular expression is just a way to recursively match brackets within\n\ta string.\n\n\t /url\\s*\\(  = Match on the word \"url\" with any whitespace after it and then a parens\n\t   (  = Start a capturing group\n\t     (?:  = Start a non-capturing group\n\t         [^)(]  = Match anything that isn't a parentheses\n\t         |  = OR\n\t         \\(  = Match a start parentheses\n\t             (?:  = Start another non-capturing groups\n\t                 [^)(]+  = Match anything that isn't a parentheses\n\t                 |  = OR\n\t                 \\(  = Match a start parentheses\n\t                     [^)(]*  = Match anything that isn't a parentheses\n\t                 \\)  = Match a end parentheses\n\t             )  = End Group\n              *\\) = Match anything and then a close parens\n          )  = Close non-capturing group\n          *  = Match anything\n       )  = Close capturing group\n\t \\)  = Match a close parens\n\n\t /gi  = Get all matches, not the first.  Be case insensitive.\n\t */\n\tvar fixedCss = css.replace(/url\\s*\\(((?:[^)(]|\\((?:[^)(]+|\\([^)(]*\\))*\\))*)\\)/gi, function(fullMatch, origUrl) {\n\t\t// strip quotes (if they exist)\n\t\tvar unquotedOrigUrl = origUrl\n\t\t\t.trim()\n\t\t\t.replace(/^\"(.*)\"$/, function(o, $1){ return $1; })\n\t\t\t.replace(/^'(.*)'$/, function(o, $1){ return $1; });\n\n\t\t// already a full url? no change\n\t\tif (/^(#|data:|http:\\/\\/|https:\\/\\/|file:\\/\\/\\/|\\s*$)/i.test(unquotedOrigUrl)) {\n\t\t  return fullMatch;\n\t\t}\n\n\t\t// convert the url to a full url\n\t\tvar newUrl;\n\n\t\tif (unquotedOrigUrl.indexOf(\"//\") === 0) {\n\t\t  \t//TODO: should we add protocol?\n\t\t\tnewUrl = unquotedOrigUrl;\n\t\t} else if (unquotedOrigUrl.indexOf(\"/\") === 0) {\n\t\t\t// path should be relative to the base url\n\t\t\tnewUrl = baseUrl + unquotedOrigUrl; // already starts with '/'\n\t\t} else {\n\t\t\t// path should be relative to current directory\n\t\t\tnewUrl = currentDir + unquotedOrigUrl.replace(/^\\.\\//, \"\"); // Strip leading './'\n\t\t}\n\n\t\t// send back the fixed url(...)\n\t\treturn \"url(\" + JSON.stringify(newUrl) + \")\";\n\t});\n\n\t// send back the fixed css\n\treturn fixedCss;\n};\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/urls.js?");

/***/ })

/******/ });