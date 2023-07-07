import React from 'react'
import "./TestimonialCard.scss"
import { Link } from "react-router-dom"

const TestimonialCard = ({ item }) => {
    return (
        <Link className='link' to={`/product/${item.id}`}>
            <div className='testimonialcard'>
                <div className='image'>
                    <img src={item.img} alt="" />
                </div>
                <div className="rating">
                    {Array.from({ length: item.rating }, (_, i) => (
                        <span key={i} className="fas fa-star fa-lg" style={{ color: '#214f3e', fontSize: '24px' }}>&#9733;</span>
                    ))}
                </div>
              
                <h4 style={{ fontFamily: 'ogg-roman', fontSize: 20, textAlign: 'center', fontWeight: 400, color: '#214f3e', margin: '10px 0' }}>{item.description}</h4>
               
                <h3 style={{ fontFamily: 'ogg-roman', fontSize: 18, textAlign: 'center', fontWeight: 400, color: '#214f3e', margin: '20px 0' }}>{item.name}</h3>
            
            </div>
        </Link>
    )
}

export default TestimonialCard;