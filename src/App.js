
// import './App.css';
// import './index.css';
// import Navbar from './components/Navbar';
// import ScrollbarLinks from './components/ScrollBarLinks';
// import HeroSection from './components/Hero';
// import TextSection from './components/TextSec';
// import CardSlider from './components/CardsSlider';
// import React, { useState } from "react";
// import { FaArrowLeft, FaArrowRight, FaHeart, FaStar } from "react-icons/fa";

// //added changes
// function App() {

//   export default async function Products() {
//     const fetchdata = await fetch("https://fakestoreapi.com/products");
//     const res = await fetchdata.json();
  
//   const [currentIndex, setCurrentIndex] = useState(0);
//   // const cards = [
//   //   {
//   //     image: "https://via.placeholder.com/300",
//   //     label: "New!",
//   //     title: "Boujee Marshmallow 10ml Travel Spray",
//   //     price: "$129",
//   //     rating: "4.9",
//   //     reviews: "(200)",
//   //   },
//   //   // Add 7 more card objects with unique content
//   //   ...Array(7).fill({
//   //     image: "https://via.placeholder.com/300",
//   //     label: "New!",
//   //     title: "Boujee Marshmallow 10ml Travel Spray",
//   //     price: "$129",
//   //     rating: "4.9",
//   //     reviews: "(200)",
//   //   }),
//   // ];

//   const handleNext = () => {
//     if (currentIndex < cards.length - 1) {
//       setCurrentIndex(currentIndex + 1);
//     }
//   };

//   const handlePrev = () => {
//     if (currentIndex > 0) {
//       setCurrentIndex(currentIndex - 1);
//     }
//   };

  
//   return (
//    <main>
//     <Navbar />
//     <ScrollbarLinks />
//     <HeroSection />
//     <TextSection />

//     <div>
//     {res.map((val) => (
//           <div className="w-full relative overflow-hidden">
//           <div className="flex items-center justify-between absolute top-1/2 left-0 w-full z-10">
//             <button
//               className="text-pink-700 bg-white rounded-full p-2 hover:bg-pink-700 hover:text-white transition"
//               onClick={handlePrev}
//             >
//               <FaArrowLeft size={24} />
//             </button>
//             <button
//               className="text-pink-700 bg-white rounded-full p-2 hover:bg-pink-700 hover:text-white transition"
//               onClick={handleNext}
//             >
//               <FaArrowRight size={24} />
//             </button>
//           </div>
    
//           {/* cards */}
//           <div
//             className="flex transition-transform duration-500 "
//             style={{ transform: `translateX(-${currentIndex * 300}px)` }}
//           >
//             {cards.map((card, index) => (
//               <div
//                 key={index}
//                 className="w-[310px] h-[600px] flex-shrink-0 border-2 border-pink-700 rounded-lg overflow-hidden m-2"
//               >
//                 <div className="relative">
//                   <img
//                     src={card.image}
//                     alt={card.title}
//                     className="w-full h-[300px] object-cover"
//                   />
//                   <span className="absolute top-2 left-2 bg-pink-700 text-white text-xs font-bold rounded-full px-2 py-1">
//                     {card.label}
//                   </span>
//                   <FaHeart
//                     className="absolute top-2 right-2 text-pink-700 hover:text-red-500 cursor-pointer"
//                     size={20}
//                   />
//                 </div>
//                 <div className="p-4 flex flex-col gap-3">
//                   <h2 className="text-lg font-bold text-gray-800">{card.title}</h2>
//                   <p className="text-pink-700 font-semibold">{card.price}</p>
//                   <div className="flex items-center gap-1">
//                     {[...Array(5)].map((_, i) => (
//                       <FaStar key={i} className="text-yellow-500" />
//                     ))}
//                     <span className="text-gray-600 ml-1">{card.rating} {card.reviews}</span>
//                   </div>
//                   <button
//                     className="px-6 py-3 bg-pink-700 text-white font-semibold rounded-lg hover:bg-white hover:border hover:border-pink-700 hover:text-pink-700 transition"
//                   >
//                     Add to Cart
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//           </div>
    
//     ))}
//     </div>

//     <CardSlider />
//    </main>
//   );
// }

// export default App;



import React, { useState, useEffect } from "react";
import Navbar from './components/Navbar';
import ScrollbarLinks from './components/ScrollBarLinks';
import HeroSection from './components/Hero';
import TextSection from './components/TextSec';
import { FaArrowLeft, FaArrowRight, FaHeart, FaStar } from "react-icons/fa";
import SHero from "./components/SHero";
import SCardsR from "./components/SCardsR";
import CardsSlider from './components/CardsSlider';

function App() {
  const [products, setProducts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fetch products from the Makeup API
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline");
      const data = await response.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  const handleNext = () => {
    if (currentIndex < products.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <main className="">
      <Navbar />
      <ScrollbarLinks />
      <HeroSection />
      <TextSection />

      <div className="w-full relative overflow-hidden">
        <div className="flex items-center justify-between absolute top-1/2 left-0 w-full z-10">
          <button
            className="text-pink-700 bg-white rounded-full p-2 hover:bg-pink-700 hover:text-white transition"
            onClick={handlePrev}
          >
            <FaArrowLeft size={24} />
          </button>
          <button
            className="text-pink-700 bg-white rounded-full p-2 hover:bg-pink-700 hover:text-white transition"
            onClick={handleNext}
          >
            <FaArrowRight size={24} />
          </button>
        </div>

        {/* Product Cards */}
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 300}px)` }}
        >
          {products.map((product, index) => (
            <div
              key={product.id || index}
              className="w-[310px] h-[600px] flex-shrink-0 border-2 border-pink-700 rounded-lg overflow-hidden m-2"
            >
              <div className="relative">
                <img
                  src={product.image_link || "https://via.placeholder.com/300"}
                  alt={product.name}
                  className="w-full h-[50%] object-cover"
                />
                <span className="absolute top-2 left-2 bg-pink-700 text-white text-xs font-bold rounded-full px-2 py-1">
                  {product.category || "New"}
                </span>
                <FaHeart
                  className="absolute top-2 right-2 text-pink-700 hover:text-red-500 cursor-pointer"
                  size={20}
                />
              </div>
              <div className="p-4 flex flex-col gap-5 h-[40%]">
                <h2 className="text-lg font-bold text-gray-800 h-[120px]">{product.name}</h2>
                <p className="text-pink-700 font-semibold">${product.price || "N/A"}</p>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-500" />
                  ))}
                  <span className="text-gray-600 ml-1">
                    {product.rating || "N/A"} ({product.review_count || "0"})
                  </span>
                </div>
                <button className="px-6 py-3 bg-pink-700 text-white font-semibold rounded-lg hover:bg-white hover:border hover:border-pink-700 hover:text-pink-700 transition">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

            <CardsSlider />
      <SHero />
      <SCardsR />
      
    </main>
  );
}

export default App;
