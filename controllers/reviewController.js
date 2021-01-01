const Review = require('../models/reviewModel');
const factory = require('./handlerFactory');
//const catchAsync = require('./../utils/catchAsync');

exports.setTourUserId = (req, res, next) => {
  // Allow nested routes
  if (!req.body.tour) req.body.tour = req.params.tourId;
  if (!req.body.user) req.body.user = req.user.id;
  next();
};

exports.createReview = factory.createOne(Review);

exports.deleteReview = factory.deleteOne(Review);

exports.updateReview = factory.updateOne(Review);

exports.getAllReviews = factory.getAll(Review);

exports.getReview = factory.getOne(Review);


