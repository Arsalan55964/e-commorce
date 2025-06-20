import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import HeaderBanner from "./component/HeaderBanner";
import Navbar from "./component/NavBar";
import HeroSection from "./component/HeroSection";
import BrandsFooter from "./component/BrandFooter";
import NewArrivals from "./component/NewArrivals";
import TopSelling from "./component/TopSelling";
import Brands from "./component/Brands";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AllProducts from "./component/AllProduct";
import TopSellingAll from "./component/TopSellingAll";
import Login from "./SignLogin/Login";
function App() {
  return (
    <Router>
      <HeaderBanner />
      <Navbar />


      <Routes>
        <Route
      path="/login"
      element={<Login onClose={() =>{}} onSwitch={() =>{}}/>}
      />
      
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <BrandsFooter />
              <NewArrivals />
             
              <TopSelling />
              <Brands />
            </>
          }
        />

        <Route path="/new-arrivals" element={<NewArrivals />} />
          <Route path="/all-products" element={<AllProducts />} />
        <Route path="/top-selling" element={<TopSellingAll />} />
        <Route path="/brands" element={<Brands />} />
        {/* <Route path="/Next" element={<Next />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
