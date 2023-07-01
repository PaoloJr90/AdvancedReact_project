import Header from "./components/Header";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Shop from "./components/Shop";
import AboutUs from "./components/AboutUs";
import Contacts from "./components/ContactUs";
import Footer from "./components/Footer";
import ProductCard from "./components/ProductCard";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/product-card" element={<ProductCard />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
