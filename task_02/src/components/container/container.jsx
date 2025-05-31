import React from "react";
import styles from "./Container.module.css";

class Container extends React.Component {
  constructor() {
    super();
    this.state = {
      stack: [],
      boxes: ["box-1", "box-2", "box-3", "box-4"],
    };
  }

  handleClick = (event) => {
    const boxId = event.currentTarget.dataset.id;

    this.setState(
      (prevState) => ({
        stack: prevState.stack.includes(boxId)
          ? prevState.stack
          : [...prevState.stack, boxId],
      }),

      () => {
        if (this.state.stack.length === this.state.boxes.length) {
          for (let i = this.state.stack.length - 1; i >= 0; i--) {
            //
            setTimeout(() => {
              this.setState((prevState) => ({
                stack: prevState.stack.filter(
                  (id) => id !== prevState.stack[i]
                ),
              }));
            }, (this.state.stack.length - i) * 1000);
          }
        }
      }
    );
  };

  render() {
    return (
      <div>
        {this.state.boxes.map((boxId) => (
          <div
            style={{
              backgroundColor: this.state.stack.includes(boxId)
                ? "green"
                : "white",
            }}
            className={styles.box}
            data-id={boxId}
            key={boxId}
            onClick={this.handleClick}
          >
            {boxId}
          </div>
        ))}
      </div>
    );
  }
}

export default Container;
