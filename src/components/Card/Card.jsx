import React from 'react'
import "./Card.scss"
import {Link} from "react-router-dom"

const Card = ({item}) => {

    return(
        <Link className='link' to={`/product/${item.id}`}>
        <div className='card' style={{width: 300}}>
        <div className='image' style={{height: 350}}> 
        {item.onSale &&<span>ON SALE</span>}
        <img src={item.img} alt="" className="mainImg" />
        <img src={item.img2} alt="" className="secondImg" />
        </div>
        <h2>{item.title}</h2>
        <div className='prices'>
            <h3>${item.oldPrice}</h3>
            <h3>${item.price}</h3>
        </div>
        <div className="button-container">  
        <button className="centered-button">View options</button>
        <br></br>
        </div>
        </div>
        </Link>
     )
}

export default Card;