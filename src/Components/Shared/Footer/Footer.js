import React from "react";
import { Row } from "react-bootstrap";
import "./Footer.css";
import {
  FaPhone,
  FaFacebookSquare,
  FaTwitterSquare,
  FaWhatsappSquare,
  FaCar,
} from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <Row xs={1} md={3} lg={3} className="g-4">
          <div className="footer-items">
            <span className="brand ">
              <FaCar /> CAR MANAGER
            </span>
            <div>
              <div className="">
                <span className="footer-link">Home</span>
                <span className="footer-link">About</span>
                <span className="footer-link">Blogs</span>
                <span className="footer-link">Terms </span>
              </div>
            </div>
          </div>

          <div className="footer-items">
            <h5>NEED HELP?</h5>
            <p>Contact us via phone or email</p>
            <p>
              <FaPhone className="pink" />
              +123456789
            </p>

            <p>
              <AiOutlineMail className="pink" /> help@carmanager.com
            </p>
          </div>
          <div className="footer-items">
            <h5>FOLLOW US</h5>
            <span className="icons">
              <FaFacebookSquare className="icon-gap" />
              <FaTwitterSquare className="icon-gap" />
              <FaWhatsappSquare className="icon-gap" />
            </span>
          </div>
        </Row>
        <p className="py-3 cpy-text">
          &copy;2022, Car Manager, All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
