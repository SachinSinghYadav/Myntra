import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/cart/Cart";
import Header from "./components/header/Header";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import WishList from "./components/wishList/WishList";
import Home from "./pages/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<SingleProduct />} />
        <Route path="Cart" element={<Cart />} />
        <Route path="wishlist" element={<WishList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
