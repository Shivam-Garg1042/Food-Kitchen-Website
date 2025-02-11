import { useState, useEffect } from 'react';
import { ChefHat, Utensils, Soup, ShoppingCart } from 'lucide-react';
import MenuItem from './MenuItem';
import { menuCategories } from './menuData';
import axios from 'axios';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('Lunch');
  const [totalItems, setTotalItems] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: ''
  });
  const [items, setItems] = useState({}); // State to track item quantities

  // Calculate total amount based on items
  const totalAmount = Object.keys(items).reduce((total, itemId) => {
    const item = menuCategories
      .flatMap(cat => cat.items)
      .find(item => item.id === itemId);
    return total + (item ? item.price * items[itemId] : 0);
  }, 0);

  const updateTotalItems = (itemId, change) => {
    setItems(prevItems => ({
      ...prevItems,
      [itemId]: (prevItems[itemId] || 0) + change
    }));
    setTotalItems(prevTotal => prevTotal + change);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // const handleSubmit = () => {
  //   if (!formData.name || !formData.phone || !formData.address) {
  //     alert('Please fill in all fields');
  //     return;
  //   }
  const handleSubmit = async () => {
  if (!formData.name || !formData.phone || !formData.address) {
    alert('Please fill in all fields');
    return;
  }

  try {
    // Prepare the order data
    const orderData = {
      name: formData.name,
      phone: formData.phone,
      message: `Order Details:\n\nTotal Items: ${totalItems}\nTotal Amount: ₹${totalAmount.toFixed(2)}\nDelivery Address: ${formData.address}`,
    };

    // Send the order data to the backend
    const response = await axios.post('http://localhost:5000/api/orders/submit', orderData);

    if (response.status === 201) {
      // Show confirmation message
      setShowConfirmation(true);

      // Auto close after 2 seconds
      setTimeout(() => {
        setShowConfirmation(false);
        setIsModalOpen(false);
        setTotalItems(0);
        setItems({}); // Reset items to zero
        setFormData({ name: '', phone: '', address: '' });
      }, 2500);
    }
  } catch (error) {
    console.error('Error submitting order:', error.message);
    alert('Error submitting order. Please try again.');
  }
};
    // Show confirmation message
  //   setShowConfirmation(true);
    
  //   // Auto close after 2 seconds
  //   setTimeout(() => {
  //     setShowConfirmation(false);
  //     setIsModalOpen(false);
  //     setTotalItems(0);
  //     setItems({}); // Reset items to zero
  //     setFormData({ name: '', phone: '', address: '' });
  //   }, 2500);
  // };

  return (
    <section id="menu" className="py-4 sm:py-8 bg-amber-40 w-full min-h-screen relative">
      {/* Background Icons */}
      <div className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden">
        <ChefHat className="absolute top-10 left-10 text-amber-300 w-16 h-16 sm:w-24 sm:h-24" />
        <Utensils className="absolute top-36 right-5 text-amber-300 w-20 h-20 sm:w-28 sm:h-28" />
        <Soup className="absolute bottom-1/2 left-1/2 text-amber-300 w-24 h-24 sm:w-32 sm:h-32" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">Our Menu</h2>
        </div>

        <div className="flex justify-center mb-6 sm:mb-8 overflow-x-auto py-2">
          <div className="flex space-x-2 sm:space-x-4">
            {menuCategories.map((category) => (
              <button
                key={category.name}
                onClick={() => setActiveCategory(category.name)}
                className={`px-3 sm:px-4 py-1 sm:py-2 rounded-full whitespace-nowrap text-sm sm:text-base ${
                  activeCategory === category.name
                    ? 'bg-primary text-white'
                    : 'bg-gray-200 text-gray-700'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {menuCategories
            .find((cat) => cat.name === activeCategory)
            ?.items.map((item) => (
              <MenuItem 
                key={item.id} 
                item={item} 
                quantity={items[item.id] || 0}
                updateTotalItems={(change) => updateTotalItems(item.id, change)} 
              />
            ))}
        </div>
      </div>

      {/* Floating Cart Button */}
      {totalItems > 0 && (
        <button
          onClick={() => setIsModalOpen(true)}
          className="fixed bottom-24 right-7 z-50 bg-red-500 text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center"
        >
          <ShoppingCart className="w-6 h-6" />
          <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-sm w-6 h-6 rounded-full flex items-center justify-center">
            {totalItems}
          </span>
        </button>
      )}

      {/* Order Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md">
            <div className="p-6">
              <h2 className="text-xl font-bold mb-4">Complete Your Order</h2>
              
              {/* Order Details */}
              <div className="mb-6">
                <p className="text-gray-600 mb-2">Total Items: {totalItems}</p>
                <p className="text-gray-600 mb-2">Total Amount: ₹{totalAmount.toFixed(2)}</p>
              </div>

              {/* Order Form */}
              <div className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full p-2 border rounded"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full p-2 border rounded"
                />
                <textarea
                  name="address"
                  placeholder="Delivery Address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                  className="w-full p-2 border rounded h-24"
                />
              </div>

              {/* Buttons */}
              <div className="flex space-x-4 mt-6">
                <button
                  onClick={handleSubmit}
                  className="flex-1 bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-emerald-600"
                >
                  Confirm Order
                </button>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Confirmation Modal */}
      {showConfirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <h3 className="text-xl font-bold text-emerald-500 mb-2">Order Confirmed!</h3>
            <p>Thank you for your order. It will be delivered soon.</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Menu;