import React from "react";
import Counter from "../Counter/counter";
import { BrowserRouter as Route, Router, Link } from "react-router-dom";

class Home extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      title: "Increment and Decrement",
    };

    console.log("In Constructor Data is initialized : ");
  }

  componentDidMount() {
    console.log("component is Mounted Successfully");
  }
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  // shouldComponentUpdate(nextProps, nextState) {
  //   if (nextState.count !== this.state.count) {
  //     return true;
  //   }

  //   return false;
  // }

  decrement = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count });
    } else {
      alert("Counter is already at 0");
    }
  };
  render() {
    console.log("Home is rendered");
    return (
      <div>
        <h1>{this.state.title}</h1>
        {/* <Counter number={this.state.count}></Counter> */}
        <h2>{this.state.count}</h2>
        <p>{this.props.firstName}</p>
        <p>{this.props.lastName}</p>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}

export default Home;
