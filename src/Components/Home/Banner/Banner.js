import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import img1 from "../../../Images/Banner/1.jpg";
import img2 from "../../../Images/Banner/2.jpg";
import img3 from "../../../Images/Banner/3.jpg";
import { FaBeer, FaArrowRight } from "react-icons/fa";

import "./Banner.css";
const Banner = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100 banner-img"
          src={img1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className="caption">Search less. Live more</h3>
          <p>We make finding the right car simple.</p>
          <button className="learnMore">
            Learn More <FaArrowRight className="icon" />
          </button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 banner-img"
          src={img2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <div className="banner-text">
            <h3 className="caption">Find your next match.</h3>
            <p>Find the right price, dealer and advice.</p>
            <button className="learnMore">
              Learn More <FaArrowRight className="icon" />
            </button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 banner-img"
          src={img3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className="caption">Get special discount this week.</h3>
          <p>Check our latest products with special discount price.</p>
          <button className="learnMore">
            Learn More <FaArrowRight className="icon" />
          </button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
