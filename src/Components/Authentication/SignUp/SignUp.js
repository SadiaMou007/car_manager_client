import { React, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";

import auth from "../../../Firebase/firebase.init";
import Loading from "../../Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";

const SignUp = () => {
  const [agree, setAgree] = useState(false);

  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const [updateProfile, updating] = useUpdateProfile(auth);

  const handleSignUp = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const name = e.target.name.value;
    const pass = e.target.password.value;

    await createUserWithEmailAndPassword(email, pass);
    await updateProfile({ displayName: name });
    console.log("update user profile");
    navigate("/home");
  };

  if (user) {
    console.log("user", user);
  }
  if (error) {
    console.log(error.message);
  }
  if (loading || updating) {
    return <Loading></Loading>;
  }

  return (
    <div className=" w-50 container-fluid mb-5 bg-light rounded pb-4">
      <div className="">
        <h3 className="text-center mt-2 p-2 inventory-header">SIGN UP</h3>
        <form onSubmit={handleSignUp}>
          <div className="p-3">
            <label htmlFor="name" className="">
              Name
            </label>
            <div className="input-wrapper">
              <input
                type="text"
                name="name"
                id="name"
                className="w-100 p-2 rounded"
              />
            </div>
          </div>
          <div className="p-3">
            <label htmlFor="email" className="">
              Email
            </label>
            <div className="input-wrapper">
              <input
                type="email"
                name="email"
                id="email"
                className="w-100 p-2 rounded"
                required
              />
            </div>
          </div>
          <div className="p-3">
            <label htmlFor="password">Password</label>
            <div className="input-wrapper">
              <input
                type="password"
                name="password"
                id="password"
                className="w-100 p-2 rounded"
                required
              />
            </div>
          </div>

          <div>
            <input
              onClick={() => setAgree(!agree)}
              type="checkbox"
              name="terms"
              id="terms"
              className="p-2 ms-3 me-2"
            />
            <label
              htmlFor="terms"
              className={agree ? "text-success" : "text-danger"}
            >
              Accept our terms and conditions?{" "}
            </label>
          </div>
          <div className="p-3 w-75 mx-auto">
            <button
              disabled={!agree}
              type="submit"
              className="w-100 p-2 rounded border-0 update-btn"
            >
              Sign Up
            </button>
          </div>
          <p className="text-center mb-3">
            Already have an account?{" "}
            <Link to={"/login"} className="text-decoration-none text-primary">
              Login
            </Link>
          </p>
        </form>
      </div>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default SignUp;
