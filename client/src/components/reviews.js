import React from "react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
 import "./reviews.css";

const reviewsData = [
  {
    id: 1,
    name: "John Doe",
    review:
      "The product was amazing! I loved it and would recommend it to everyone.",
  },
  {
    id: 2,
    name: "Jane Smith",
    review: "Great customer service and excellent quality. Will buy again.",
  },
  // Add more review objects here...
];

const Reviews = () => {
  SwiperCore.use([Navigation, Pagination, Autoplay]);

  return (
    <div className="reviews-container">
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
      >
        {reviewsData.map((review) => (
          <SwiperSlide key={review.id} className="review-slide">
            <div className="review-card">
              <h3>{review.name}</h3>
              <p>{review.review}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Reviews;
