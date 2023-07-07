import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import { Link } from 'react-router-dom';

import "./Footer.scss"

const Footer = () => {
    return (
        <div className="footer">
            <div className="top">
                <div className="item">
                    <h4 style={{ fontFamily: 'ogg-roman', fontWeight: 400, fontSize: 25 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Get Connected</h4>
                    <div style={{ display: 'flex' }}>
                        <span style={{ marginRight: '10px' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://www.instagram.com/" target="_blank"><InstagramIcon style={{ color: '#ede7df' }}></InstagramIcon></a></span>
                        <span><a href="https://www.facebook.com/foli.living.inc" target="_blank"><FacebookIcon style={{ color: '#ede7df' }}></FacebookIcon></a></span>
                    </div>
                </div>

                <div className="item">
                    <h4 style={{ fontFamily: 'ogg-roman', fontWeight: 400, fontSize: 25 }}>Links</h4>
                    <span><Link to="/" style={{ fontFamily: 'sofia-pro-regular', fontSize: 18, color: "#ede7df", textDecoration: 'none' }}>Foli</Link></span>
                    <span><Link to="/contact" style={{ fontFamily: 'sofia-pro-regular', fontSize: 18, color: "#ede7df", textDecoration: 'none' }}>Contact</Link></span>
                    <span><Link to="/about-us" style={{ fontFamily: 'sofia-pro-regular', fontSize: 18, color: "#ede7df", textDecoration: 'none' }}>About</Link></span>
                    <span><Link to="/Faq" style={{ fontFamily: 'sofia-pro-regular', fontSize: 18, color: "#ede7df", textDecoration: 'none' }}>FAQ</Link></span>
                    <span><Link to="/terms-of-service" style={{ fontFamily: 'sofia-pro-regular', fontSize: 18, color: "#ede7df", textDecoration: 'none' }}>Terms of service</Link></span>
                    <span><Link to="/refund-policy" style={{ fontFamily: 'sofia-pro-regular', fontSize: 18, color: "#ede7df", textDecoration: 'none' }}>Refund policy</Link></span>
                    <span><Link to="/gift-cards" style={{ fontFamily: 'sofia-pro-regular', fontSize: 18, color: "#ede7df", textDecoration: 'none' }}>Gift Cards</Link></span>
                </div>

                <div className="item">

                    <h1 style={{ fontFamily: 'ogg-roman', fontSize: 40 }}>Let's be friends.</h1>
                    <form>
                        <input type="email" id="email" name="email" required style={{ width: '350px', height: '30px' }} /><br></br>
                        <br></br>

                        <label htmlFor="birthday">Tell us your birthday for an extra gift</label><br></br>
                        <input type="text" id="birthday" name="birthday" pattern="\d{2}/\d{2}" placeholder="MM/DD" required style={{ width: '350px', height: '30px' }} />
                        <br></br><br></br>
                        <span><input type="submit" value="Stay in the loop!" style={{ backgroundColor: '#D0F0C0', color: '#214f3e', fontWeight: 'bold', fontSize: '16px', padding: '10px 20px', border: 'none', outline: 'none' }} /></span>
                    </form>
                </div>
            </div>
            <br></br>
            <div className="bottom">
                <div className="left">
                    <span className="copyright">© 2023, Foli</span>
                </div>

                <div className="right">
                    <span><a href="https://mail.google.com/" target="_blank"><EmailIcon style={{ color: '#ede7df' }}></EmailIcon></a></span>
                </div>
            </div>
            <br></br>
        </div>
    )
}

export default Footer;