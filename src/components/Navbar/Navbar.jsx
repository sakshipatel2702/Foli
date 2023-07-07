import React, { useState, useEffect } from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from "react-router-dom";
import "./Navbar.scss"

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
      

    return (

        <div className="navbar" style={{ backgroundColor: "#ede7df" }}>
            <br></br>
            <br></br>
            <div className="wrapper">

                <div className="left">
                    <div className="item">
                        <Link className="link" to="/products/1">Shop All</Link>
                    </div>

                    <div className="item">
                        <span onClick={toggleDropdown}>Shop</span>
                        <KeyboardArrowDownIcon />
                        <div>
                        {isOpen && (
                            <div className="dropdown-menu">
                                <br></br>
                                <br></br>
                                <br></br>
                                <Link className="link" to="/pots"><div>Pots</div></Link>
                                <br></br>
                                <br></br>
                                <Link className="link" to="/plants-only"><div>Plants Only</div></Link>
                                <br></br>
                                <br></br>
                                <Link className="link" to="/accessories"><div>Accessories</div></Link>
                                <br></br>
                                <br></br>
                                <Link className="link" to="/gift-cards"><div>Gift Cards</div></Link>
                                <br></br>
                            </div>
                        )}
                        </div>
                    </div>
                    

                    <div className="item">
                        <Link className="link" to="/corporate-gifting">Corporate Gifting</Link>
                    </div>

                    <div className="item">
                        <Link className="link" to="/outdoor-planters">Outdoor Planters</Link>
                    </div>

                </div>

                <div className="center">
                    <Link className="link" to="/"><img src="img/Foli.png" alt="Foli" /></Link>
                </div>

                <div className="right">
                    <div className="item">
                        <Link className="link" to="/about-us">About</Link>
                    </div>

                    <div className="item">
                        <Link className="link" to="/contact">Contact</Link>
                    </div>

                    <div className="icons">
                        <SearchIcon />
                        <Link className="link" to="/login"><PersonIcon /></Link>
                        <FavoriteIcon />
                        <div className="cartIcon">
                            <Link className="link" to="/cart"><ShoppingCartIcon /></Link>
                            <span>0</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;


