import express from "express";
import { Order } from '../models/order.js';
import twilio from "twilio";
import dotenv from "dotenv";
dotenv.config();

const router = express.Router();

// Configure Twilio client
const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

router.post('/submit', async (req, res) => {
  try {
    const { name, phone, message } = req.body;

    // Save to database
    const newOrder = new Order({ name, phone,  message });
    await newOrder.save();

    // Send WhatsApp notification
    const whatsappMessage = await client.messages.create({
      from: 'whatsapp:+14155238886', // Twilio's WhatsApp sandbox number
      body: `New Order Received!\n\nName: ${name}\nPhone: ${phone}\nMessage: ${message}`,
      to: process.env.ADMIN_WHATSAPP_NUMBER  // Make sure this includes "whatsapp:"
    });

    console.log("Order submitted successfully");
    res.status(201).json({ message: 'Order submitted successfully' });
  } catch (error) {
    console.error('Error sending WhatsApp message:', error.message);
    res.status(500).json({ message: 'Error submitting feedback', error: error.message });
  }
});

export default router;
