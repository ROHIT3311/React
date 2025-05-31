import React from "react";

class Counter extends React.Component {
  // Implementing shouldComponentUpdate to optimize rendering
  shouldComponentUpdate(nextProps, nextState) {
    // If the current number is equal to the next number, skip the re-render
    if (this.props.number === nextProps.number) {
      return false; // Don't re-render
    }
    return true; // Re-render if the number is different
  }

  componentDidUpdate(prevProps, prevState) {
    // You can also add logic here after the component updates
    if (prevProps.number !== this.props.number) {
      console.log("Updated number to:", this.props.number);
    }
  }

  render() {
    console.log("counter is rendered");
    return (
      <div>
        <h3>{this.props.number}</h3>
      </div>
    );
  }
}

export default Counter;
