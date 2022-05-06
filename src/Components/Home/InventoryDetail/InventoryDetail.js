import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import "./InventoryDetail.css";
const InventoryDetail = () => {
  const { inventoryId } = useParams();
  const [product, setProduct] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const url = `http://localhost:5000/products/${inventoryId}`;
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  const { _id, name, image, price, description, quantity, supplier, features } =
    product;

  const navigateToManageInventory = () => {
    navigate("/manageItem");
  };

  return (
    <div className="container my-5">
      <Card>
        <div className="d-flex">
          <div className="w-50 my-auto">
            <Card.Title>
              <div className="p-5">
                <div className="mb-3">Product Id: {_id}</div>
                <div className="my-3">Product name: {name}</div>
                <div className="my-3">
                  <span className=""> </span>Price: ${price}
                </div>
                <div className="my-3 border-line">
                  Supplier Name: {supplier}
                  <div>
                    <div className="my-3">Available Product: {quantity}</div>
                  </div>
                </div>
              </div>
            </Card.Title>
          </div>
          <div className="w-50 pt-5 pe-2">
            <Card.Img variant="top" src={image} className="card-img-detail" />
          </div>
        </div>
        <Card.Body>
          <Card.Text>
            <div className="d-flex">
              <h6 className="me-2">Features: </h6>
              <p>{features}</p>
            </div>
            <div className="d-flex">
              <h6 className="me-2">Description: </h6>
              <p>{description}</p>
            </div>
          </Card.Text>
          <div className="w-100 update">
            <button
              className="w-75 py-3 update-btn rounded"
              onClick={navigateToManageInventory}
            >
              MANAGE INVENTORIES
            </button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default InventoryDetail;
