import React from "react";

import { FaArrowRight } from "react-icons/fa";

import "./Discount.css";
const Discount = () => {
  return (
    <div className="my-5 discount pt-3 pb-4">
      <div className="container">
        <div className="text-center icon mb-3">
          HOT PRODUCT FOR <span>THIS WEEK</span>
        </div>
        <div className="row g-4">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="bg-container text-white">
              <div className="content">
                <h4 className="inventory-header text-white mt-3">TESLA</h4>
                <h1 className="inventory-header text-white">$1500</h1>
                <p>SUPER FAST HIGH SPEED CAR</p>
                <div className="">
                  <button className="btn btn-secondary">
                    SEE DETAILS{" "}
                    <span className="icon">
                      <FaArrowRight />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="bg-container1">
              <div className="content1">
                <h4 className="inventory-header text-white mt-3">HYUNDAI</h4>
                <h1 className="inventory-header text-white">$1900</h1>
                <p>SUPER FAST HIGH SPEED CAR</p>
                <div className="">
                  <button className="btn btn-secondary">
                    SEE DETAILS{" "}
                    <span className="icon">
                      <FaArrowRight />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discount;
