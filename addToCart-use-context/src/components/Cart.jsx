import { useContext } from "react";
import { AddToCart } from "../context/AddToCard";

export default function Cart() {
  const [cart, setCart] = useContext(AddToCart);
  const style = {
    display: "flex",
    flexDirection: "column",
  };
  return (
    <>
      <div style={style}>
        {cart.map((element, index) => (
          <p key={index}>{element}</p>
        ))}
      </div>
    </>
  );
}
