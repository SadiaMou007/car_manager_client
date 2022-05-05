import React from "react";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import useProducts from "../../../Hooks/useProducts";
import Inventory from "../Inventory/Inventory";

const Inventories = () => {
  const [products] = useProducts();
  return (
    <div>
      <div className="container my-5 bg-light" id="services">
        <h3 className="text-center text-success my-3 p-2">Inventory </h3>
        <Row xs={1} md={2} lg={3} className="g-4">
          {products.map((product) => (
            <Inventory key={product._id} product={product}></Inventory>
          ))}
        </Row>
      </div>
      <Link to={"/inventory"} className="text-decoration-none text-primary">
        Register
      </Link>
    </div>
  );
};

export default Inventories;
