
// import React from "react";
// import { useLocation } from "react-router-dom";

// const View = () => {
//   const location = useLocation();
//   const { product } = location.state || {};

//   if (!product) {
//     return <h2>No product selected</h2>;
//   }

  

//   return (
//     <div className="h-[35rem] w-full  flex mb-6 rounded-[20px]  ">
//       <div className="h-full w-1/2  flex justify-center items-center">
//         <img
//           src={product.image}
//           alt={product.name}
//           className="h-[30rem] w-[70%] rounded-[20px] mt-[4rem] object-cover"
//         />
//       </div>

//       <div className="h-full w-1/2  p-8 flex mt-[1rem] grid">
//         <div className="bg-white p-4 rounded-[10px] mb-4 ">
//           <h1 className="text-2xl font-bold mt-2">{product.name}</h1>
//           <img
//             src={product.image1}
//             alt="Mini"
//             className="h-[1rem] w-[5rem] mt-[1rem] object-cover rounded-[10px]"
//           />
//         <p className="font-bold mt-[1rem]">{product.price}</p>
// <button className="h-[20%] w-[10rem] mt-[1rem] bg-black text-white rounded-[10px]">
//   Add to cart
// </button>

//         </div>

//           <h1 className="text-xl font-semibold mt-[1rem]">Color</h1>

//         <div className="bg-white p-4 rounded-[10px] mb-6  flex gap-[1rem]">
//           <div className="h-[3rem] w-[3rem] bg-red-500 rounded-full"></div>
//                     <div className="h-[3rem] w-[3rem] bg-green-500 rounded-full absolute"></div>
//                     <div className="h-[3rem] w-[3rem] bg-yellow-500 rounded-full relative"></div>
//                     <div className="h-[3rem] w-[3rem] bg-blue-500 rounded-full relative"></div>

//                     <div className="h-[3rem] w-[3rem] bg-red-500 rounded-full relative"></div>
//                     <div className="h-[3rem] w-[3rem] bg-green-900 rounded-full relative"></div>



//         </div>

//           <h1 className="text-xl font-semibold mb-2">Size</h1>


//         <div className="bg-white p-4 rounded-[10px] ">
//           <div className="flex space-x-2">
//             <div className=" w-[7rem] px-3 py-1 bg-gray-200 rounded text-center">Size</div>
//             <div className="  w-[7rem] px-3 py-1 bg-gray-200 rounded   text-center">Medium</div>
//             <div className=" w-[7rem]  px-3 py-1 bg-gray-200 rounded text-center">Large</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default View;
import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { CartContext } from "./context/CartContext";

const View = () => {
  const location = useLocation();
  const { product } = location.state || {};

  const { addToCart } = useContext(CartContext);

  if (!product) {
    return <h2>No product selected</h2>;
  }

  return (
    <div className="h-[35rem] w-full flex mb-6 rounded-[20px]">
      <div className="h-full w-1/2 flex justify-center items-center">
        <img
          src={product.image}
          alt={product.name}
          className="h-[30rem] w-[70%] rounded-[20px] mt-[4rem] object-cover"
        />
      </div>

      
      <div className="h-full w-1/2 p-8 flex mt-[1rem] grid">
        <div className="bg-white p-4 rounded-[10px] mb-4">
          <h1 className="text-2xl font-bold mt-2">{product.name}</h1>
          <img
            src={product.image1}
            alt="Mini"
            className="h-[1rem] w-[5rem] mt-[1rem] object-cover rounded-[10px]"
          />
          <p className="font-bold mt-[1rem]">${product.price}</p>


          <button
            className="h-[20%] w-[10rem] mt-[1rem] bg-black text-white rounded-[10px] cursor-pointer"
            onClick={() => addToCart(product)}>Add to cart
          </button>
          <hr className="mt-[1rem]"/>
        </div>

        <h1 className="text-xl font-semibold mt-[1rem]">Color</h1>

        <div className="bg-white p-4 rounded-[10px] mb-6 flex gap-[1rem]">
          <div className="h-[3rem] w-[3rem] bg-red-500 rounded-full"></div>
          <div className="h-[3rem] w-[3rem] bg-green-500 rounded-full"></div>
          <div className="h-[3rem] w-[3rem] bg-yellow-500 rounded-full"></div>
          <div className="h-[3rem] w-[3rem] bg-blue-500 rounded-full"></div>
          <div className="h-[3rem] w-[3rem] bg-red-500 rounded-full"></div>
          <div className="h-[3rem] w-[3rem] bg-green-900 rounded-full"></div>

        </div>
                  <hr className="mt-[1rem] mb-[2rem]"/>


        <h1 className="text-xl font-semibold mb-2">Size</h1>

        <div className="bg-white p-4 rounded-[10px]">
          <div className="flex space-x-2">
            <div className="w-[7rem] px-3 py-1 bg-gray-200 rounded text-center">Size</div>
            <div className="w-[7rem] px-3 py-1 bg-gray-200 rounded text-center">Medium</div>
            <div className="w-[7rem] px-3 py-1 bg-gray-200 rounded text-center">Large</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default View;
