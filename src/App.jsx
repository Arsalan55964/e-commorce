import React from 'react';

import "./App.css";
import HeaderBanner from './component/Headerbanner';
import Navbar from './component/NavBar';
import HeroSection from './component/HeroSection';
import BrandsFooter from './component/BrandFooter';
import NewArrivals from './component/NewArrivals';
import TopSelling from './component/TopSelling';
import Brands from './component/Brands';

function App() {
 

  return (
    <>
     <HeaderBanner/>
     <Navbar/>
     <HeroSection />
     <BrandsFooter />
     <NewArrivals />
     <TopSelling />
     <Brands />
   
     
    
    </>
  )
}

export default App;