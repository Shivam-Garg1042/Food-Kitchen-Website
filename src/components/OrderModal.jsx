import { useState } from 'react';
import { useCart } from './CartContext';
import { X } from 'lucide-react';

const OrderModal = () => {
  const { 
    cartItems, 
    getCartTotal, 
    clearCart, 
    isOrderModalOpen, 
    setIsOrderModalOpen,
    orderStatus,
    setOrderStatus 
  } = useCart();

  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    phone: '',
    address: '',
    note: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          items: cartItems,
          total: getCartTotal(),
          customerInfo
        }),
      });

      if (response.ok) {
        setOrderStatus('success');
        clearCart();
        // Reset form
        setCustomerInfo({
          name: '',
          phone: '',
          address: '',
          note: ''
        });
      } else {
        setOrderStatus('error');
      }
    } catch (error) {
      console.error('Order submission error:', error);
      setOrderStatus('error');
    }
  };

  if (!isOrderModalOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Complete Your Order</h2>
            <button 
              onClick={() => setIsOrderModalOpen(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <X size={24} />
            </button>
          </div>

          {orderStatus === 'success' ? (
            <div className="text-center py-8">
              <div className="text-green-500 mb-4">
                <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Order Confirmed!</h3>
              <p className="text-gray-600">Thank you for your order. We'll contact you shortly.</p>
              <button
                onClick={() => {
                  setIsOrderModalOpen(false);
                  setOrderStatus(null);
                }}
                className="mt-4 bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Order Summary */}
              <div className="bg-gray-50 p-4 rounded-md mb-4">
                <h3 className="font-semibold mb-2">Order Summary</h3>
                {cartItems.map(item => (
                  <div key={item.id} className="flex justify-between text-sm mb-2">
                    <span>{item.name} x {item.quantity}</span>
                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
                <div className="border-t mt-2 pt-2 font-semibold flex justify-between">
                  <span>Total:</span>
                  <span>${getCartTotal().toFixed(2)}</span>
                </div>
              </div>

              {/* Customer Information Form */}
              <input
                type="text"
                placeholder="Full Name"
                value={customerInfo.name}
                onChange={(e) => setCustomerInfo(prev => ({ ...prev, name: e.target.value }))}
                className="w-full px-4 py-2 border rounded-md"
                required
              />
              <input
                type="tel"
                placeholder="Phone Number"
                value={customerInfo.phone}
                onChange={(e) => setCustomerInfo(prev => ({ ...prev, phone: e.target.value }))}
                className="w-full px-4 py-2 border rounded-md"
                required
              />
              <textarea
                placeholder="Delivery Address"
                value={customerInfo.address}
                onChange={(e) => setCustomerInfo(prev => ({ ...prev, address: e.target.value }))}
                className="w-full px-4 py-2 border rounded-md"
                required
                rows="3"
              />
              <textarea
                placeholder="Order Notes (optional)"
                value={customerInfo.note}
                onChange={(e) => setCustomerInfo(prev => ({ ...prev, note: e.target.value }))}
                className="w-full px-4 py-2 border rounded-md"
                rows="2"
              />

              {orderStatus === 'error' && (
                <div className="text-red-500 text-sm">
                  Something went wrong. Please try again.
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-red-500 text-white py-3 rounded-md hover:bg-red-600 transition duration-300"
              >
                Confirm Order
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderModal;