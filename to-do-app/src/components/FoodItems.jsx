import Item from "./Item";

const FoodItems = () => {
  let fruits = ["Mango", "Apple", "Orange"];
  return (
    <ul className="list-group">
      {fruits.map((item) => (
        <Item key={item} fruits={item} />
      ))}
    </ul>
  );
};

export default FoodItems;
