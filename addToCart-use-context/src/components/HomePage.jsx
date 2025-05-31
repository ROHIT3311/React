import { useNavigate } from "react-router-dom";
import Products from "./Products";

export default function HomePage() {
  const navigator = useNavigate();
  const handleClick = () => {
    navigator("/cart");
  };
  return (
    <>
      <Products />
      <button onClick={handleClick}>Cart</button>
    </>
  );
}
