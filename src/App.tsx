import "./App.css";
import { Route, Routes } from "react-router-dom";
import Products from "./pages/Products";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="cart" element={<Cart />} />
      </Route>
      <Route path="checkout" element={<Checkout />} />
    </Routes>
  );
}

export default App;
