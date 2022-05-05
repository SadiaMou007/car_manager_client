import React from "react";
import { Container, Navbar } from "react-bootstrap";
import CustomLink from "../CustomLink/CustomLink";

import "./Header.css";
const Header = () => {
  return (
    <Navbar sticky="top" expand="lg" className="navbar">
      <Container>
        <Navbar.Brand href="#" className="">
          CAR MANAGER
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <div className="myNav">
            <div className="nav-items item-1">
              <CustomLink to={"/home"} className="nav-item">
                HOME
              </CustomLink>
              <CustomLink to={"/about"} className="nav-item">
                ABOUT
              </CustomLink>
              <CustomLink to={"/blogs"} className="nav-item">
                BLOGS
              </CustomLink>
            </div>
            <div className="nav-items item-2">
              <CustomLink to={"/login"} className="nav-item">
                LOGIN
              </CustomLink>
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;