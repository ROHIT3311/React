import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const User = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  const getUser = async () => {
    let res = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await res.json();
    setUsers(data);
  };
  useEffect(() => {
    getUser();
  }, []);
  console.log(users);

  const gotoUser = (id) => {
    navigate("/userDetails/" + id);
  };

  return (
    <div>
      <table border={"2px"}>
        <thead>
          <tr>
            <td>id</td>
            <td>Name</td>
          </tr>
        </thead>

        <tbody>
          {users.map((item, idx) => (
            <tr key={idx} onClick={() => gotoUser(item.id)}>
              <td>{item.id}</td>
              <td>{item.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default User;
