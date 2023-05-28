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

module.exports = router;
