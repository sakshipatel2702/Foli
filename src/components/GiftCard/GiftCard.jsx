import React from "react";
import "./GiftCard.scss";
import { Link } from "react-router-dom"

const GiftCard = ({ item }) => {
    return (
        <Link className='link' to={`/product/${item.id}`}>
            <div className='card'>
                <div className='image'>
                    <img src={item.img} alt="" className="cardImg" />
                </div>
                <h2>{item.title}</h2>
                <h2>{item.price}</h2>
                <div className="button-container">
                    <button className="centered-button">View options</button>
                </div>
            </div>
        </Link>
    )
};

export default GiftCard;