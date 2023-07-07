import React, { useState } from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
    const [email, setEmail] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleForgotPassword= () => {

    };

    return (
        <div>
            <br></br>
            <h1 style={{ fontFamily: 'ogg-roman', fontSize: 40, textAlign: 'center', color: '#214f3e', fontWeight: 400 }}>Reset your password</h1>
            
            <h3 style={{ fontFamily: 'ogg-roman', fontSize: 20, textAlign: 'center', color: '#214f3e', fontWeight: 400 }}>We will send you an email to reset your password.</h3>
       
            <form className="create-form" onSubmit={handleForgotPassword} style={{ margin: "0 30px", display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                
                <div style={{ marginBottom: "5px" }}>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        value={email}
                        onChange={handleEmailChange}
                        placeholder="Email"
                        style={{ borderBottom: "1px solid #214f3e", borderTop: "none", borderLeft: "none", borderRight: "none", marginTop: 20, marginLeft: -112, marginRight: 50, fontSize: 20, width: "250%" }}
                    />
                </div>
                
                <br></br>
                <br></br>
                <button type="submit" style={{ backgroundColor: "#b55d45", height: 52, width: 82, color: "#FFFFFF", fontSize: 18, border: "none", marginBottom: 30,  width: "32.5%", marginLeft: 50 }}>Submit</button>

                <Link className="link" to="/"><button type="submit" style={{ background: "none", color: "#214f3e", fontSize: 18, border: "none", color: "inherit", cursor: "pointer", outline: "none", marginLeft: 50 }}>Return to home</button>
                </Link>
                <br></br>
                <br></br>
            </form>
        </div>
    )
};


export default ForgotPassword;