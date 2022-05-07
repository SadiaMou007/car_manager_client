import React, { useEffect, useState, useRef } from "react";
import { Card, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import "./InventoryDetail.css";
const InventoryDetail = () => {
  const quantityRef = useRef("");
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

  const handleQuantity = async (e) => {
    e.preventDefault();
    const quantity = quantityRef.current.value;
    const url = `http://localhost:5000/product/${_id}`;
    await fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      // body: JSON.stringify(quantity),
      body: JSON.stringify({ quantity: quantity }),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
    const url1 = `http://localhost:5000/products/${inventoryId}`;
    console.log(url1);
    await fetch(url1)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  };

  const quantityDecrease = async () => {
    const url = `http://localhost:5000/order/${_id}`;
    await fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
    const url1 = `http://localhost:5000/products/${inventoryId}`;
    console.log(url1);
    await fetch(url1)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  };

  return (
    <div className="container my-5">
      <h4 className="mt-3 mb-3 text-center">Update Product Quantity</h4>
      <div className="row g-4 border my-3 p-4">
        <div className="col-lg-4 col-md-4 col-sm-12">
          <button
            className="w-75 mx-auto p-2"
            onClick={() => quantityDecrease()}
          >
            DELIVERED
          </button>
        </div>
        <div className="col-lg-8 col-md-8 col-sm-12">
          <div className="d-flex">
            <form className="w-100 mx-auto" onSubmit={handleQuantity}>
              <div className="w-75 mx-auto">
                <input
                  type="number"
                  ref={quantityRef}
                  name="quantity"
                  placeholder="Enter quantity"
                  className="w-75 p-2"
                />
                <input type="submit" value="ADD" className="w-25 p-2" />
              </div>
            </form>
          </div>
        </div>
      </div>

      <h4 className="mb-3 mt-5 text-center">Update Product Quantity</h4>

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
                    <div className="my-3">
                      Available Product:
                      {quantity}
                    </div>
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
          <div className="w-100 update mb-5">
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
