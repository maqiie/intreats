import React from 'react'
import './reviews.css'
import AVATR1  from '../assets/avatar1.jpg'
import AVATR2  from '../assets/avatar2.jpg'
import AVATR3  from '../assets/avatar3.jpg'
import AVATR4  from '../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles

import 'swiper/swiper-bundle.css';




const data =[
  {
      avatar: AVATR1,
      name:"makpaul",
      review: "The project was delivered ahead of schedule and met all our requirements. Great work!",
      
  },
  {
      avatar: AVATR2 ,
      name:'Timo',
      review: "We highly recommend your services to others looking for top-notch programming work.",
      
  },
  {
      avatar: AVATR3,
      name:'Marvo',
      review:"The solution you provided was very effective and has saved us time and resources."
       
  },
  {
      avatar: AVATR4,
      name:'Emmanuel' ,
      review: "The final product was user-friendly and exceeded our expectations in terms of functionality."
      ,
  },
  
]


const Review = () => {
  return (
    <section id='review'>
      <h5>Reviews from clients</h5>
      <h2>review</h2>
      
      <Swiper className="review container__container"
      // install Swiper modules
      modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        
        {
          data.map(({avatar, name,review}, index) =>{
            return(
              <SwiperSlide key={index} className='testimonial'>
               <div className="client__avatar">
               <img src={avatar} alt="AVATAR one" />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>
                {review}
              </small>          
        </SwiperSlide>
            )
          })
        }
      </Swiper>




    </section>
  )
}


export default Review;