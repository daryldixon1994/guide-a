import React from "react";
import "./style.css"
function ReviewItem({ img, name, review }) {
  return (
    <div className="review-item">
      <img src={img} alt="" width={100} />
      <h2> {name} </h2>
      <p> {review} </p>
    </div>
  );
}

export default ReviewItem;
