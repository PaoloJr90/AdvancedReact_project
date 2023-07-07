import Header from "./components/Header";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Shop from "./components/Shop";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";
import Wishlist from "./components/Wishlist";
import Blog from "./components/Blog";

function App() {
  return (
    <div className="webpage">
      <Header />

      <main>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/AdvancedReact_project" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/blog" element={<Blog />} />
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
