import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = ({ onClose }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSignIn = () => {

    };

    return (
        <div className="login-popup">
            <br></br>
            <h1 style={{ fontFamily: 'ogg-roman', fontSize: 40, textAlign: 'center', color: '#214f3e', fontWeight: 400 }}>Login</h1>

            <form className="form-container" onSubmit={handleSignIn} style={{ margin: "0 30px", display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ marginBottom: "10px" }}>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        value={email}
                        onChange={handleEmailChange}
                        placeholder="Name"
                        style={{ borderBottom: "1px solid #214f3e", borderTop: "none", borderLeft: "none", borderRight: "none", marginTop: 20, marginLeft: -112, marginRight: 50, fontSize: 20, width: "250%" }}
                    />
                </div>
                <div>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={email}
                        onChange={handlePasswordChange}
                        placeholder="Email"
                        style={{ borderBottom: "1px solid #214f3e", borderTop: "none", borderLeft: "none", borderRight: "none", marginTop: 20, marginLeft: -112, marginRight: 50, fontSize: 20, width: "250%" }}
                    />
                </div>
                <br></br>
                <br></br>
                <button type="submit" style={{ backgroundColor: "#b55d45", height: 52, width: 82, color: "#FFFFFF", fontSize: 18, border: "none", marginBottom: 30, width: "32.5%", marginLeft: 50 }}>Send</button>
                <br></br>
                <Link className="link" to="/create-account"><button type="submit" style={{ background: "none", color: "#214f3e", fontSize: 18, border: "none", color: "inherit", cursor: "pointer", outline: "none", marginLeft: 50 }}>Create Account</button></Link>
                <br></br>
                <Link className="link" to="/forgot-password"><button type="submit" style={{ background: "none", color: "#214f3e", fontSize: 18, border: "none", color: "inherit", cursor: "pointer", outline: "none", marginLeft: 50 }} >Forgot your Password?</button></Link>
                <br></br>
            </form>
        </div>
    )
};

export default Login;