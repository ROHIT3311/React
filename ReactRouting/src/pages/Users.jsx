import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);

  const navigate = useNavigate();
  const getUsers = async () => {
    let data = await fetch("https://jsonplaceholder.typicode.com/users");
    let users = await data.json();
    setUsers(users);
    console.log(users);
  };
  useEffect(() => {
    getUsers();
  }, []);

  const gotoNext = (id) => {
    navigate("/userDetails/" + id);
  };

  return (
    <>
      {users.map((user, index) => {
        return (
          <div
            key={user.id}
            onClick={() => gotoNext(user.id)}
            style={{ cursor: "pointer" }}
          >
            <ul>
              <li>
                Id : {user.id}
                <br />
                Name: {user.name} <br />
                Email: {user.email}
              </li>
            </ul>
          </div>
        );
      })}
    </>
  );
};

export default Users;
