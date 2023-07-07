import React, { useState } from "react";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform form submission or data handling here
        // You can access the form values using the state variables: name, email, message
        // Example: console.log(name, email, message);
    };

    return (
        <div className="contact">
            <h1 style={{ fontFamily: 'ogg-roman', fontSize: 40, textAlign: 'center', color: '#214f3e', fontWeight: 400 }}>Contact Us</h1>

            <form onSubmit={handleSubmit} style={{ margin: "0 30px"}}>
                <div style={{ marginBottom: "10px" }}>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={handleNameChange}
                        placeholder="Name"
                        style={{borderBottom: "1px solid #214f3e", borderTop: "none", borderLeft: "none", borderRight: "none", marginTop: 50, fontSize: 20, width: "100%"}}
                    />
                </div>
                <div>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={handleEmailChange}
                        placeholder="Email"
                        style={{borderBottom: "1px solid #214f3e", borderTop: "none", borderLeft: "none", borderRight: "none", marginTop: 30, fontSize: 20, width: "100%"}}
                    />
                </div>
                <div>
                    <textarea
                        id="message"
                        name="message"
                        value={message}
                        onChange={handleMessageChange}
                        placeholder="Message"
                        style={{borderBottom: "1px solid #214f3e", marginTop: 30, fontSize: 20, width: "100%", height: "300px"}}
                        />
                </div>
                <h5 style={{ fontFamily: 'ogg-roman', fontSize: 14, textAlign: 'left', color: '#214f3e', fontWeight: 400 , marginTop: 0}}>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</h5>
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <button type="submit" style={{ backgroundColor: "#b55d45", height: 52, width: 82, color: "#FFFFFF", fontSize: 18, border: "none", marginBottom:30}}>Send</button>
                </div>
            </form>
        </div>
    )
}

export default Contact;