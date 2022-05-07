import React from "react";
import { Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./Inventory.css";

const Inventory = ({ product }) => {
  const navigate = useNavigate();
  const { _id, name, image, price, description, quantity, supplier } = product;
  const navigateToProductDetail = (id) => {
    navigate(`/inventory/${id}`);
  };
  return (
    <div className="my-2 p-4">
      <Card>
        <div className="d-flex">
          <div className="w-50 p-2">
            <Card.Img variant="top" src={image} className="card-img" />
          </div>
          <div className="w-50 my-auto">
            <Card.Title>
              <div className="p-4">
                <div className="text-center">{name}</div>
                <div className="card-price text-center mt-3 p-2">
                  <span className="small me-4 start"></span>${price}
                </div>
              </div>
            </Card.Title>
          </div>
        </div>
        <Card.Body>
          <Card.Text>
            <div className="d-flex">
              <h6 className="me-2">Description: </h6>
              <p>{description.slice(0, 149)}...</p>
            </div>
            <div className="d-flex my-3 py-3 border-line">
              <div className="w-50">
                <h6>Supplier:</h6>
                <span>{supplier}</span>
              </div>
              <div>
                <h6>Available Product:</h6>
                <span>{quantity}</span>
              </div>
            </div>
          </Card.Text>
          <div className="w-100 update">
            <button
              onClick={() => navigateToProductDetail(_id)}
              className="w-75 py-2 update-btn rounded"
            >
              UPDATE
            </button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Inventory;
