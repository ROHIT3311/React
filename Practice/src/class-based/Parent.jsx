import React from "react";

class Parent extends React.Component {
  constructor(props) {
    console.log("constructor");
    super(props);
    this.state = {
      counter: {
        count: 0,
      },
      data: 120,
    };
  }

  increment = () => {
    this.setState({ counter: { count: this.state.counter.count + 1 } });
  };

  static getDerivedStateFromProps(props) {
    console.log("getDerivedStateFromProps");
    return {
      age: props.age,
    };
  }

  componentDidMount() {
    console.log("Mounted");
  }

  shouldComponentUpdate(prevProps, prevState) {
    return prevState !== this.state;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapShotBeforeUpdate");
    return prevState;
  }

  componentDidUpdate(prevProps, prevState, snapShot) {
    console.log("componentDidUpdate");
    console.log(snapShot);
  }

  render() {
    console.log("Render");

    return (
      <div>
        <p>Counter : {this.state.counter.count}</p>
        <button onClick={this.increment}>Increment</button>
        <p>Data : {this.state.data}</p>
        <p>Props : {this.props.age}</p>
      </div>
    );
  }
}

export default Parent;
