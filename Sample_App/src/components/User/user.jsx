import React from "react";
import { Link } from "react-router-dom";

class User extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [
        { name: "John", age: 21 },
        { name: "Alice", age: 22 },
        { name: "Bob", age: 23 },
        { name: "Charlie", age: 24 },
        { name: "David", age: 25 },
        { name: "Emma", age: 26 },
        { name: "Frank", age: 27 },
        { name: "Grace", age: 28 },
        { name: "Hannah", age: 29 },
        { name: "Ivy", age: 30 },
      ],
    };
  }
  render() {
    return (
      <div>
        <h1>User List</h1>
        <ul>
          {this.state.users.map((user, idx) => {
            return (
              <li key={idx}>
                <Link to={`/user/${user.age}`}>
                  {user.name} - Age: {user.age}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default User;
