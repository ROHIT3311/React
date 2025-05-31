import React from "react";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <div>
        <h1>Hello</h1>
        <h2>Count : {this.state.count}</h2>
        <h2>Name : {this.props.name}</h2>
        <button onClick={() => this.increment()}>Increment</button>
      </div>
    );
  }
}

export default HomePage;
