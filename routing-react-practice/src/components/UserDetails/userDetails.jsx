import React from "react";
import { Link } from "react-router-dom";
class UserDetails extends React.Component {
  user = [
    { id: 1, name: "John" },
    { id: 2, name: "Alex" },
    { id: 3, name: "Nancy" },
    { id: 4, name: "Peter" },
    { id: 5, name: "Parker" },
  ];

  render() {
    // console.log(this.user);
    return (
      <div>
        {this.user.map((item, idx) => {
          return (
            <div key={item.id}>
              <ul>
                <li>
                  <Link to={`user/${item.id }`}>
                    {item.id}:: {item.name}
                  </Link>
                </li>
              </ul>
            </div>
          );
        })}
      </div>
    );
  }
}

export default UserDetails;
