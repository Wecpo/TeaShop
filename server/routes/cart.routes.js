const express = require(`express`);
const Cart = require(`../models/Cart`);
const router = express.Router({ mergeParams: true });

router.get(`/`, async (req, res) => {
     try {
          const list = await Cart.find();
          res.send(list);
     } catch (e) {
          res.status(500).json({
               message: `На сервере произошла ошибка. Попробуйте позже...`,
          });
     }
});

router.post(`/`, async (req, res) => {
     try {
          const newCart = await Cart.create({
               count: 2,
          });
          console.log(newCart);
          res.status(200).send({ cartId: newCart._id });
     } catch (error) {
          res.status(500).json({
               message: `На сервере произошла ошибка. Попробуйте позже...`,
          });
     }
});

module.exports = router;
