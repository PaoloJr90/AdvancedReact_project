import Header from "./components/Header";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Shop from "./components/Shop";
import AboutUs from "./components/AboutUs";
import Contacts from "./components/ContactUs";
import Footer from "./components/Footer";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";
import Wishlist from "./components/Wishlist";

function App() {
  return (
    <div className="webpage">
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/product-card/:id" element={<ProductCard />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
