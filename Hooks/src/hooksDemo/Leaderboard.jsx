import React, { useMemo, useState } from "react";

const Leaderboard = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const [students, setStudents] = useState([
    { id: 101, name: "s1", gc: 5 },
    { id: 102, name: "s2", gc: 4 },
    { id: 103, name: "s3", gc: 3.5 },
  ]);

  const getMaxGc = () => {
    console.log("Calling");
    return Math.max(...students.map((stud) => stud.gc));
  };

  const memorizedGc = useMemo(() => getMaxGc(), [students]);

  const changeStudent = () => {
    setStudents([...students, { id: 104, name: "s4", gc: 10 }]);
  };

  return (
    <>
      <h1>Leaderboard</h1>
      <table border={4}>
        <tr>
          <td>id</td>
          <td>Name</td>
          <td>gc</td>
        </tr>
        {students.map((stud) => (
          <tr>
            <td>{stud.id}</td>
            <td>{stud.name}</td>
            <td>{stud.gc}</td>
          </tr>
        ))}
      </table>
      <h2>Max GC : {memorizedGc}</h2>
      <h4>{counter}</h4>
      <button onClick={increment}>Increment</button>
      <button onClick={changeStudent}>Change Student</button>
    </>
  );
};

export default Leaderboard;
