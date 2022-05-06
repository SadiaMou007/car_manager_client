import React from "react";
import { useNavigate } from "react-router-dom";
import useProducts from "../../../Hooks/useProducts";

const ManageItem = () => {
  const [products] = useProducts();

  const navigate = useNavigate();
  const navigateToAddItem = (id) => {
    navigate("/addItem");
  };
  return (
    <div className="full-height">
      <div className="container">
        <h2 className="my-4 text-center">Manage Inventories</h2>
        <h1>Total Items: {products.length}</h1>
        <div className="w-100 update">
          <button
            onClick={navigateToAddItem}
            className="w-75 py-2 update-btn rounded"
          >
            ADD INVENTORY
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManageItem;
