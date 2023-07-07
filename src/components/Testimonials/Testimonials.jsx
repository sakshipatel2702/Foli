import React, { useState, useEffect } from 'react';
import './Testimonials.scss';
import TestimonialCard from '../../components/TestimonialCard/TestimonialCard'

const testimonials = [
  {
    id: 1,
    name: 'Sakshi Patel',
    rating: 4,
    img: 'img/Feedback1.png',
    description: 'So easy to order, plants arrived in perfect condition. I am basically a plant person now!'
  },
  {
    id: 2,
    name: 'Jane Smith',
    rating: 5,
    img: 'img/Feedback2.jpg',
    description: 'What a great gift for any ocassion. Always easy and the team at Foli are so helpful!'
  },
  // Add more testimonials here
];

const Testimonials = () => {
  return (
    <div className="testimonial">
      <div className='top'>
        <h1 style={{ fontFamily: 'ogg-roman', fontSize: 40, textAlign: 'center', color: '#214f3e', fontWeight: 400 }}>Testimonials</h1>
      </div>
      <div className='bottom'>
      {testimonials.map(item=>(<TestimonialCard item={item} key={item.id}/>))}
      </div>
    </div>
  );
};

export default Testimonials;
