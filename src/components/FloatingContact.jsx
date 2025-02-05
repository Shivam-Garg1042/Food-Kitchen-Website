import { useState } from 'react';
import { Phone, X } from 'lucide-react';

const FloatingContact = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative">
        {/* Info Popup */}
        {isOpen && (
          <div className="absolute bottom-16 right-0 bg-white rounded-lg shadow-xl p-4 w-64 animate-fade-up">
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              <X size={20} />
            </button>
            
            <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <Phone className="text-red-500 mr-2" size={16} />
                <span>91-8368080096</span>
              </div>
              <p className="text-sm text-gray-600">
                Available Mon-Sat: 11AM - 23PM
              </p>
              <a 
                href="tel:+918368080096"
                className="block text-center bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition duration-300 mt-3"
              >
                Call Now
              </a>
            </div>
          </div>
        )}

        {/* Floating Button - Always in the same position */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-red-500 hover:bg-red-600 text-white rounded-full p-4 shadow-lg transition duration-300 flex items-center justify-center"
        >
          <Phone size={24} />
        </button>
      </div>
    </div>
  );
};

export default FloatingContact;
// import { useState } from 'react';
// import { Phone, X, ShoppingBag } from 'lucide-react';

// const FloatingButtons = () => {
//   const [isContactOpen, setIsContactOpen] = useState(false);
//   const [isOrderOpen, setIsOrderOpen] = useState(false);

//   return (
//     <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
//       {/* Order Now Button and Popup */}
//       <div className="relative">
//         {isOrderOpen && (
//           <div className="absolute bottom-16 right-0 bg-white rounded-lg shadow-xl p-4 w-64 animate-fade-up">
//             <button 
//               onClick={() => setIsOrderOpen(false)}
//               className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
//             >
//               <X size={20} />
//             </button>
            
//             <h3 className="text-lg font-semibold mb-2">Order Now</h3>
//             <div className="space-y-2">
//               <div className="flex items-center">
//                 <ShoppingBag className="text-red-500 mr-2" size={16} />
//                 <span>Online Food Delivery</span>
//               </div>
//               <p className="text-sm text-gray-600">
//                 Order your favorite meals online!
//               </p>
//               <div className="grid grid-cols-2 gap-2 mt-3">
//                 <a 
//                   href="#" 
//                   target="_blank"
//                   className="flex items-center justify-center bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition duration-300"
//                 >
//                   Swiggy
//                 </a>
//                 <a 
//                   href="#" 
//                   target="_blank"
//                   className="flex items-center justify-center bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition duration-300"
//                 >
//                   Zomato
//                 </a>
//               </div>
//             </div>
//           </div>
//         )}
//         <button
//           onClick={() => {
//             setIsOrderOpen(!isOrderOpen);
//             setIsContactOpen(false); // Close contact popup if open
//           }}
//           className="bg-red-500 hover:bg-red-600 text-white rounded-full p-4 shadow-lg transition duration-300 flex items-center justify-center"
//         >
//           <ShoppingBag size={24} />
//         </button>
//       </div>

//       {/* Contact Button and Popup */}
//       <div className="relative">
//         {isContactOpen && (
//           <div className="absolute bottom-16 right-0 bg-white rounded-lg shadow-xl p-4 w-64 animate-fade-up">
//             <button 
//               onClick={() => setIsContactOpen(false)}
//               className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
//             >
//               <X size={20} />
//             </button>
            
//             <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
//             <div className="space-y-2">
//               <div className="flex items-center">
//                 <Phone className="text-red-500 mr-2" size={16} />
//                 <span>91-8368080096</span>
//               </div>
//               <p className="text-sm text-gray-600">
//                 Available Mon-Sat: 11AM - 23PM
//               </p>
//               <a 
//                 href="tel:+918368080096"
//                 className="block text-center bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition duration-300 mt-3"
//               >
//                 Call Now
//               </a>
//             </div>
//           </div>
//         )}
//         <button
//           onClick={() => {
//             setIsContactOpen(!isContactOpen);
//             setIsOrderOpen(false); // Close order popup if open
//           }}
//           className="bg-red-500 hover:bg-red-600 text-white rounded-full p-4 shadow-lg transition duration-300 flex items-center justify-center"
//         >
//           <Phone size={24} />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default FloatingButtons;
