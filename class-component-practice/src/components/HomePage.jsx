import React from "react";

class HomePage extends React.Component {
  static defaultProps = {
    name: "Rohit",
  };
  constructor(props) {
    console.log("constructor");
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
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
    return prevProps.count !== this.state.count;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    return prevState;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(snapshot);
  }

  render() {
    console.log("render");

    return (
      <div>
        <h1>{this.props.name}</h1>
        <h2>{this.props.age}</h2>
        <h3>{this.state.count}</h3>
        <button onClick={this.increment}>Increments</button>
      </div>
    );
  }
}

export default HomePage;
