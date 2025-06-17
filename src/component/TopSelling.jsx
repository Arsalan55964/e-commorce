const TopSelling = () => {
  const Boxes = [
    {
      id: 1,
      image: "Frame 32 (1).svg",
      name: "Verticale Striped Shirt",
      image1: "Frame 35.jpg",
      price: "$212",
      image2: "$232.svg",
      image3: "Frame 42.svg",
    },
    {
      id: 2,
      image: "Frame 33 (1).svg",
      name: "Courage Graphic T-shirt",
      price: "$240",
      image1: "Frame 39 (1).svg",
      image2: "Frame 59.svg",
    },
    {
      id: 3,
      image: "Frame 34 (1).svg",
      name: "Losse Fit Bermuda Short",
      image1: "Frame 40.svg",
      price: "$80",
    },
    {
      id: 4,
      image: "Frame 38 (1).svg",
      name: "Faded Skinny Fit Jeans",
      image1: "Frame 35.svg",
      price: "$210",
    },
  ];

  return (
    <>
      <img src="Line 4.svg" className="pt-8 mx-auto" />
      <h1 className="flex justify-center font-extrabold text-6xl pt-5">
        TOP SELLING
      </h1>
      {/* <div className="flex flex-wrap justify-center gap-8 pt-10 px-4">
        
        <div>
          <img src="Frame 32 (1).svg" />
          <p className="font-semibold">Verticale Striped Shirt</p>
          <img src="Frame 35.jpg" />
          <div className="flex gap-1 items-center">
            <p className="font-bold text-2xl">$212</p>
            <img src="$232.svg" />
            <img src="Frame 42.svg" />
          </div>
        </div>
       
        <div>
          <img src="Frame 33 (1).svg" />
          <p className="font-semibold">Courage Graphic T-shirt</p>
          <img src="Frame 39 (1).svg" />
          <img src="Frame 59.svg" />
        </div>
       
        <div>
          <img src="Frame 34 (1).svg" />
          <p className="font-semibold">Losse Fit Bermuda Short</p>
          <img src="Frame 40.svg" />
          <p className="font-bold text-2xl">$80</p>
        </div>
     
        <div>
          <img src="Frame 38 (1).svg" />
          <p className="font-semibold">Faded Skinny Fit Jeans</p>
          <img src="Frame 35.svg" />
          <p className="font-bold text-2xl">$210</p>
        </div>
      </div> */}
      <div className="flex flex-wrap justify-center gap-25 mt-10">
        {Boxes.map((Boxes) => (
          <div
            key={Boxes.id}
            className="text-center max-w-[200px] hover:scale-105 transition-transform duration-300"
          >
            <img
              src={Boxes.image}
              alt={Boxes.name}
              className="mb-2 w-full object-cover rounded-lg shadow-md"
            />
            <p className="font-semibold mt-2">{Boxes.name}</p>
            <img
              src={Boxes.image1}
              alt="rating"
              className="my-2 mx-auto w-24"
            />
            <p className="font-bold text-xl text-gray-800">{Boxes.price}</p>
          
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <button
          className="mt-10 h-12 w-48 border-2 border-gray-300 rounded-full text-black hover:bg-black hover:text-white transition-colors duration-300"
          onClick={() => alert("VIEW ALL")}
        >
          VIEW ALL
        </button>
      </div>
      <div className="pt-20 flex flex-wrap justify-center pb-5">
        {/* <img src="Frame 60.png" className="max-w-full h-auto" /> */}
      </div>
    </>
  );
};

export default TopSelling;
