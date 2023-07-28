// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';

// import 'swiper/swiper-bundle.css';
// import 'swiper/swiper-bundle.min.css';

// // import 'swiper/swiper.scss'; // Import Swiper styles
// import 'swiper/components/pagination/pagination.scss'; // Import Swiper pagination styles
// import 'swiper/components/navigation/navigation.scss'; // Import Swiper navigation styles
// // import { Swiper, SwiperSlide } from 'react-id-swiper';

// const reviewsData = [
//   {
//     id: 1,
//     name: 'John Doe',
//     review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.',
//   },
//   {
//     id: 2,
//     name: 'Jane Smith',
//     review: 'Ut consequat, augue vel fermentum vestibulum, nisi odio feugiat ex, auctor venenatis tellus.',
//   },
//   // Add more reviews here
// ];

// const CustomerReviews = () => {
//   const swiperParams = {
//     spaceBetween: 30,
//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true,
//     },
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
//   };

//   return (
//     <div>
//       <h2>Customer Reviews</h2>
//       <Swiper {...swiperParams}>
//         {reviewsData.map((review) => (
//           <SwiperSlide key={review.id}>
//             <div className="review-card">
//               <h3>{review.name}</h3>
//               <p>{review.review}</p>
//             </div>
//           </SwiperSlide>
//         ))}
//         <div className="swiper-pagination"></div>
//         <div className="swiper-button-prev"></div>
//         <div className="swiper-button-next"></div>
//       </Swiper>
//     </div>
//   );
// };

// export default CustomerReviews;
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/navigation/navigation.min.css';

const reviewsData = [
  {
    id: 1,
    name: 'John Doe',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.',
  },
  {
    id: 2,
    name: 'Jane Smith',
    review: 'Ut consequat, augue vel fermentum vestibulum, nisi odio feugiat ex, auctor venenatis tellus.',
  },
  // Add more reviews here
];

const CustomerReviews = () => {
  const swiperParams = {
    spaceBetween: 30,
    pagination: {
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  };

  return (
    <div>
      <h2>Customer Reviews</h2>
      <Swiper {...swiperParams}>
        {reviewsData.map((review) => (
          <SwiperSlide key={review.id}>
            <div className="review-card">
              <h3>{review.name}</h3>
              <p>{review.review}</p>
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-pagination"></div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </Swiper>
    </div>
  );
};

export default CustomerReviews;
