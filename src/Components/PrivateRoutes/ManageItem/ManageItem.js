import React from "react";
import { useNavigate } from "react-router-dom";
import useProducts from "../../../Hooks/useProducts";

const ManageItem = () => {
  const [products, setProducts] = useProducts();

  const navigate = useNavigate();
  const navigateToAddItem = (id) => {
    navigate("/addItem");
  };
  const navigateToProductDetail = (id) => {
    navigate(`/inventory/${id}`);
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
      <div className="mx-2">
        <h4 className="mt-5 mb-2 text-center inventory-header">
          Manage Inventories
        </h4>
        <h6 className="mb-4 text-center inventory-header">
          Total Items: {products.length}
        </h6>

        <div className="table-responsive">
          <table class="table table-striped">
            <thead>
              <tr>
                <th>Image</th>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Supplier</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {products.map((item) => (
                <tr>
                  <td>
                    <img src={item.image} alt="" className="p-img rounded" />
                  </td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>{item.quantity}</td>
                  <td>{item.supplier}</td>
                  <td>
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <button
                          className="text-success border border-success bg-white p-2 rounded"
                          onClick={() => navigateToProductDetail(item._id)}
                        >
                          UPDATE
                        </button>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <button
                          onClick={() => handleDelete(item._id)}
                          className="deliver-btn p-2 rounded"
                        >
                          DELETE
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="w-50 mx-auto my-4">
          <button
            onClick={navigateToAddItem}
            className="w-100 p-2 mb-5 update-btn rounded mx-auto"
          >
            ADD INVENTORY
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManageItem;
