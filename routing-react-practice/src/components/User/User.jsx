import React from "react";
import { useParams } from "react-router-dom";

function withParams(Component) {
  return (props) => {
    const params = useParams();
    console.log("Param : ", params);
    return <Component {...props} params={params} />;
  };
}

class User extends React.Component {
  user = [
    { id: 1, name: "John" },
    { id: 2, name: "Alex" },
    { id: 3, name: "Nancy" },
    { id: 4, name: "Peter" },
    { id: 5, name: "Parker" },
  ];

  render() {
    const { id } = this.props.params;
    console.log(this.props.params);
    const u = this.user[Number(id) - 1];
    return (
      <div>
        <h1>{u.name}</h1>
        <h2>{u.id}</h2>
      </div>
    );
  }
}

export default withParams(User);
