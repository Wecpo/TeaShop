const express = require(`express`);
const Tea = require(`../models/Tea`);
const router = express.Router({ mergeParams: true });
const auth = require(`../middleware/auth.middleware`);

router.get(`/`, async (req, res) => {
     try {
          const list = await Tea.find();
          res.status(200).send(list);
     } catch (e) {
          res.status(500).json({
               message: `На сервере произошла ошибка. Попробуйте позже...`,
          });
     }
});

router.delete(`/:teaId`, auth, async (req, res) => {
     try {
          const { teaId } = req.params;
          await Tea.findByIdAndDelete(teaId);
     } catch (e) {
          res.status(500).json({
               message: `На сервере произошла ошибка. Попробуйте позже...`,
          });
     }
});

router.patch(`/:teaId`, async (req, res) => {
     try {
          const { teaId } = req.params;
          if (teaId === req.body._id) {
               const updatedTea = await Tea.findByIdAndUpdate(teaId, req.body, {
                    new: true,
               });
               res.send(updatedTea);
          } else {
               res.status(401).json({ message: `Unauthorized` });
          }
     } catch (e) {
          res.status(500).json({
               message: `На сервере произошла ошибка. Попробуйте позже...`,
          });
     }
});

router.post(`/createTea`, auth, async (req, res) => {
     try {
          const newTea = await Tea.create({
               ...req.body,
          });
          res.status(201).send(newTea);
     } catch (e) {
          res.status(500).json({
               message: `На сервере произошла ошибка. Попробуйте позже...`,
          });
     }
});

module.exports = router;
