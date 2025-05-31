import { useContext } from "react";
import { AddToCart } from "../context/AddToCard";

export default function SingleProduct({ name }) {
  const [cart, setCart] = useContext(AddToCart);
  return (
    <>
      <div>
        <p>{name}</p>
        <button onClick={() => setCart((prev) => [...prev, name])}>
          Add to Cart
        </button>
      </div>
    </>
  );
}
