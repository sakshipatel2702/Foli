import React, { useState } from "react";

import Card from '../../components/Card/Card'

const Cart = ({type}) => {

    const data = [
        {
            id: 1,
            img: "https://cdn.shopify.com/s/files/1/0122/3121/3152/products/CPCo-9620_550x.jpg?v=1682388893",
            img2: "https://cdn.shopify.com/s/files/1/0122/3121/3152/products/CPCo-0337_1445x.jpg?v=1682388893",
            title: "Med Potted Easy-Peasy Bundle",
            onSale:true,
            oldPrice: 75,
            price: 60,
        },
        {
            id: 2,
            img: "https://cdn.shopify.com/s/files/1/0122/3121/3152/products/CPCo-8582_85dffc6b-4726-4330-824a-c497dbda7a45_550x.jpg?v=1668100714",
            img2: "https://cdn.shopify.com/s/files/1/0122/3121/3152/products/1_1445x.png?v=1668101428",
            title: "3 Month Plant Subscription",
            onSale:true,
            oldPrice: 65,
            price: 55,
        },
        {
            id: 3,
            img: "https://cdn.shopify.com/s/files/1/0122/3121/3152/products/CPCo-0563_9b3f8f01-a193-49ee-955a-39b2d1a394eb_1445x.jpg?v=1684980677",
            img2: "https://cdn.shopify.com/s/files/1/0122/3121/3152/products/CPCo-1561_1445x.jpg?v=1684980942",
            title: "ZZ Plant",
            isNew:false,
            oldPrice: 70,
            price: 50,
        },
        {
            id: 4,
            img: "https://cdn.shopify.com/s/files/1/0122/3121/3152/products/CPCo-0246_550x.jpg?v=1676130015",
            img2: "https://cdn.shopify.com/s/files/1/0122/3121/3152/products/CPCo-0271_550x.jpg?v=1676145195",
            title: "Philodendron Brazil",
            isNew:false,
            oldPrice: 40,
            price: 35,
        },
        {
            id: 5,
            img: "https://cdn.shopify.com/s/files/1/0122/3121/3152/products/CPCo-0778.jpg?v=1650993118",
            img2: "https://cdn.shopify.com/s/files/1/0122/3121/3152/products/20200827-A13I2514_1680x.jpg?v=1650993118",
            title: "Mr. Mister",
            isNew:false,
            oldPrice: 46,
            price: 37,
        },
        {
            id: 6,
            img: "https://cdn.shopify.com/s/files/1/0122/3121/3152/products/CPCo-0772_1680x.jpg?v=1650988512",
            img2: "https://cdn.shopify.com/s/files/1/0122/3121/3152/products/DSC07158.jpg?v=1651003938",
            title: "Bendable Moss Pole",
            isNew:false,
            oldPrice: 27,
            price: 22,
        },
        {
            id: 7,
            img: "https://cdn.shopify.com/s/files/1/0122/3121/3152/files/Untitleddesign_7.png?v=1683921252",
            img2: "https://cdn.shopify.com/s/files/1/0122/3121/3152/products/IMG_0926.jpg?v=1683921252",
            title: "Foli Adjustable Plant Stand",
            isNew:false,
            oldPrice: 46,
            price: 40,
        },
        {
            id: 8,
            img: "https://cdn.shopify.com/s/files/1/0122/3121/3152/products/CPCo-0763.jpg?v=1650988950",
            img2: "https://cdn.shopify.com/s/files/1/0122/3121/3152/products/trowel1.jpg?v=1650988950",
            title: "Garden Trowel",
            isNew:false,
            oldPrice: 12,
            price: 9,
        },
    ];

    return (
        <div className="cart">
            <h1 style={{ fontFamily: 'ogg-roman', fontSize: 40, textAlign: 'center', color: '#214f3e', fontWeight: 400 }}>Shopping Cart</h1>
            <h3 style={{ fontFamily: 'ogg-roman', fontSize: 20, textAlign: 'center', color: '#214f3e', fontWeight: 400 }}>Your cart is currently empty.</h3>
            <h3 style={{ fontFamily: 'ogg-roman', fontSize: 20, textAlign: 'center', color: '#214f3e', fontWeight: 400 }}>Continue browsing here.</h3>
            <br></br>
            <h1 style={{ fontFamily: 'ogg-roman', fontSize: 40, textAlign: 'center', color: '#214f3e', fontWeight: 400 }}>Need something else?</h1>
            <div className='middle' style={{display: "flex", flexWrap: "wrap", justifyContent: "flex-start", gap: 15, marginLeft: 32}}>
                {data.map(item => (<Card item={item} key={item.id} />))}
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
           
        </div>
    )
};

export default Cart;