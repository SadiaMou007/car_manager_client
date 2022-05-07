import React from "react";
import { useNavigate } from "react-router-dom";
import useProducts from "../../../Hooks/useProducts";

const ManageItem = () => {
  const [products, setProducts] = useProducts();

  const navigate = useNavigate();
  const navigateToAddItem = (id) => {
    navigate("/addItem");
  };

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      const url = `http://localhost:5000/product/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = products.filter((product) => product._id !== id);
          setProducts(remaining);
        });
    }
  };
  return (
    <div className="full-height">
      <div className="container">
        <h4 className="my-2 text-center">Manage Inventories</h4>

        <div className="w-100 update">
          <button
            onClick={navigateToAddItem}
            className="w-25 py-2 update-btn rounded"
          >
            ADD INVENTORY
          </button>
        </div>
        <h6 className="my-4 text-center">Total Items: {products.length}</h6>
        <div className="bg-light p-3">
          {products.map((product) => (
            <div className="m-2 border">
              {product.name}
              <button
                className="ms-3"
                onClick={() => handleDelete(product._id)}
              >
                DELETE
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManageItem;
