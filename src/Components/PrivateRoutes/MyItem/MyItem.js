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
  return <div className="full-height">MyItem:total : {myItem.length}</div>;
};

export default MyItem;
