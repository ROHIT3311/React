import { useContext } from "react";
import { AddToCardProductContext } from "../context/AddToCardContext";

export default function AddToCart() {
  const { cartItem } = useContext(AddToCardProductContext);
  return (
    <>
      <div>
        {cartItem.map((product) => (
          <h1 key={product.id}>{product.prod_name}</h1>
        ))}
      </div>
    </>
  );
}
