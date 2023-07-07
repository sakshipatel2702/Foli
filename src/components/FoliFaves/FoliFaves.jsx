import React from 'react'
import "./FoliFaves.scss"
import Card from '../../components/Card/Card'



const FoliFaves = ({type}) => {

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
    ];

    return(
        <div className='foliFaves'>
        <div className='top'>
          <h1 style={{ fontFamily: 'ogg-roman', fontSize: 40, textAlign: 'center', color: '#214f3e', fontWeight: 400 }}>{type} Foli Faves</h1>
        </div>
        <div className='middle' style={{marginRight: 26}}> 
          {data.map(item=>(<Card item={item} key={item.id}/>))}
        </div>
        <div className="button-container">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <button className="centered-button">View All</button>
        </div>
        </div>
     )
}

export default FoliFaves