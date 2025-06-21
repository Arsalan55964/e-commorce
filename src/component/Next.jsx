import { Mail, Facebook, Twitter, Instagram, Github } from 'lucide-react';
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "./context/CartContext";

const products = [
  { id: 1, name: "Gradient Graphic T-shirt", image1: "Frame 39.svg", price: "$145", image: "one.png" },
  { id: 2, name: "Polo with Tipping Details", image1: "Frame 39.svg", price: "$180", image: "two.png" },
  { id: 3, name: "Black Striped T-shirt", image1: "Frame 39.svg", price: "$120", image: "three.png" },
  { id: 4, name: "SKINNY FIT JEANS", image1: "Frame 39.svg", price: "$240", image: "four2.png" },
  { id: 5, name: "CHECKERED SHIRT", image1: "Frame 39.svg", price: "$50", image: "five.png" },
  { id: 6, name: "SLEEVE STRIPED T-SHIRT", image1: "Frame 39.svg", price: "$60", image: "six.png" },
  { id: 7, name: "VERTICAL STRIPED SHIRT", image1: "Frame 39.svg", price: "$70", image: "seven.png" },
  { id: 8, name: "COURAGE GRAPHIC T-SHIRT", image1: "Frame 39.svg", price: "$80", image: "eight.png" },
  { id: 9, name: "LOOSE FIT BERMUDA SHORTS", image1: "Frame 39.svg", price: "$90", image: "nine.png" },
];

const testimonials = [
  {
    name: "James L.",
    review: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shopco. The selection of clothes is not only diverse but also on-point with the latest trends.",
    stars: 5,
  },
  {
    name: "Sarah M.",
    review: "I'm blown away by the quality and style of the clothes I received from Shopco. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    stars: 5,
  },
  {
    name: "Alex K.",
    review: "Finding clothes that align with my personal style used to be a challenge until I discovered Shopco. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
    stars: 5,
  },
];

const TestimonialCard = ({ name, review, stars }) => {
  return (
    <div className="flex flex-col rounded-xl px-6 py-4 w-[300px] ml-[5rem] shadow-sm">
      <div className="flex mb-3">
        {Array(stars).fill(0).map((_, i) => (
          <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.293c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.785.57-1.84-.197-1.54-1.118l1.07-3.293a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      
      <h3 className="font-bold text-[15px] mb-2">
        {name} <span className="text-green-500 text-lg">●</span>
      </h3>
      <p className="text-[14px] text-gray-600 leading-[1.6]">{review}</p>
    </div>
  );
};

function ProductGrid() {
  const location = useLocation(); 
  const { addToCart } = useContext(CartContext);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6 mt-[3rem]">
        {products.map((product) => (
          <div key={product.id} className="mt-[3rem] h-[37rem] w-[100%] rounded-xl p-4 shadow hover:scale-105 transition-transform duration-300">
            <img src={product.image} alt={product.name} className="w-full h-100 object-cover rounded mb-4" />
            <h2 className="text-lg font-semibold ml-[2rem] font-bold">{product.name}</h2>
            <img className="mt-[0.5rem] ml-[2rem]" src={product.image1} alt="Product Detail" />
            <h3 className="text-gray-700 mb-2 font-bold mt-[0.5rem] ml-[2rem]">{product.price}</h3>
            <button onClick={() => addToCart(product)} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-[0.5rem] ml-[2rem]">
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <section className="px-[4rem] py-[3rem]">
        <h2 className="text-4xl font-extrabold mb-8">OUR HAPPY CUSTOMERS</h2>
        <div className="flex gap-5 overflow-x-auto scrollbar-hide">
          {testimonials.map((item, index) => (
            <TestimonialCard key={index} name={item.name} review={item.review} stars={item.stars} />
          ))}
        </div>
      </section>

      <footer className="bg-gray-100 py-12 px-4 mt-[2rem]">
        <div className="max-w-6xl mx-auto">
          <div className="bg-black text-white rounded-2xl p-8 mb-12 flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold mb-2">STAY UPTO DATE ABOUT</h2>
              <h2 className="text-3xl md:text-4xl font-bold">OUR LATEST OFFERS</h2>
            </div>
            <div className="flex flex-col gap-3 w-full md:w-auto">
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input type="email" placeholder="Enter your email address..." className="w-full md:w-80 bg-white text-black pl-12 pr-4 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-300" />
              </div>
              <button className="w-full md:w-80 bg-white text-black py-3 px-6 rounded-full font-medium hover:bg-gray-100 transition-colors">
                Subscribe to Newsletter
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
            <div className="md:col-span-1">
              <h3 className="text-2xl font-bold mb-4">SHOP.CO</h3>
              <p className="text-gray-600 text-sm mb-6">We have clothes that suits your style and which you're proud to wear. From women to men.</p>
              <div className="flex gap-3">
                <div className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-colors cursor-pointer"><Twitter className="w-5 h-5" /></div>
                <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors cursor-pointer"><Facebook className="w-5 h-5" /></div>
                <div className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-colors cursor-pointer"><Instagram className="w-5 h-5" /></div>
                <div className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-colors cursor-pointer"><Github className="w-5 h-5" /></div>
              </div>
            </div>

           
          </div>

          <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-600 mb-4 md:mb-0">Shop.co © 2000-2023, All Rights Reserved</p>
            <div className="flex gap-3">
              <div className="w-12 h-8 bg-white border border-gray-200 rounded flex items-center justify-center"><span className="text-xs font-bold text-blue-600">VISA</span></div>
              <div className="w-12 h-8 bg-white border border-gray-200 rounded flex items-center justify-center">
                <div className="flex gap-1"><div className="w-2 h-2 bg-red-500 rounded-full"></div><div className="w-2 h-2 bg-yellow-500 rounded-full"></div></div>
              </div>


              <div className="w-12 h-8 bg-white border border-gray-200 rounded flex items-center justify-center"><span className="text-xs font-bold text-blue-600">PayPal</span></div>
              <div className="w-12 h-8 bg-white border border-gray-200 rounded flex items-center justify-center"><span className="text-xs font-bold text-black">Pay</span></div>
              <div className="w-12 h-8 bg-white border border-gray-200 rounded flex items-center justify-center"><span className="text-xs font-bold text-gray-600">G Pay</span></div>
            </div>


          </div>
        </div>
           </footer>
    </>
  );
}

export default ProductGrid;
