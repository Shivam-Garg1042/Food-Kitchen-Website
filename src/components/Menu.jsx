import { useState } from 'react';
import Image2 from "../assets/logo.png";
import { ChefHat, Utensils, Soup } from 'lucide-react';

const menuCategories = [
  {
    name: 'Breakfast',
    items: [
      { 
        name: 'Poha', 
        description: 'Lorem, deren, trataro, filede, nerada', 
        price: '₹30',
        image: Image2
      },
      { 
        name: 'Poha', 
        description: 'Lorem, deren, trataro, filede, nerada', 
        price: '₹30',
        image: Image2
      },
      { 
        name: 'Poha', 
        description: 'Lorem, deren, trataro, filede, nerada', 
        price: '₹30',
        image: Image2
      },
      // Add more starter items
    ]
  },
  {
    name: 'Lunch',
    items: [
      { 
        name: 'Veg Thali', 
        description: '4-Roti, Sabji, Rice, Salad, Chatni', 
        price: '₹70',
        image: Image2
      },
      { 
        name: 'Veg Thali', 
        description: '4-Roti, Sabji, Rice, Salad, Chatni', 
        price: '₹70',
        image: Image2
      },
      { 
        name: 'Veg Thali', 
        description: '4-Roti, Sabji, Rice, Salad, Chatni', 
        price: '₹70',
        image: Image2
      },
      // Add more breakfast items
    ]
  },
  {
    name: 'Dinner',
    items: [
      { 
        name: 'Veg Thali', 
        description: '4-Roti, Sabji, Rice, Salad, Chatni', 
        price: '₹70',
        image: Image2
      },
      { 
        name: 'Veg Thali', 
        description: '4-Roti, Sabji, Rice, Salad, Chatni', 
        price: '₹70',
        image: Image2
      },
      { 
        name: 'Veg Thali', 
        description: '4-Roti, Sabji, Rice, Salad, Chatni', 
        price: '₹70',
        image: Image2
      },
      // Add more breakfast items
    ]
  }
  // Add more categories
];

const MenuItem = ({ item }) => (
  <div className="bg-white rounded-lg shadow-md p-4 transform transition hover:scale-105">
    <img 
      src={item.image} 
      alt={item.name} 
      className="w-full h-48 object-cover rounded-t-lg mb-4"
    />
    <h4 className="text-xl font-bold text-gray-800">{item.name}</h4>
    <p className="text-gray-600 mb-2">{item.description}</p>
    <p className="text-primary font-semibold">{item.price}</p>
  </div>
);

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('Lunch');

  return (
    <section id="menu" className="py-8 bg-amber-30 w-full h-full flex items-center justify-center overflow-hidden relative">
      {/* Background Icons */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <ChefHat className="absolute top-10 left-10 text-amber-300" size={100} />
        <Utensils className="absolute top-36 right-5 text-amber-300" size={120} />
        <Soup className="absolute bottom-1/2 left-1/2 text-amber-300" size={140} />
        {/* <ChefHat className="absolute top-100 left-10 text-amber-300" size={100} />
        <Utensils className="absolute top-1/2 right-1/3 text-amber-300" size={120} />
        <Soup className="absolute bottom-1/5 left-1/8 text-amber-300" size={140} /> */}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Menu</h2>
        </div>

        <div className="flex justify-center mb-8 space-x-4">
          {menuCategories.map((category) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              className={`px-4 py-2 rounded-full ${
                activeCategory === category.name 
                  ? 'bg-primary text-white' 
                  : 'bg-gray-200 text-gray-700'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {menuCategories
            .find(cat => cat.name === activeCategory)
            ?.items.map((item, index) => (
              <MenuItem key={index} item={item} />
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default Menu;