//import { Slider } from "@mui/material";

import React from "react";
import Slider from "../../components/Silder/Slider";
import FoliFaves from "../../components/FoliFaves/FoliFaves";
import Testimonials from "../../components/Testimonials/Testimonials";
import InstagramFeed from "../../components/InstagramFeed/InstagramFeed";

const Home = () => {
    return(
        <div className="home">
            <Slider/>
            <FoliFaves type="Featured"/>
            <Testimonials/>
            <InstagramFeed/>
        </div>
    )
}

export default Home;