import React from "react";
import Card from '../../components/Card/Card'
import SortBy from "../../components/SortBy/SortBy";

const Plants = () => {
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
    ];

    return(
        <div className="plants">
            <br></br>
            <h1 style={{ fontFamily: 'ogg-roman', fontSize: 40, textAlign: 'center', color: '#214f3e', fontWeight: 400 }}>Plants only (no pot!)</h1>
            <br></br>

            <div className="left" style={{ display: "flex", }}>
            <div className="left">    
            <SortBy/>
            </div>

            <div className="right" style={{display: "flex", flexWrap: "wrap", justifyContent: "flex-start", gap: 20, marginLeft: -650}}>
                {data.map(item => (<Card item={item} key={item.id} />))}
            </div>   

            </div> 
        </div>
    )
};

export default Plants;