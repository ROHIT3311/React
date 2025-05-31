import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Prdouct from "./components/Product";
import AddToCart from "./components/AddToCard";
import NavBar from "./components/NavBar";
import Navbar from "./components/navbar/Navbar";
import Content from "./components/content/Content";

function App() {
  return (
    <>
      {/* <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Prdouct />} />
          <Route path="/cart" element={<AddToCart />} />
        </Routes>
      </Router> */}
      <Navbar />
      <Content />
    </>
  );
}

export default App;
