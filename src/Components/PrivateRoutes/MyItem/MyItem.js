import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../Firebase/firebase.init";

const MyItem = () => {
  const [user] = useAuthState(auth);
  const [myItem, setMyItem] = useState([]);

  useEffect(() => {
    const getItems = async () => {
      const email = user.email;
      const url = `http://localhost:5000/products?email=${email}`;
      const { data } = await axios.get(url);
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
      <div className="container">
        <h4 className="my-4 text-center">Total Item: {myItem.length}</h4>

        <div className="border p-4">
          {myItem.map((item) => (
            <div>
              {item.name}
              <button onClick={() => handleDelete(item._id)}>DELETE</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyItem;
