import React, { useState } from "react";
import "./CorporateGifting.scss";

import { Link } from "react-router-dom";

const CorporateGifting = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [company, setCompany] = useState("");
    const [location, setLocation] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [selectedDate, setSelectedDate] = useState(null);
    const [address, setAddress] = useState("");
    const [message, setMessage] = useState("");

    const handleAddressChange = (e) => {
        setAddress(e.target.value);
    };

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const handleQuantityChange = (e) => {
        setQuantity(e.target.value);
    };

    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value);
    };

    const handleLastNameChange = (e) => {
        setLastName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
    };

    const handleCompanyChange = (e) => {
        setCompany(e.target.value);
    };

    const handleLocationChange = (e) => {
        setLocation(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform form submission logic or API request here
        // You can access the form values using the state variables (firstName, lastName, email, phone, company, location)
        // Example: console.log(firstName, lastName, email, phone, company, location);
    };
    return (
        <div className="corporateGifting">
            <div className="top">
                <img style={{ width: "100%", height: 650 }} src="img/plant-shelf.jpg" alt="Image 1" />
                <div className="text-overlay">
                    <br></br>
                    <br></br>
                    <h1 style={{ fontFamily: 'ogg-roman', fontSize: 70, color: '#214f3e', fontWeight: 400 }}>Green<br></br> Corporate <br></br>Gifting</h1>
                    <h3 style={{ fontFamily: 'ogg-roman', fontSize: 20, color: '#214f3e', fontWeight: 400 }}>Help employees adjust to home office life or show<br></br> clients you care by gifting them some green.</h3>
                    <div className="button-container">
                        <br></br>
                        <br></br>
                        <button className="button-container" style={{ marginRight: 200 }}>Get in touch</button>
                    </div>
                </div>
            </div>


            <div className="middle-top" style={{ backgroundColor: "#244639", width: "100%", display: "flex", alignItems: "center" }}>
                <div className="left">
                    <img style={{ width: "55%", height: 500, marginLeft: 150, marginTop: 70, marginBottom: 70 }} src="img/Choosetheperfectplants.gif" alt="Image 1" />
                </div>

                <div className="right">
                    <h1 style={{ fontFamily: 'ogg-roman', fontSize: 70, color: 'white', fontWeight: 400, marginLeft: 120, marginRight: 120 }}>The perfect plants for your people.</h1>
                    <h3 style={{ fontFamily: 'ogg-roman', fontSize: 20, color: 'white', fontWeight: 400, marginLeft: 120, marginRight: 120 }}>We know every team member is unique. Low light office? No problem. Pet-friendly plants a requirement? We got you. Our team will help you pick plants and planters that suit your team’s unique needs.</h3>
                </div>
            </div>

            <div className="middle-middle" style={{ backgroundColor: "#214f3e", width: "100%", display: "flex", alignItems: "center" }}>
                <div className="left">
                    <h1 style={{ fontFamily: 'ogg-roman', fontSize: 70, color: 'white', fontWeight: 400, marginLeft: 120, marginRight: 120, marginTop: 10 }}>Let's get personal.</h1>
                    <h3 style={{ fontFamily: 'ogg-roman', fontSize: 20, color: 'white', fontWeight: 400, marginLeft: 120, marginRight: 200 }}>We want your plant gifts to be tailored to your team, so with every order, we include our hand-drawn notecard, where we can customize your message to your team.</h3>
                </div>
                <div className="right">
                    <img style={{ width: "60%", height: 300, marginLeft: 150, marginTop: 120, marginBottom: 120 }} src="img/corporate_notecard_sm.gif" alt="Image 1" />
                </div></div>

            <div className="middle-bottom" style={{ backgroundColor: "#244639", width: "100%", display: "flex", alignItems: "center" }}>
                <div className="left">
                    <img style={{ width: "82%", height: 450, marginLeft: 100, marginTop: 70, marginBottom: 70 }} src="img/shipping-animation.gif" alt="Image 1" />
                </div>

                <div className="right">
                    <h1 style={{ fontFamily: 'ogg-roman', fontSize: 70, color: 'white', fontWeight: 400, marginLeft: 120, marginRight: 120 }}>Multiple shipping locations? No problem.</h1>
                    <h3 style={{ fontFamily: 'ogg-roman', fontSize: 20, color: 'white', fontWeight: 400, marginLeft: 120, marginRight: 130 }}>Have your plants delivered to your employees individually, or have them shipped to one location for a grand unboxing, we can do it all.</h3>
                </div>
            </div>

            <div className="bottom-form" style={{ backgroundColor: "#b8d9a5" }}>
                <br />
                <h1 style={{ fontFamily: 'ogg-roman', fontSize: 55, color: '#214f3e', fontWeight: 400, display: 'block', marginLeft: 400, marginTop: 50 }}>Gift Greener.</h1>
                <h3 style={{ fontFamily: 'ogg-roman', fontSize: 20, color: '#214f3e', fontWeight: 400, marginLeft: 400 }}>Please fill out the form to get started and we’ll be in touch within 24 - 48 hours!</h3>
                <form className="ship-form" onSubmit={handleSubmit} style={{ margin: "0 30px", display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <h3 style={{ fontFamily: 'ogg-roman', fontSize: 30, color: '#214f3e', fontWeight: 400, marginRight: 580 }}>Contact</h3>
                    <hr style={{ borderTop: '1px solid #214f3e', width: '56.5%', marginLeft: 369, borderColor: '#214f3e' }} />

                    <div style={{ display: 'flex', gap: 120 }}>
                        <div style={{ marginBottom: "10px", marginTop: 10 }}>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                value={firstName}
                                onChange={handleFirstNameChange}
                                placeholder="First name"
                                style={{
                                    borderBottom: "1px solid #214f3e",
                                    borderTop: "1px solid #214f3e",
                                    borderLeft: "1px solid #214f3e",
                                    borderRight: "1px solid #214f3e",
                                    backgroundColor: "#b8d9a5",
                                    fontSize: 20,
                                    width: "120%",
                                    height: 50,
                                    marginLeft: 30,
                                    marginRight: 30,
                                }}
                            />
                        </div>

                        <div style={{ marginBottom: "5px", marginTop: 10 }}>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                value={lastName}
                                onChange={handleLastNameChange}
                                placeholder="Last name"
                                style={{
                                    borderBottom: "1px solid #214f3e",
                                    borderTop: "1px solid #214f3e",
                                    borderLeft: "1px solid #214f3e",
                                    borderRight: "1px solid #214f3e",
                                    backgroundColor: "#b8d9a5",
                                    fontSize: 20,
                                    width: "120%",
                                    height: 50,
                                    marginLeft: 30,
                                    marginRight: 30,
                                }}
                            />
                        </div>
                    </div>


                    <div style={{ display: 'flex', gap: 120 }}>
                        <div style={{ marginBottom: "5px", marginTop: 10 }}>
                            <input
                                type="text"
                                id="email"
                                name="email"
                                value={email}
                                onChange={handleEmailChange}
                                placeholder="Email address"
                                style={{
                                    borderBottom: "1px solid #214f3e",
                                    borderTop: "1px solid #214f3e",
                                    borderLeft: "1px solid #214f3e",
                                    borderRight: "1px solid #214f3e",
                                    backgroundColor: "#b8d9a5",
                                    fontSize: 20,
                                    width: "120%",
                                    height: 50,
                                    marginLeft: 30,
                                    marginRight: 30,
                                }}
                            />
                        </div>

                        <div style={{ marginBottom: "5px", marginTop: 10 }}>
                            <input
                                type="text"
                                id="phone"
                                name="phone"
                                value={phone}
                                onChange={handlePhoneChange}
                                placeholder="Phone number"
                                style={{
                                    borderBottom: "1px solid #214f3e",
                                    borderTop: "1px solid #214f3e",
                                    borderLeft: "1px solid #214f3e",
                                    borderRight: "1px solid #214f3e",
                                    backgroundColor: "#b8d9a5",
                                    fontSize: 20,
                                    width: "120%",
                                    height: 50,
                                    marginLeft: 30,
                                    marginRight: 30,
                                }}
                            />
                        </div>
                    </div>


                    <div style={{ display: 'flex', gap: 120 }}>
                        <div style={{ marginBottom: "5px", marginTop: 10 }}>
                            <input
                                type="text"
                                id="company"
                                name="company"
                                value={company}
                                onChange={handleCompanyChange}
                                placeholder="Company name"
                                style={{
                                    borderBottom: "1px solid #214f3e",
                                    borderTop: "1px solid #214f3e",
                                    borderLeft: "1px solid #214f3e",
                                    borderRight: "1px solid #214f3e",
                                    backgroundColor: "#b8d9a5",
                                    fontSize: 20,
                                    width: "120%",
                                    height: 50,
                                    marginLeft: 30,
                                    marginRight: 30,
                                }}
                            />
                        </div>

                        <div style={{ marginBottom: "5px", marginTop: 10 }}>
                            <input
                                type="text"
                                id="location"
                                name="location"
                                value={location}
                                onChange={handlePhoneChange}
                                placeholder="Location"
                                style={{
                                    borderBottom: "1px solid #214f3e",
                                    borderTop: "1px solid #214f3e",
                                    borderLeft: "1px solid #214f3e",
                                    borderRight: "1px solid #214f3e",
                                    backgroundColor: "#b8d9a5",
                                    fontSize: 20,
                                    width: "120%",
                                    height: 50,
                                    marginLeft: 30,
                                    marginRight: 30,
                                }}
                            />
                        </div>
                    </div>
                    <br></br>
                    <h3 style={{ fontFamily: 'ogg-roman', fontSize: 30, color: '#214f3e', fontWeight: 400, marginRight: 580 }}>Details</h3>
                    <hr style={{ borderTop: '1px solid #214f3e', width: '56.5%', marginLeft: 369, borderColor: '#214f3e' }} />
                    <div style={{ display: 'flex', gap: 150 }}>
                        <div style={{ marginBottom: "5px", marginTop: 10 }}>
                            <input
                                type="number"
                                id="quantity"
                                name="quantity"
                                value={quantity}
                                onChange={(e) => setQuantity(parseInt(e.target.value))}
                                placeholder="Order Quantity"
                                style={{
                                    borderBottom: "1px solid #214f3e",
                                    borderTop: "1px solid #214f3e",
                                    borderLeft: "1px solid #214f3e",
                                    borderRight: "1px solid #214f3e",
                                    backgroundColor: "#b8d9a5",
                                    fontSize: 20,
                                    width: "240%",
                                    height: 50,
                                    marginLeft: -92,
                                }}
                            />
                        </div>

                        <div style={{ marginBottom: "5px", marginTop: 10 }}>
                            <input
                                type="date"
                                id="selectedDate"
                                name="selectedDate"
                                value={selectedDate}
                                onChange={(e) => handleDateChange(e.target.value)}
                                placeholder="Location"
                                style={{
                                    borderBottom: "1px solid #214f3e",
                                    borderTop: "1px solid #214f3e",
                                    borderLeft: "1px solid #214f3e",
                                    borderRight: "1px solid #214f3e",
                                    backgroundColor: "#b8d9a5",
                                    fontSize: 20,
                                    width: "200%",
                                    height: 50,
                                    marginLeft: 30,
                                    marginRight: 30,
                                }}
                            />
                            <div style={{ fontSize: 16, color: '#214f3e', marginLeft: 30 }}>Desired delivery date</div>
                        </div>
                    </div>
                    <br></br>
                    <div style={{ fontSize: 16, color: '#214f3e', marginLeft: -140 }}>Would you like these delievered to a single address or multiple addresses?</div>

                    <div style={{ display: 'flex' }}>
                        <div style={{ marginBottom: "5px", marginTop: 10 }}>
                            <input
                                type="text"
                                id="address"
                                name="address"
                                value={address}
                                onChange={handleAddressChange}
                                placeholder="Single/Multiple"
                                style={{
                                    borderBottom: "1px solid #214f3e",
                                    borderTop: "1px solid #214f3e",
                                    borderLeft: "1px solid #214f3e",
                                    borderRight: "1px solid #214f3e",
                                    backgroundColor: "#b8d9a5",
                                    fontSize: 20,
                                    width: "254%",
                                    height: 50,
                                    marginLeft: -180,
                                    marginRight: 250,
                                }}
                            />
                        </div>
                    </div>

                    <div style={{ display: 'flex', marginLeft: -410 }}>
                        <div style={{ marginBottom: "5px", marginTop: 10 }}>
                            <textarea
                                id="message"
                                name="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="Any additional details you'd like us to know!"
                                style={{
                                    borderBottom: "1px solid #214f3e",
                                    borderTop: "1px solid #214f3e",
                                    borderLeft: "1px solid #214f3e",
                                    borderRight: "1px solid #214f3e",
                                    backgroundColor: "#b8d9a5",
                                    fontSize: 20,
                                    width: "248%",
                                    height: 200,
                                    marginLeft: 30,
                                    marginRight: 30,
                                }}
                            ></textarea>
                        </div>
                    </div>
                    <br></br>
                    <button type="submit" style={{ backgroundColor: "#b55d45", height: 52, width: 82, color: "#FFFFFF", fontSize: 18, border: "none", marginBottom: 30, width: "32.5%", marginLeft: -210 }}>Send</button>

                    <br></br>
                </form>
                <br />
            </div>



        </div>
    )
};

export default CorporateGifting;