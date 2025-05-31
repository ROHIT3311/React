import { useState } from "react";

export default function UseState() {
  const [counter, setCounter] = useState(0);

  const increase = () => {
    setCounter((prev) => prev + 1);
  };

  const decrease = () => {
    setCounter((prev) => prev - 1);
  };

  const [car, setCar] = useState({ brand: "Suzuki", model: "ZXI+" });
  const changeCar = () => {
    setCar({ ...car, brand: "Skoda", model: "signature+" });
  };

  return (
    <>
      <h1>{counter}</h1>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <h3>
        {car.brand} & {car.model}
      </h3>
      <button onClick={changeCar}>Change Car</button>
    </>
  );
}
