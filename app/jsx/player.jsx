let playerInputHandler = require("../js/player-input-handler.js");
import React from "react";

export default class Player extends React.Component {
    constructor(props) {
        super(props);

        this.IDLE_RIGHT = "idle-right";
        this.IDLE_LEFT = "idle-left";
        this.WALKING_RIGHT = "walking-right";
        this.WALKING_LEFT = "walking-left";
        this.JUMP_RIGHT = "jump-right";
        this.JUMP_LEFT = "jump-left";

        this.state = {
            action: this.IDLE_RIGHT,
            top: 0,
            left: 200,
            accelration: 1,
            type: "player",
            grounded: null,
            isStandingOn: null,
        };
    }

    componentDidMount() {
        this._mounted = true;
    }

    componentWillUnmount() {
        this._mounted = false;
    }

    checkInput() {
        playerInputHandler.checkInputForPlayer();
    }
    getWidth() {
        return document.querySelector(".player").getBoundingClientRect().width;
    }
    getHeight() {
        return document.querySelector(".player").getBoundingClientRect().height;
    }
    render() {
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
            <div className={playerClass} style={style} ref="player">
                
            </div>
        );
    }
};