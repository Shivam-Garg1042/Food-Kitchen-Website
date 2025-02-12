import express from "express";
const router = express.Router();

// You might want to use a database in production
let orders = [];

router.post('/api/orders', async (req, res) => {
  try {
    const { items, total, customerInfo } = req.body;
    
    // Generate order ID
    const orderId = Date.now().toString();
    
    // Create new order
    const newOrder = {
      id: orderId,
      items,
      total,
      customerInfo,
      status: 'pending',
      createdAt: new Date()
    };
    
    // Save order (in production, this would go to a database)
    orders.push(newOrder);
    
    // Here you could:
    // 1. Send confirmation email to customer
    // 2. Send notification to restaurant
    // 3. Update inventory
    // 4. Process payment
    
    res.status(201).json({
      success: true,
      orderId: orderId,
      message: 'Order created successfully'
    });
  } catch (error) {
    console.error('Order creation error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to create order'
    });
  }
});

// Get all orders (for admin panel)
router.get('/api/orders', (req, res) => {
  res.json(orders);
});

export default router;