import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserDetails = () => {
  const { id } = useParams();
  const [selectedUser, setSelectedUser] = useState({});

  console.log(useParams());
  const getUserById = async () => {
    let data = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
    let user = await data.json();
    setSelectedUser(user);
    console.log(user);
  };
  useEffect(() => {
    getUserById();
  }, []);
  return (
    <div>
      <p>Name : {selectedUser.name}</p>
      <p>Email : {selectedUser.email}</p>
      <p>Username : {selectedUser.username}</p>
    </div>
  );
};

export default UserDetails;
