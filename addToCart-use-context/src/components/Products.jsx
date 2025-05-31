import SingleProduct from "./SingleProduct";

export default function Products() {
  const products = ["Mouse", "Keyboard"];
  return (
    <>
      {products.map((prod, key) => (
        <div key={key}>
          <SingleProduct name={prod} />
        </div>
      ))}
    </>
  );
}
