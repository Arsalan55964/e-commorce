// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import "./App.css";
// import HeaderBanner from "./component/HeaderBanner";
// import Navbar from "./component/NavBar";
// import HeroSection from "./component/HeroSection";
// import BrandsFooter from "./component/BrandFooter";
// import NewArrivals from "./component/NewArrivals";
// import TopSelling from "./component/TopSelling";
// import Brands from "./component/Brands";
// import AllProducts from "./component/AllProduct";
// import TopSellingAll from "./component/TopSellingAll";
// import Next from "./component/Next"
// import Footer from "./component/Footer";
// import Comments from "./component/Comments";
// import View from "./component/View"
// import { CartProvider } from "../component/context/CartContext";

// function App() {
//   return (
//     <CartProvider>

//     <Router>
//      <HeaderBanner />
//             <Navbar />

//       <Routes>
//         <Route
//           path="/"
//           element={
//             <>
//               <HeroSection />
//               <BrandsFooter />
//               <NewArrivals />
             
//               <TopSelling />
//               <Brands />
//                             <Comments/>

//               <Footer/>
//             </>
//           }
//         />

//         <Route path="/new-arrivals" element={<NewArrivals />} />
//           <Route path="/all-products" element={<AllProducts />} />
//         <Route path="/top-selling" element={<TopSellingAll />} />
//         <Route path="/brands" element={<Brands />} />
//         <Route path="/Next" element={<Next />} />
//                 <Route path="/view" element={<View />} />



//       </Routes>
//     </Router>
//     </CartProvider>

//   );
// }

// export default App;
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import HeaderBanner from "./component/HeaderBanner";
import Navbar from "./component/NavBar";
import HeroSection from "./component/HeroSection";
import BrandsFooter from "./component/BrandFooter";
import NewArrivals from "./component/NewArrivals";
import TopSelling from "./component/TopSelling";
import Brands from "./component/Brands";
import AllProducts from "./component/AllProduct";
import TopSellingAll from "./component/TopSellingAll";
import Next from "./component/Next";
import Footer from "./component/Footer";
import Comments from "./component/Comments";
import View from "./component/View";
import { CartProvider } from "../src/component/context/CartContext"
import Cart from "./component/Cart";
import SearchResults from "./component/SearchResults";

function App() {
  return (
    <CartProvider>
      <Router>
        <HeaderBanner />
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <BrandsFooter />
                <NewArrivals />
                <TopSelling />
                <Brands />
                <Comments />
                <Footer />
              </>
            }
          />

          <Route path="/new-arrivals" element={<NewArrivals />} />
          <Route path="/all-products" element={<AllProducts />} />
          <Route path="/top-selling" element={<TopSellingAll />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/Next" element={<Next />} />
          <Route path="/view" element={<View />} />
            <Route path="/cart" element={<Cart />} />
  <Route path="/search" element={<SearchResults />} />
         




        </Routes>
      </Router>
    </CartProvider>
  );
}


export default App;
