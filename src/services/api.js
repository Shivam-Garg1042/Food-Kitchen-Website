import dotenv from "dotenv";
dotenv.config();

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

export const submitOrder = async (orderData) => {
  const response = await fetch(`${API_URL}/orders/submit`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(orderData)
  });
  if (!response.ok) throw new Error('Failed to submit order');
  return response.json();
};