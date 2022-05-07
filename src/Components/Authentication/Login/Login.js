import axios from "axios";
import React, { useRef } from "react";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../Firebase/firebase.init";
import Loading from "../../Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";
import "./Login.css";
import { FaCar } from "react-icons/fa";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();
  let errorMessage;
  const from = location.state?.from?.pathname || "/";

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const pass = passwordRef.current.value;
    await signInWithEmailAndPassword(email, pass);

    const { data } = await axios.post("http://localhost:5000/login", { email });
    localStorage.setItem("accessToken", data.accessToken);
    toast("Login Success!!");
    navigate(from, { replace: true });
  };

  const handlePasswordReset = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Sent email");
    } else {
      toast("Enter your email address");
    }
  };
  if (loading || sending) {
    return <Loading></Loading>;
  }
  if (error) {
    errorMessage = <p className="text-danger text-center">{error.message}</p>;
  }
  // if (user) {
  //   toast("Login Successfull!!");
  //   navigate(from, { replace: true });
  // }
  return (
    <div className=" w-75 container-fluid full-height">
      <div className="row">
        <div className="col-lg-5 col-md-5 col-sm-12 bg my-5">
          <div className=" my-5 bg bg-border p-5 ms-5">
            <div>
              <FaCar className="icon" />
            </div>
            <h3>Car Manager</h3>
            <p>Best Car selling organization</p>
            <a href="#">Need Help?</a>
          </div>
        </div>
        <div className="col-lg-7 col-md-7 col-sm-12 bg-light my-5">
          <div>
            <h3 className="text-center mt-3">LOGIN</h3>
            <form onSubmit={handleSubmit}>
              <div className="p-3">
                <label htmlFor="email" className="">
                  Email
                </label>
                <div className="input-wrapper">
                  <input
                    ref={emailRef}
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
                    ref={passwordRef}
                    type="password"
                    name="password"
                    id="password"
                    className="w-100 p-2 rounded"
                    required
                  />
                </div>
              </div>

              <div className="py-3 w-75 mx-auto">
                <button
                  type="submit"
                  className="w-100 p-2 rounded border-0 update-btn"
                >
                  LOGIN
                </button>
              </div>
              {errorMessage}
            </form>

            <p className="text-center mb-2">
              New to Car Manager?
              <Link
                to={"/signup"}
                className="text-decoration-none text-primary"
              >
                Register
              </Link>
            </p>
            <p className="text-center mb-2">
              Forget Password?{" "}
              <button
                className="border-0 bg-white text-primary"
                onClick={handlePasswordReset}
              >
                Reset Password
              </button>
            </p>
          </div>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default Login;
