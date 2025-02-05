
  
  const OrderConfirmation = ({ show }) => {
    if (!show) return null;
  
    return (
      <div className="fixed bottom-4 right-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded shadow-lg">
        <p className="font-bold">Order Confirmed!</p>
        <p>Your order has been received and will be delivered shortly.</p>
      </div>
    );
  };
  
  export default OrderConfirmation;