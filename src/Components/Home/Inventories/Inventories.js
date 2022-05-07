import React from "react";
import { Row } from "react-bootstrap";
import useProducts from "../../../Hooks/useProducts";
import Inventory from "../Inventory/Inventory";
import "./Inventories.css";
import { useNavigate } from "react-router-dom";
import Loading from "../../Loading/Loading";

const Inventories = () => {
  const [products] = useProducts();
  const navigate = useNavigate();
  const navigateToManageInventory = () => {
    navigate("/manageItem");
  };
  if (!products.length) {
    return <Loading></Loading>;
  } else {
    return (
      <div>
        <div className="container my-5" id="services">
          <h3 className="text-center mb-3 mt-3 p-2 inventory-header">
            INVENTORIES
          </h3>
          <Row xs={1} md={2} lg={2} className="g-4">
            {products.slice(0, 6).map((product) => (
              <Inventory key={product._id} product={product}></Inventory>
            ))}
          </Row>
          <div className="w-100 update">
            <button
              className="w-75 py-3 update-btn rounded"
              onClick={navigateToManageInventory}
            >
              MANAGE INVENTORIES
            </button>
          </div>
        </div>
      </div>
    );
  }
};

export default Inventories;
