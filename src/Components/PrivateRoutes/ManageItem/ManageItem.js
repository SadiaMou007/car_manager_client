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
      <div className="container">
        <h4 className="my-2 text-center">Manage Inventories</h4>
        <h6 className="my-4 text-center">Total Items: {products.length}</h6>

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
                  <button
                    className="deliver-btn p-2 rounded"
                    onClick={() => navigateToProductDetail(item._id)}
                  >
                    UPDATE
                  </button>
                </td>
                <td>
                <button
                  onClick={() => handleDelete(item._id)}
                  className="deliver-btn p-2 rounded"
                >
                  DELETE
                </button>
              </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="w-50 mx-auto">
          <button
            onClick={navigateToAddItem}
            className="w-100  update-btn rounded mx-auto"
          >
            ADD INVENTORY
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManageItem;
