import "./App.css";
import Home from "./componets/Home";
import Header from "./componets/Header";
import Wishlist from "./componets/Wishlist";
import Cart from "./componets/Cart";
import ProductListingPage from "./componets/ProductListingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/cart" element={<Cart/>} />
        <Route exact path="/wishlist" element={<Wishlist/>} />
        <Route exact path="/productlistingpage" element={<ProductListingPage/>} />


        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
