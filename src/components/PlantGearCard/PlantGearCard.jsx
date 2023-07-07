import React from 'react';
import "./PlantGearCard.scss"
import {Link} from "react-router-dom"

const Card = ({item}) => {

    return(
        <Link className='link' to={`/product/${item.id}`}>
        <div className='card' style={{width: 600, marginLeft: 50, marginRight: 40}}>
        <div className='image' style={{width: 600, height: 600}}> 
        {item.onSale &&<span>ON SALE</span>}
        <img src={item.img} alt="" className="mainImg" />
        </div>
        <h2>{item.title}</h2>
        <div className='prices'>
            <h2>${item.price}</h2>
        </div>
        <div className="button-container">  
        <button className="centered-button">View options</button>
        </div>
        </div>
        </Link>
     )
}

export default Card;