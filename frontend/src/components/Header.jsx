
// import { ChefHat, Utensils, Soup } from 'lucide-react';

// const Header = ({ onOrder }) => {
//   return (
//     <header className="relative bg-amber-50 w-150 h-full flex items-center justify-center overflow-hidden">
//       {/* Background Food Icons */}
      // <div className="absolute inset-0 opacity-10">
      //   <ChefHat className="absolute top-10 left-10 text-amber-300" size={100} />
      //   <Utensils className="absolute top-1/3 right-20 text-amber-300" size={120} />
      //   <Soup className="absolute bottom-20 left-1/4 text-amber-300" size={140} />
      // </div>

//       {/* Content Container */}
//       <div className="relative z-10 text-center bg-white/70 backdrop-blur-sm p-12 rounded-3xl shadow-2xl max-w-2xl mx-4">
//         <div className="mb-8">
//           <h1 className="text-5xl md:text-6xl font-extrabold text-amber-800 mb-4 tracking-tight">
//             Mamta Di Rasoi
//           </h1>
//           <p className="text-xl md:text-2xl text-amber-700 mb-8 italic">
//             Ghar Ka Khana - Straight from the Heart
//           </p>
//         </div>

//         <div className="flex flex-col sm:flex-row justify-center gap-4">
//           <button 
//             onClick={onOrder}
//             className="w-full sm:w-auto bg-amber-600 text-white px-8 py-3 rounded-full 
//             hover:bg-amber-700 transition-all duration-300 ease-in-out 
//             transform hover:-translate-y-1 shadow-lg hover:shadow-xl 
//             flex items-center justify-center gap-2"
//           >
//             <Utensils size={20} />
//             Order Now
//           </button>
//           <button 
//             className="w-full sm:w-auto border-2 border-amber-600 text-amber-600 
//             px-8 py-3 rounded-full hover:bg-amber-50 
//             transition-all duration-300 ease-in-out 
//             transform hover:-translate-y-1 shadow-md hover:shadow-lg
//             flex items-center justify-center gap-2"
//           >
//             <ChefHat size={20} />
//             View Menu
//           </button>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;




import  { useState, useEffect } from 'react';
<<<<<<< HEAD
import heroImage1 from '../assets/logo2.png';
import heroImage2 from '../assets/logo2.png';
import heroImage3 from '../assets/logo.png';
=======
import heroImage1 from '../assets/food2.jpg';
import heroImage2 from '../assets/food1.avif';
import heroImage3 from '../assets/food3.jpeg';
>>>>>>> 96db045 (final)

const Header = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [heroImage1, heroImage2, heroImage3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section id = "home">
    <div className="relative w-full h-[750px] overflow-hidden">
      {/* Image Carousel */}
      <div className="absolute inset-0 transition-all duration-500 ease-in-out">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Hero ${index + 1}`}
            className={`absolute w-full h-full object-cover transition-opacity duration-500 ${
              currentImage === index ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center bg-black bg-opacity-50 px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fadeIn">
          Enjoy Your Healthy
          <br />
          Delicious Meal
        </h1>
        <h2 className="text-2xl md:text-4xl mb-6 font-semibold text-yellow-300 animate-fadeIn">
          #Ghar Ka Khana
        </h2>
        <button className="bg-primary text-white px-8 py-3 rounded-full text-lg hover:bg-primary-dark transition-colors animate-pulse">
        <a href="#menu"> View Menu</a>
        </button>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              currentImage === index ? 'bg-primary' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
    </section>
  );
};

export default Header;