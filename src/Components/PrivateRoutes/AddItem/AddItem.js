import React from "react";
import { useForm } from "react-hook-form";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../Firebase/firebase.init";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddItem = () => {
  const { register, handleSubmit, reset } = useForm();
  const [user] = useAuthState(auth);
  console.log(user.email);

  const onSubmit = (data) => {
    console.log(data);
    // const navigate = useNavigate();
    data.email = user.email;
    const url = `http://localhost:5000/product`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
    reset();
    toast("Item added");
  };
  return (
    <div className="full-height">
      <h4 className="my-4 text-center inventory-header">ADD NEW INVENTORY</h4>
      <div className="w-50 mx-auto">
        <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
          <input
            className="mb-3 p-1 input-border"
            placeholder="Product name"
            {...register("name", { required: true, maxLength: 20 })}
          />
          <input
            className="mb-3 p-1 input-border"
            placeholder="Supplier name"
            {...register("supplier", { required: true })}
          />
          <textarea
            className="mb-3 p-1 input-border"
            placeholder="Description"
            {...register("description")}
          />
          <textarea
            className="mb-3 p-1 input-border"
            placeholder="Features"
            {...register("features")}
          />
          <input
            className="mb-3 p-1 input-border"
            placeholder="Price"
            type="number"
            {...register("price")}
          />
          <input
            className="mb-3 p-1 input-border"
            placeholder="Quantity"
            type="number"
            {...register("quantity")}
          />
          <input
            className="mb-3 p-1 input-border"
            placeholder="Photo URL"
            type="text"
            {...register("image")}
          />
          <input
            type="submit"
            value="Add Inventory"
            className="update-btn p-2"
          />
        </form>
      </div>
    </div>
  );
};

export default AddItem;
