// const express = require(`express`);
// const auth = require(`../middleware/auth.middleware`);
// const Feedback = require(`../models/Feedback`);
// const router = express.Router({ mergeParams: true });

// router
//      .route(`/`)
//      .get(auth, async (req, res) => {
//           try {
//                const { orderBy, equalTo } = req.query;
//                const list = await Feedback.find({ [orderBy]: equalTo });
//                res.send(list);
//           } catch (e) {
//                res.status(500).json({
//                     message: `На сервере произошла ошибка. Попробуйте позже...`,
//                });
//           }
//      })
//      .post(auth, async (req, res) => {
//           try {
//                const newFeedback = await Feedback.create({
//                     ...req.body,
//                     userId: req.user._id,
//                });
//                res.status(201).send(newFeedback);
//           } catch (e) {
//                res.status(500).json({
//                     message: `На сервере произошла ошибка. Попробуйте позже...`,
//                });
//           }
//      });

// router.delete(`/:feedbackId`, auth, async (req, res) => {
//      try {
//           const { feedbackId } = req.params;
//           const removedFeedback = await Feedback.findById(feedbackId);

//           if (removedFeedback.userId.toString() === req.user._id) {
//                await removedFeedback.remove();
//                return res.send(null);
//           } else {
//                res.status(401).json({ message: `Unauthorized` });
//           }
//      } catch (e) {
//           res.status(500).json({
//                message: `На сервере произошла ошибка. Попробуйте позже...`,
//           });
//      }
// });
// module.exports = router;
