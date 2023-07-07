import React, { useState } from "react";
import GiftCard from '../../components/GiftCard/GiftCard'
import SortBy from "../../components/SortBy/SortBy";

const GiftCards = ({ type }) => {
    const data = [
        {
            id: 1,
            img: "https://cdn.shopify.com/s/files/1/0122/3121/3152/products/4_1680x.png?v=1670785282",
            title: "Digital Gift Card",
            price: "From $50 up to $250",
        },
        {
            id: 2,
            img: "https://cdn.shopify.com/s/files/1/0122/3121/3152/products/giftcard.jpg?v=1674417631",
            title: "Physical Gift Card",
            price: "From $25 up to $250",
        },
    ];


    return (
        <div className="giftcard">
            <br></br>
            <br></br>
            <h1 style={{ fontFamily: 'ogg-roman', fontSize: 40, textAlign: 'center', color: '#214f3e', fontWeight: 400 }}>Gift cards</h1>
            <br></br>
            <br></br>
            <div className="giftcard-content" style={{ display: "flex", justifyContent: "space-between" }}>
            <div className="left">
            <SortBy/>

            </div> 
            <div className="right" style={{ marginRight: 20 }}>
            <div classname="right-cards" style={{ display: "flex", justifyContent: "space-between", gap:20, marginBottom: 60 }}>
            {/* <h1 style={{ fontFamily: 'ogg-roman', fontSize: 40, textAlign: 'left', color: '#214f3e', fontWeight: 400, marginRight: 70 }}>Hi! I'm Sakshi, the developer behind Foli.</h1>     */}
            {data.map(item => (<GiftCard item={item} key={item.id} />))}
            </div>
            </div>   
            </div>
            

                {/* <div className="right">
                    {data.map(item => (<GiftCard item={item} key={item.id} />))}
                </div> */}
            </div>
    )
};

export default GiftCards;
