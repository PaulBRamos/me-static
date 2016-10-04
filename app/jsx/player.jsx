let playerInputHandler = require("js/player-input-handler.js");

window.Player = React.createClass({
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
            <div className={playerClass} style={style} ref="player">
                
            </div>
        );
    }
  });