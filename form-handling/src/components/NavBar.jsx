import { useNavigate } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

export default function NavBar() {
  const navigate = useNavigate();
  const navigateToCartPage = () => {
    navigate("/cart");
  };
  return (
    <>
      <button
        className="flex items-center gap-2 px-4 py-2 bg-amber-500 text-black rounded-lg hover:bg-amber-600 transition"
        onClick={navigateToCartPage}
      >
        <ShoppingCart size={18} />
        Go To Cart
      </button>
    </>
  );
}
