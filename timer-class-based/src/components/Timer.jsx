import React from "react";

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: 0,
    };
    this.interval = null;
  }

  start = () => {
    if (!this.interval) {
      this.interval = setInterval(() => {
        this.setState((prev) => ({ timer: prev.timer + 1 }));
      }, 1000);
    }
  };

  stop = () => {
    clearInterval(this.interval);
    this.interval = null;
  };

  reset = () => {
    this.setState((prev) => ({ timer: (prev.timer = 0) }));
  };

  render() {
    return (
      <div>
        <h1>Timer : {this.state.timer}</h1>
        <button onClick={() => this.start()}>Start</button>
        <button onClick={() => this.stop()}>Stop</button>
        <button onClick={() => this.reset()}>Reset</button>
      </div>
    );
  }
}

export default Timer;
