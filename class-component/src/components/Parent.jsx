import React from "react";

class Parent extends React.Component {
  //  1st method of mounting phase
  constructor(props) {
    console.log("Constructor is Calling");
    super(props);
    this.state = {
      count: 0,
    };
  }

  //   2nd method of mounting phase
  static getDerivedStateFromProps(props) {
    console.log("getDeriveStateFromProps ");
    return {
      age: props.age,
    };
  }

  //   3rd method of mounting phase
  componentDidMount() {
    // API Call

    console.log("Component did mount ");
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  shouldComponentUpdate(nextProps, nexState) {
    console.log("shouldComponentUpdate");
    return nexState.count !== this.state.count;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    return prevState;
  }

  componentDidUpdate(prevProps, prevState, snapShot) {
    console.log(this.state, snapShot);
  }

  //   4th method of mounting phase
  render() {
    console.log("Render is Called");
    return (
      <div>
        <h1>Count : {this.state.count}</h1>
        <h1>Age: {this.state.age}</h1>
        <button onClick={() => this.increment()}>Increment</button>
      </div>
    );
  }
}

export default Parent;
