import mongodb from "mongodb";

const ObjectId = mongodb.ObjectId;

let reviews; // our database varable

export default class ReviewsDAO {
  static async injectDB(conn) {
    if (reviews) {
      // if i already connected to the database
      return;
    }
    try {
      reviews = await conn.db("reviews").collection("reviews");
    } catch (e) {
      console.error(`Unable to establish collection handles in userDAO: ${e}`);
    }
  }

  static async addReview(movieId, user, review) {
    try {
      const reviewDoc = {
        // document is an entry (record) in MongoDB
        movieId: movieId,
        user: user,
        review: review,
      };

      return await reviews.insertOne(reviewDoc);
    } catch (e) {
      console.error(`Unable to post review: ${e}`);
      return { error: e };
    }
  }

  static async getReview(reviewId) {
    try {
      return await reviews.findOne({ _id: new ObjectId(reviewId) });
    } catch (e) {
      console.error(`Unable to get review: ${e}`);
      return { error: e.message };
    }
  }

  static async updateReview(reviewId, user, newReview) {
    try {
      const updateResponse = await reviews.updateOne(
        { _id: new ObjectId(reviewId) },
        { $set: { user: user, review: newReview } }
      );
      return updateResponse;
    } catch (e) {
      console.error(`Unable to update review: ${e}`);
      return { error: e };
    }
  }

  static async deleteReview(reviewId) {
    try {
      return await reviews.deleteOne({ _id: new ObjectId(reviewId) });
    } catch (e) {
      console.error(`Unable to delete review: ${e}`);
      return { error: e };
    }
  }

  static async getReviewsByMovieId(movieId) {
    try {
      const cursor = await reviews.find({ movieId: parseInt(movieId) });
      return cursor.toArray();
    } catch (e) {
      console.error(`Unable to get reviews: ${e}`);
      return { error: e };
    }
  }
}
