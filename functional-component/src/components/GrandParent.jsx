import { useContext } from "react";
import { DataContext } from "../context/DataContext";

export default function GrandParent() {
  const data = useContext(DataContext);
  return (
    <>
      <h3>Grand Parent: </h3>
      <h4>{data.name}</h4>
    </>
  );
}
