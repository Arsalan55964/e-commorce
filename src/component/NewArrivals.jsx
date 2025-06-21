
// import React, { useState } from "react";
// import products from "../data/products";
// import { useLocation } from "react-router-dom";

// const NewArrivals = () => {
//   const [showAll, setShowAll] = useState(false);

//   const featuredProducts = showAll ? products : products.slice(0, 4);


//   const location = useLocation();
//   const { product } = location.state || {};

//   if (!product) {
//     return <h2>No product selected</h2>;
//   }

//   return (
//     <div className="px-4 py-8">
//       <h1 className="text-4xl md:text-6xl font-extrabold text-center pb-8">
//         NEW ARRIVALS
//       </h1>

//       <div className="flex flex-wrap justify-center gap-10">
//         {featuredProducts.map((product) => (
//           <div
//             key={product.id}
//             className="text-center max-w-[200px] hover:scale-105 transition-transform duration-300"
//           >
//             <img
//               src={product.image}
//               alt={product.name}
//               className="mb-2 w-full object-cover rounded-lg shadow-md"
//             />
//             <p className="font-semibold mt-2">{product.name}</p>
//             <img
//               src={product.image1}
//               alt="rating"
//               className="my-2 mx-auto w-24"
//             />
//             <p className="font-bold text-xl text-gray-800">${product.price}</p>
//           </div>
//         ))}
//       </div>

//       {!showAll && (
//         <div className="flex justify-center">
//           <button
//             className="mt-10 h-12 w-48 border-2 border-gray-300 rounded-full text-black hover:bg-black hover:text-white transition duration-300"
//             onClick={() => setShowAll(true)}
//           >
//             VIEW ALL
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default NewArrivals;
import React, { useState } from "react";
import products from "../data/products";
import { useNavigate } from "react-router-dom";  // Import navigate

const NewArrivals = () => {
  const [showAll, setShowAll] = useState(false);

  const featuredProducts = showAll ? products : products.slice(0, 4);

  const navigate = useNavigate(); 
  const goToViewPage = (product) => {
    navigate("./View", { state: { product } });
  };

  return (
    <div className="px-4 py-8">
      <h1 className="text-4xl md:text-6xl font-extrabold text-center pb-8">
        NEW ARRIVALS
      </h1>

      <div className="flex flex-wrap justify-center gap-10">
        {featuredProducts.map((product) => (
          <div
            key={product.id}
            className="text-center max-w-[200px] hover:scale-105 transition-transform duration-300"
          >
            <img
              src={product.image}
              alt={product.name}
              className="mb-2 w-full object-cover rounded-lg shadow-md cursor-pointer"
              onClick={() => goToViewPage(product)}  
            />
            <p className="font-semibold mt-2">{product.name}</p>
            <img
              src={product.image1}
              alt="rating"
              className="my-2 mx-auto w-24"
            />
            <p className="font-bold text-xl text-gray-800">${product.price}</p>
          </div>
        ))}
      </div>

      {!showAll && (
        <div className="flex justify-center">
          <button
            className="cursor-pointer mt-10 h-12 w-48 border-2 border-gray-300 rounded-full text-black hover:bg-black hover:text-white transition duration-300"
            onClick={() => setShowAll(true)}
          >
            VIEW ALL
          </button>
        </div>
      )}
    </div>
  );
};

export default NewArrivals;
