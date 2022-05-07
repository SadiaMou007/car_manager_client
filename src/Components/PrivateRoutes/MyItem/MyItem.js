import axios from "axios";
import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../Firebase/firebase.init";
import "./MyItem.css";

const MyItem = () => {
  const [user] = useAuthState(auth);
  const [myItem, setMyItem] = useState([]);

  // useEffect(() => {
  //   const getItems = async () => {
  //     const email = user.email;
  //     const url = `http://localhost:5000/products?email=${email}`;
  //     const { data } = await axios.get(url);
  //     setMyItem(data);
  //   };
  //   getItems();
  // }, [user]);
  useEffect(() => {
    const getItems = async () => {
      const email = user.email;
      const url = `http://localhost:5000/products?email=${email}`;

      const { data } = await axios.get(url, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      setMyItem(data);
    };
    getItems();
  }, [user]);

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
          const remaining = myItem.filter((product) => product._id !== id);
          setMyItem(remaining);
        });
    }
  };

  return (
    <div className="full-height">
      <div className="mx-2">
        <h4 className="my-4 text-center inventory-header">
          Total Item: {myItem.length}
        </h4>
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
              </tr>
            </thead>
            <tbody>
              {myItem.map((item) => (
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
        </div>
      </div>
    </div>
  );
};

export default MyItem;
