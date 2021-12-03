const router = require('express').Router();
const auth = require('../middleware/auth');
const Order = require('../models/order.model');
// post order
router.post('/', async (req, res) => {
  try {
    let {userId, products} = req.body;
    // validate
    if (!userId || !products || !products.length) return res.status(400).json({msg: 'Bad Request'});
    const order = await Order.findOne({userId: userId});

    if (order) {
      let amount = order.amount;
      products.forEach(product => {
        order.products.push(product);
        amount += product.price;
      });
      order.amount = amount;

      await order.save();
      return res.json(order);
    } else {
      const newOrder = new Order({
        userId,
        products,
      });
      let amount = 0;
      products.forEach(product => {
        amount += product.price;
      });
      newOrder.amount = amount;
      const savedOrder = await newOrder.save();
      res.json(savedOrder);
    }
  } catch (err) {
    res.sendStatus(500).json({error: err.message});
  }
});
// Get orders
router.get('/:userId', async (req, res) => {
  try {
    // validate
    const userId = req.params.userId;
    if (!userId) return res.sendStatus(400).json({msg: 'Bad Request'});

    const orders = await Order.findOne({userId: userId});
    if (!orders) {
      return res.sendStatus(404).json({error: 'Not Found'});
    }
    //console.log(order);
    res.send(orders);
  } catch (err) {
    res.status(500).json({error: err.message});
  }
});

module.exports = router;
