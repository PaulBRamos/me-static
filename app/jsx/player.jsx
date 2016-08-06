window.Player = React.createClass({
    IDLE_RIGHT: "idle-right",
    IDLE_LEFT: "idle-left",
    WALKING_RIGHT: "walking-right",
    WALKING_LEFT: "walking-left",

    getInitialState: function () {
        return {
            action: this.IDLE_RIGHT,
            top: 100,
            left: 100,
            accelration: 1
        };
    },
    render: function () {
        var playerClass = "player " + this.state.action;
        var style = {
            top: this.state.top,
            left: this.state.left
        };

        return (
            <div className={playerClass} style={style}>
                
            </div>
        );
    }
  });