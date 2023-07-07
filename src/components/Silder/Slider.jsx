import React from "react";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "./Slider.scss";

const Slider = () => {
  return (
    <Carousel autoPlay infiniteLoop>
      <div className="slider-slide">
        <div className="slide-content">
          <img src="img/slide1.jpg" alt="Image 1" className="slide-image" />
          <div className="slide-text">
            <div className="text-content">
              <h1 style={{ fontFamily: 'ogg-roman', fontSize: 50, textAlign: 'center', color: '#214f3e', fontWeight: 400 }}>
                We ship plants.
              </h1>
              <h3 style={{ fontFamily: 'ogg-roman', fontSize: 20, textAlign: 'center', color: '#214f3e', fontWeight: 400 }}>
                Over 30,000 plants shipped to happy new plant owners!
              </h3>
            </div>
            <div className="button-container">
              <button className="centered-button">View All</button>
            </div>
          </div>
        </div>
      </div>
      <div className="slider-slide">
        <div className="slide-content">
          <img src="img/slide2.png" alt="Image 2" className="slide-image" />
          <div className="slide-text">
            <div className="text-content">
              <h1 style={{ fontFamily: 'ogg-roman', fontSize: 50, textAlign: 'center', color: '#214f3e', fontWeight: 400 }}>
                Plants made easy!
              </h1>
              <h3 style={{ fontFamily: 'ogg-roman', fontSize: 20, textAlign: 'center', color: '#214f3e', fontWeight: 400 }}>
                Healthy plants in cool pots, delivered right to you!
              </h3>
            </div>
            <div className="button-container">
              <button className="centered-button">Shop All</button>
            </div>
          </div>
        </div>
      </div>
      {/* Add more slides and content as needed */}
    </Carousel>
  );
};

export default Slider;

