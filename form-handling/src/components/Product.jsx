import SingleProduct from "./SingleProduct";

export default function Prdouct() {
  const products = [
    {
      id: 1,
      prod_name: "Mobile",
      model: "S25",
    },
    {
      id: 2,
      prod_name: "Laptop",
      model: "Alienware R14",
    },
  ];

  return (
    <>
      <div className="flex gap-2 p-5">
        {products.map((product) => (
          <SingleProduct
            key={product.id}
            id={product.id}
            prod_name={product.prod_name}
            model={product.model}
          />
        ))}
      </div>
    </>
  );
}
