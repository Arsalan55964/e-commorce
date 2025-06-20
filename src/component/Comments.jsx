import React from "react";

const testimonials = [
  {
    name: "James L.",
    review:
      "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shopco. The selection of clothes is not only diverse but also on-point with the latest trends.",
    stars: 5,
  },
  {
    name: "Sarah M.",
    review:
      "I'm blown away by the quality and style of the clothes I received from Shopco. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    stars: 5,
  },
  {
    name: "Alex K.",
    review:
      "Finding clothes that align with my personal style used to be a challenge until I discovered Shopco. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
    stars: 5,
  },
  
];

const TestimonialCard = ({ name, review, stars }) => {
  return (
    <div className="flex flex-col  rounded-xl px-6 py-4 w-[300px] ml-[5rem]  shadow-sm">
      <div className="flex mb-3">
        {Array(stars)
          .fill(0)
          .map((_, i) => (
            <svg
              key={i}
              className="h-5 w-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
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

const Testimonials = () => {
  return (
    <section className="px-[4rem] py-[3rem]">
      <h2 className="text-4xl font-extrabold mb-8">OUR HAPPY CUSTOMERS</h2>
      <div className="flex gap-5 overflow-x-auto scrollbar-hide">
        {testimonials.map((item, index) => (
          <TestimonialCard
            key={index}
            name={item.name}
            review={item.review}
            stars={item.stars}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
