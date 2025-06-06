import React, { useEffect, useState } from "react";

const UseEffect = () => {
  useEffect(() => {
    console.log("v1 of use effect");
  });

  const [users, setUsers] = useState([]);

  const [counter, setCounter] = useState(0);
  const getUser = async () => {
    let data = await fetch("https://jsonplaceholder.typicode.com/users");
    let users = await data.json();
    console.log(users);
    setUsers(users);
  };

  useEffect(() => {
    console.log("v2 of use effect");
    getUser();
  }, []);

  const increment = () => {
    setCounter((prev) => prev + 1);
  };
  console.log("Render");
  return (
    <div>
      <h3>{counter}</h3>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default UseEffect;
