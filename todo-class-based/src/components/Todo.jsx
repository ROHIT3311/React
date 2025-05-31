import React from "react";

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: "",
      todos: [
        { text: "Walk", marked: false },
        { text: "Sleep", marked: false },
      ],
    };
  }

  handleChange = (e) => {
    this.setState({ inputVal: e.target.value });
  };

  add = () => {
    const trimmed = this.state.inputVal.trim();
    if (trimmed !== "") {
      this.setState((prevState) => ({
        todos: [...prevState.todos, { text: trimmed, marked: false }],
        inputVal: "",
      }));
    }
  };

  toggleMarked = (index) => {
    this.setState((prevState) => {
      // Create a shallow copy of todos array
      const todos = [...prevState.todos];
      // Toggle the marked property of the specific todo item
      todos[index] = {
        ...todos[index],
        marked: !todos[index].marked,
      };
      return { todos };
    });
  };

  delete = (indexToDelete) => {
    this.setState((prevState) => {
      // Filter out the todo at the indexToDelete
      const todos = prevState.todos.filter(
        (todo, index) => index !== indexToDelete
      );

      return { todos };
    });
  };

  render() {
    return (
      <div>
        <div>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.inputVal}
          />
          <button onClick={this.add}>Add</button>
        </div>
        <ul>
          {this.state.todos.map((todo, idx) => (
            <div>
              <li
                key={idx}
                onClick={() => this.toggleMarked(idx)}
                style={{
                  cursor: "pointer",
                  textDecoration: todo.marked ? "line-through" : "none",
                }}
              >
                {todo.text}
              </li>
              <button onClick={() => this.delete(idx)}>Delete</button>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

export default Todo;
