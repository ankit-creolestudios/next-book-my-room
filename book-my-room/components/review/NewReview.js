import { useRouter } from "next/router";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";

const NewReview = () => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const dispatch = useDispatch();
  const router = useRouter();
  const { id } = router.query;
  const submitReview = () => {
    const review = {
      rating,
      comment,
      roomId: id,
    };
  };
  return (
    <div
      className="modal fade"
      id="ratingModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="ratingModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="ratingModalLabel">
              Submit Review
            </h5>

            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <ul className="stars">
              <li className="star">
                <i className="fa fa-star"></i>
              </li>
              <li className="star">
                <i className="fa fa-star"></i>
              </li>
              <li className="star">
                <i className="fa fa-star"></i>
              </li>
              <li className="star">
                <i className="fa fa-star"></i>
              </li>
              <li className="star">
                <i className="fa fa-star"></i>
              </li>
            </ul>

            <textarea
              name="review"
              id="review"
              className="form-control mt-3"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            ></textarea>

            <button
              className="btn my-3 float-right review-btn px-4 text-white"
              data-dismiss="modal"
              aria-label="Close"
              onClick={submitReview}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewReview;