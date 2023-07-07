import React, { useState } from 'react';
import Card from '../../components/Card/Card'
import PlantGearCard from '../../components/PlantGearCard/PlantGearCard'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const OutdoorPlanters = ({ type }) => {
    const data = [
        {
            id: 1,
            img: "https://cdn.shopify.com/s/files/1/0122/3121/3152/products/CPCo-9620_550x.jpg?v=1682388893",
            img2: "https://cdn.shopify.com/s/files/1/0122/3121/3152/products/CPCo-0337_1445x.jpg?v=1682388893",
            title: "Med Potted Easy-Peasy Bundle",
            onSale: true,
            oldPrice: 75,
            price: 60,
        },
        {
            id: 2,
            img: "https://cdn.shopify.com/s/files/1/0122/3121/3152/products/CPCo-8582_85dffc6b-4726-4330-824a-c497dbda7a45_550x.jpg?v=1668100714",
            img2: "https://cdn.shopify.com/s/files/1/0122/3121/3152/products/1_1445x.png?v=1668101428",
            title: "3 Month Plant Subscription",
            onSale: true,
            oldPrice: 65,
            price: 55,
        },
        {
            id: 3,
            img: "https://cdn.shopify.com/s/files/1/0122/3121/3152/products/CPCo-0563_9b3f8f01-a193-49ee-955a-39b2d1a394eb_1445x.jpg?v=1684980677",
            img2: "https://cdn.shopify.com/s/files/1/0122/3121/3152/products/CPCo-1561_1445x.jpg?v=1684980942",
            title: "ZZ Plant",
            isNew: false,
            oldPrice: 70,
            price: 50,
        },
        {
            id: 4,
            img: "https://cdn.shopify.com/s/files/1/0122/3121/3152/products/CPCo-0246_550x.jpg?v=1676130015",
            img2: "https://cdn.shopify.com/s/files/1/0122/3121/3152/products/CPCo-0271_550x.jpg?v=1676145195",
            title: "Philodendron Brazil",
            isNew: false,
            oldPrice: 40,
            price: 35,
        },
    ];

    const plantgeardata = [
        {
            id: 1,
            img: "https://cdn.shopify.com/s/files/1/0122/3121/3152/products/Essential_Kit_Still_Life_2200x_4bd8d481-ca2d-44b6-a74b-d57f9d78a482.jpg?v=1678302471",
            title: "Plant Care Essentials Kit - Fertilizer",
            onSale: true,
            price: 65,
        },
        {
            id: 2,
            img: "https://cdn.shopify.com/s/files/1/0122/3121/3152/products/CPCo-0781.jpg?v=1650992973",
            title: "Growers Pots",
            onSale: true,
            price: 3,
        },
        {
            id: 3,
            img: "https://cdn.shopify.com/s/files/1/0122/3121/3152/products/2generalbags.webp?v=1678822008",
            title: "Premium General Soil",
            isNew: false,
            price: 15,
        },
        {
            id: 4,
            img: "https://cdn.shopify.com/s/files/1/0122/3121/3152/products/ad5761_e6cb824c37574570bf354f1ffb82c767_mv2.webp?v=1678823395",
            title: "Premium Cactus Soil",
            isNew: false,
            price: 35,
        },
    ];

    // It is the form for Postal Code Check

    const [postalcode, setPostalCode] = useState('');

    const handlePostalCodeChange = (e) => {
        setPostalCode(e.target.value);
    };

    const handlePostalCheck = () => {

    };

    // It is the form for User Enrollment

    const [email, setEmail] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleEnroll = () => {

    };
    return (
        <div className='outdoorPlanters'>
            <div className='top-tier'>

                <div className='banner' style={{ display: "flex", alignItems: "center", backgroundColor: "#ede7df" }}>
                    <div className='top-tier-left' style={{ flex: 1 }}>
                        <img style={{ width: "100%", height: "30%" }} src="img/OutdoorPlanters.png" alt="Image 1" />
                    </div>
                    <div className='top-tier-right' style={{ flex: 1 }}>
                        <h1 style={{ fontFamily: 'ogg-roman', fontSize: 40, textAlign: 'center', color: '#214f3e', fontWeight: 400 }}>Planter joy.</h1>
                        <h3 style={{ fontFamily: 'ogg-roman', fontSize: 20, textAlign: 'center', color: '#214f3e', fontWeight: 400, marginLeft: 80, marginRight: 80 }}>Beautiful porch planters, delivered right to you! Welcome the seasons with planters from Foli!</h3>
                    </div>
                </div>
                <br></br>
                <div className='postal-form' style={{ marginLeft: 30 }} >
                    <div className='postal-form-text'>
                        <h3 style={{ fontFamily: 'ogg-roman', fontSize: 20, color: '#214f3e', fontWeight: 400 }}>Check if your postal code is eligible for local delivery</h3>
                        <br></br>
                    </div>
                    <div>
                        <form className="postal-form-form" onSubmit={handlePostalCheck} >
                            <input
                                type="text"
                                id="postalcode"
                                name="postalcode"
                                value={postalcode}
                                onChange={handlePostalCodeChange}
                                placeholder=" Postal Code"
                                style={{ borderBottom: "1px solid #214f3e", borderTop: "none", borderLeft: "none", borderRight: "none", fontSize: 20, width: "15%", height: 40, marginRight: 30 }}
                            />
                            <button type="submit" style={{ backgroundColor: "#b55d45", height: 40, width: 82, color: "#FFFFFF", fontSize: 18, border: "none", marginBottom: 30, width: "8%" }}>Check</button>
                        </form>
                    </div>
                </div>
            </div>
            {/* Top Section finishes here contaiing banner and postal code check */}

            <div className='middle-tier'>
                <h1 style={{ fontFamily: 'ogg-roman', fontSize: 40, textAlign: 'center', color: '#214f3e', fontWeight: 400 }}>Get porch ready.</h1>
                <div className='middle-card' style={{ display: "flex", flexWrap: "wrap", justifyContent: "flex-start", gap: 15, marginLeft: 32 }}>
                    {data.map(item => (<Card item={item} key={item.id} />))}
                </div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <div className='middle-text' style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div className='middle-text-left' style={{ borderRight: '1px solid black', paddingRight: '20px' }}>
                        <h3 style={{ fontFamily: 'ogg-roman', fontSize: 20, textAlign: 'center', color: 'black', fontWeight: 400, marginLeft: 30, marginRight: 30 }}>Convenient Delivery - We got you!</h3>
                        <h3 style={{ fontFamily: 'ogg-roman', fontSize: 20, textAlign: 'center', color: '#214f3e', fontWeight: 400, marginLeft: 30, marginRight: 30 }}>Avoid running around to find nice planters! Only to have them spill all over your vehicle 🙃</h3>
                    </div>
                    <div className='middle-text-middle' style={{ borderRight: '1px solid black', paddingRight: '20px' }}>
                        <h3 style={{ fontFamily: 'ogg-roman', fontSize: 20, textAlign: 'center', color: 'black', fontWeight: 400, marginLeft: 30, marginRight: 30 }}>Not your grocery store planters!</h3>
                        <h3 style={{ fontFamily: 'ogg-roman', fontSize: 20, textAlign: 'center', color: '#214f3e', fontWeight: 400, marginLeft: 30, marginRight: 30 }}>Our planters are full of local plants, bursting with greenery, beauty and with ease of care in mind!</h3>
                    </div>
                    <div className='middle-text-right'>
                        <h3 style={{ fontFamily: 'ogg-roman', fontSize: 20, textAlign: 'center', color: 'black', fontWeight: 400, marginLeft: 30, marginRight: 30 }}>Dress your porch with Foli</h3>
                        <h3 style={{ fontFamily: 'ogg-roman', fontSize: 20, textAlign: 'center', color: '#214f3e', fontWeight: 400, marginLeft: 30, marginRight: 30 }}>Pros in making it easy and pretty, planters delivered right to your porch to get the seasons growing!</h3>
                    </div>
                </div>

                <br></br>
                <br></br>
                <br></br>
                <br></br>
            </div>
            {/* Middle Section containing Card and text */}

            <div className='bottom-tier'>
                <div className='top-bottom-tier'>
                    <h1 style={{ fontFamily: 'ogg-roman', fontSize: 40, textAlign: 'center', color: '#214f3e', fontWeight: 400 }}>Plant Gear.</h1>

                </div>

                <div className='middle-bottom-tier' style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: 15, marginLeft: 32 }}>
                    {plantgeardata.map(item => (
                        <PlantGearCard item={item} key={item.id} />
                    ))}
                    <button style={{ backgroundColor: '#b55d45', height: 50, width: 150, color: 'white', fontSize: 18, border: 'none', cursor: 'pointer', margin: 'auto' }}>
                        View All
                    </button>
                </div>
                <br></br>
                <br></br>

                <div className='bottom-bottom-tier' style={{ backgroundColor: '#ede7df', display: 'flex', alignItems: 'center' , height: 200}}>
                    <h1 style={{ fontFamily: 'ogg-roman', fontSize: 40, textAlign: 'left', color: '#214f3e', fontWeight: 400, marginLeft: 230, marginRight: 30 }}>
                        Stay in the know!  
                    </h1>
                    <form className="enroll-form" onSubmit={handleEnroll} style={{ display: 'flex', alignItems: 'center' }}>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            value={email}
                            onChange={handleEmailChange}
                            placeholder=" Enter email"
                            style={{ borderBottom: "1px solid #214f3e", borderTop: "none", borderLeft: "none", borderRight: "none", fontSize: 20, height: 40, marginRight: 50, marginLeft: 100, backgroundColor: "#ede7df", width: 500 }}
                        />
                        <ArrowForwardIcon />
                    </form>
                </div>

            </div>
        </div>
    )
};

export default OutdoorPlanters;