import React from "react";
import { FaCar, FaMoneyBill, FaUser, FaWarehouse } from "react-icons/fa";
import "./About.css";

const About = () => {
  return (
    <div className="">
      <div className="my-5 container bg-light rounded">
        <h4 className="text-center pink1 p-2">Why Car Manager?</h4>
        <h6 className="text-center my-2 w-50 mx-auto">
          We have best transaction policy and active workers for manage our
          inventories. Provide best marketing strategy to increase sell. Provide
          fastest service and exchange with terms and policy.
        </h6>
        <div className="row py-2 px-4">
          <div className="col-lg-4 col-md-6 col-sm-12 border p-3 my-3">
            <span>
              <FaMoneyBill className="icon1" />
            </span>
            <h5 className="pink1"> BANKING</h5>
            <ul>
              <li>ABC Bank Limited</li>
              <li>Prime Bank Limited</li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 border p-3 my-3">
            <span>
              <FaUser className="icon1" />
            </span>
            <h5 className="pink1"> CLIENTS</h5>
            <ul>
              <li>Permanent: 26</li>
              <li>Contract: 31</li>
              <li>Recent Buyer: 14</li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 border p-3 my-3">
            <span>
              <FaWarehouse className="icon1" />
            </span>
            <h5 className="pink1"> SERVICES</h5>
            <p>
              Our services includes car selling, branding, management, car
              servicing and car storage
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
