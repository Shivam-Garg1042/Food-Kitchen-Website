

import express from "express";
import { Feedback } from '../models/feedback.js';
import twilio from "twilio";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();

// Configure Twilio client
const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

router.post('/submit', async (req, res) => {
  try {
    const { name, phone, subject, message } = req.body;

    // Save to database
    const newFeedback = new Feedback({ name, phone, subject, message });
    await newFeedback.save();

    // Send WhatsApp notification
    const whatsappMessage = await client.messages.create({
      from: 'whatsapp:+14155238886', // Twilio's WhatsApp sandbox number
      body: `New Feedback Received!\n\nName: ${name}\nPhone: ${phone}\nSubject: ${subject}\nMessage: ${message}`,
      to: process.env.ADMIN_WHATSAPP_NUMBER  // Make sure this includes "whatsapp:"
    });

    console.log("WhatsApp Message Sent:", whatsappMessage.sid);
    res.status(201).json({ message: 'Feedback submitted successfully' });
  } catch (error) {
    console.error('Error sending WhatsApp message:', error.message);
    res.status(500).json({ message: 'Error submitting feedback', error: error.message });
  }
});

export default router;
