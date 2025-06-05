import express from "express";
import ReviewsCtrl from "./reviews.controller.js";

const router = express.Router();
// call static methods from ReviewsCtrl class
router.route("/movie/:id").get(ReviewsCtrl.apiGetReviews); // get all reviews of specific movie
router.route("/newReview").post(ReviewsCtrl.apiPostReview); // add(post) new review to a specific movie
router
  .route("/:reviewId") // get,update(put) or delete the review info
  .get(ReviewsCtrl.apiGetReview)
  .put(ReviewsCtrl.apiUpdateReview)
  .delete(ReviewsCtrl.apiDeleteReview);

export default router;
