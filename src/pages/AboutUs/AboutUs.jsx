import React from "react";
import "./AboutUs.scss"
import { Link } from 'react-router-dom';
import YouTube from "react-youtube";

const AboutUs = () => {
    const videoId = "bgiwCig9b4I";
    return (
        <div className="aboutUs" style={{ backgroundColor: "#ede7df" }}>
            <br></br>
            <h1 style={{ fontFamily: 'ogg-roman', fontSize: 40, textAlign: 'center', color: '#214f3e', fontWeight: 400 }}>About Us</h1>
            <br></br>
            <div className="container">
                <div className="left">
                    <img src="img/Sakshi.jpg" alt="sakshi" style={{ width: 300, height: 400, marginLeft: 200 }} />
                </div>
                <div className="right">
                    <h1 style={{ fontFamily: 'ogg-roman', fontSize: 40, textAlign: 'left', color: '#214f3e', fontWeight: 400, marginRight: 70 }}>Hi! I'm Sakshi, the developer behind Foli.</h1>

                    <p style={{ fontFamily: 'ogg-roman', fontSize: 20, textAlign: 'left', color: '#214f3e', fontWeight: 400, marginRight: 70 }}>
                        At Foli we simplify the plant buying experience by offering healthy, mature plants and great pots to suit your space or gifting needs. The plants we carry at Foli are hearty and can withstand some neglect as you or your recipient get used to their new plant. All our pots are carefully sourced, made of strong, durable materials and have a stylish edge that make them just as timeless as the plants they hold.<br></br><br></br>
                        At Foli we personally care for all of the plants that leave our facility. We carefully pack your plant into the pot of choice, wrapping it with Foli tissue and hand writing your card message to ensure your recipients can feel the thoughtfulness of your gesture. Our boxes and packing process have been well tested, having shipped over 25,000+ plants across Canada. We are pros, and if you are not happy, we will make it right, Foli promise. <br></br><br></br>
                        Plants make me feel optimistic and at ease, I hope they do the same for you! <br></br><br></br>
                        Sakshi xoxo<br></br><br></br>
                    </p>
                    <div style={{ height: 40, backgroundColor: "#b55d45", width: 130, marginBottom: 40, display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Link to="/contact" style={{ backgroundColor: "#b55d45", color: "#FFFFFF", fontSize: 20, border: "none", textDecoration: "none" }}>Say Hi!</Link>
                    </div>
                </div>
            </div>
            <div style={{display:"flex", justifyContent: "center", marginBottom: 30}}>
                <YouTube videoId={videoId} />
            </div>
        </div>
    )
}

export default AboutUs;