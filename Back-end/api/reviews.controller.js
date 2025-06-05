import ReviewsDAO from "../dao/reviewsDAO.js";

export default class ReviewsCtrl {
  static async apiPostReview(req, res, next) {
    try {
      const movieId = parseInt(req.body.movieId);
      const user = req.body.user;
      const review = req.body.review;

      const reviewResponse = await ReviewsDAO.addReview(movieId, user, review);
      res.json({ status: "success" });
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }

  static async apiGetReview(req, res, next) {
    try {
      let reviewId = req.params.reviewId;
      const review = await ReviewsDAO.getReview(reviewId);
      if (!review) {
        res.status(404).json({ error: "Not found" });
        return;
      }
      res.json(review);
    } catch (e) {
      console.log(`api ${e}`);
      res.status(500).json({ error: e });
    }
  }

  static async apiUpdateReview(req, res, next) {
    try {
      const reviewId = req.params.reviewId;
      const newReview = req.body.review;
      const user = req.body.user;

      const reviewResponse = await ReviewsDAO.updateReview(
        reviewId,
        user,
        newReview
      );

      // Error1: if user unchange his old review
      if (reviewResponse.modifiedCount === 0) {
        throw new Error("you do not make any update");
      }

      // Error2: Bad request (server couldn't understand the request)
      var { error } = reviewResponse;
      if (error) {
        res.status(400).json({ error });
      }

      res.json({ status: "success" });
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }

  static async apiDeleteReview(req, res, next) {
    try {
      const reviewId = req.params.reviewId;

      const reviewResponse = await ReviewsDAO.deleteReview(reviewId);
      res.json({ status: "success" });
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }

  static async apiGetReviews(req, res, next) {
    try {
      let movieId = req.params.id || {};

      let reviews = await ReviewsDAO.getReviewsByMovieId(movieId);
      if (!reviews) {
        res.status(404).json({ error: "not found" });
        return; // end the funciton
      }

      res.json(reviews);
    } catch (e) {
      console.log(`api ${e}`);
      res.status(500).json({ error: e });
    }
  }
}
