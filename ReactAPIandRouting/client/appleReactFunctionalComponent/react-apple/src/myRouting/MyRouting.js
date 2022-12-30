import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Main from "../main/Main";
import Store from "../pages/Store/Store";
import Mac from "../pages/Mac/Mac";
import Ipad from "../pages/Ipad/Ipad";
import Iphone from "../pages/iphone/Iphone";
import Watch from "../pages/Watch/Watch";
import AirPods from "../pages/AirPods/AirPods";
import TvnHome from "../pages/TvnHome/TvnHome";
import OnlyOnApple from "../pages/OnlyonApple/OnlyOnApple";
import Accessories from "../pages/Accessories/Accessories";
import Support from "../pages/Support/Support";
import Four04 from "../pages/four04/Four04";
import Logo from "../pages/logo/Logo";
import Search from "../pages/search/Search";
import Cart from "../pages/cart/Cart";
import ProductsPage from "../pages/productPage/ProductsPage";

function MyRouting() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/logo" element={<Logo />} />
        <Route path="/store" element={<Store />} />
        <Route path="/mac" element={<Mac />} />
        <Route path="/ipad" element={<Ipad />} />
        <Route path="/iphone" element={<Iphone />} />
        <Route path="/iphone/:productID" element={<ProductsPage/>} />
        <Route path="/watch" element={<Watch />} />
        <Route path="/AirPods" element={<AirPods />} />
        <Route path="/Tv & Home" element={<TvnHome />} />
        <Route path="/Only On Apple" element={<OnlyOnApple />} />
        <Route path="/Accessories" element={<Accessories />} />
        <Route path="/Support" element={<Support />} />
        <Route path="/search" element={<Search />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Four04 />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default MyRouting;
