import { useContext } from "react";
import { AddToCardProductContext } from "../context/AddToCardContext";

export default function SingleProduct({ id, prod_name, model }) {
  const { addToCart } = useContext(AddToCardProductContext);
  const handleSubmit = () => {
    addToCart({ id, prod_name, model });
  };
  return (
    <>
      <div key={id} className="border-2 p-5">
        <h1>
          <i>Id : {id}</i>
        </h1>
        <h2>Product Name : {prod_name}</h2>
        <h3>Model : {model}</h3>
        <button
          className="bg-amber-300 p-1 rounded-xl border cursor-pointer"
          onClick={handleSubmit}
        >
          Add to Cart
        </button>
      </div>
    </>
  );
}
