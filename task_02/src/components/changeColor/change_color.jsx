import React from "react";
import "./changeColor.css";

class ChangeColor extends React.Component {
  constructor() {
    super();

    this.stack = [];
  }

  getId = (event) => {
    const id = event.target.id;
    const div = document.getElementById(id);

    if (!this.stack.includes(id)) {
      this.stack.push(id);
      div.style.backgroundColor = "green";
    }

    console.log(this.stack);

    if (this.stack.length === 4) {
      let i = 1;
      while (this.stack.length) {
        let ele = this.stack.pop();
        setTimeout(() => {
          document.getElementById(ele).style.backgroundColor = "white";
        }, i * 3000);
        i++;
      }
    }
  };

  render() {
    return (
      <div>
        <div className="box" id="box-1" onClick={this.getId}>
          Box 1
        </div>
        <div className="box" id="box-2" onClick={this.getId}>
          Box 2
        </div>
        <div className="box" id="box-3" onClick={this.getId}>
          Box 3
        </div>
        <div className="box" id="box-4" onClick={this.getId}>
          Box 4
        </div>
      </div>
    );
  }
}

export default ChangeColor;
