import React from "react";
import ReviewItem from "./ReviewItem";

function Reviews() {
  const data = [
    {
      img: "https://ld-wp73.template-help.com/wordpress/prod_18709/v4/wp-content/uploads/2017/12/testy-1.jpg",
      name: "James Smith",
      review:
        "“I’d like to send you a sincere thank you for all of your assistance during my recent trip to Colorado.  It was invaluable to me and I realize and appreciate it greatly.",
    },
    {
      img: "https://ld-wp73.template-help.com/wordpress/prod_18709/v4/wp-content/uploads/2017/12/testy-2.jpg",
      name: "Mary Anderson",
      review:
        "“Leslie was an excellent Travel Agent for us and considered our unique needs as she planned our itinerary. Every suggestion she made was excellent.”.",
    },
    {
      img: "https://ld-wp73.template-help.com/wordpress/prod_18709/v4/wp-content/uploads/2017/12/testy-4.jpg",
      name: "Will Johnson",
      review:
        "“I would highly recommend Andy because everything on my month long trip to New Zealand, Australia and French Polynesia went without a hitch.”",
    },
  ];
  return (
    <div className="reviews-container">
      <div>
        <h1>What Customers Say</h1>
        <p>
          Our clients’ testimonials are the best proof of our high level of
          service
        </p>
      </div>
      <div className="reviews-list">
        {data.map((elt, i) => (
          <ReviewItem key={i} {...elt} />
        ))}
      </div>
    </div>
  );
}

export default Reviews;
