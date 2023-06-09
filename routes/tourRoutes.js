const express = require('express');

const router = express.Router();
const tourController = require('../controllers/toursController');
const authController = require('../controllers/authController');

router.route('/tour-stats').get(tourController.getTourStats);

router
  .route('/')
  .get(authController.protect, tourController.getAllTours)
  .post(tourController.createTour);
router
  .route('/:id')
  .get(tourController.getOneTour)
  .patch(tourController.updatedTour)
  .delete(
    authController.protect,
    authController.restectedTo('admin', 'lead-guide'),
    tourController.deleteTour
  );

module.exports = router;
