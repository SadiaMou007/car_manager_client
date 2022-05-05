import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import img1 from "../../../Images/Banner/1.jpg";
import img2 from "../../../Images/Banner/2.jpg";
import img3 from "../../../Images/Banner/3.jpg";
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
          <h3 className="caption">First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
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
            <h3 className="caption">Active Security Services</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
          <h3 className="caption">Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
