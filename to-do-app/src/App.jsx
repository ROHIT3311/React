import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";

function App() {
  let fruits = ["Mango", "Apple", "Orange"];
  return (
    <>
      <h1>Fruit List</h1>
      <ErrorMessage />
      <FoodItems />
    </>
  );
}

export default App;
