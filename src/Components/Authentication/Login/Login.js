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

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const pass = passwordRef.current.value;
    signInWithEmailAndPassword(email, pass);
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
  if (user) {
    toast("Login Successfull!!");
    navigate(from, { replace: true });
  }
  return (
    <div className=" w-50  container-fluid vh-100 my-5 s-container">
      <div>
        <h3 className="text-center my-2 text-success">Login</h3>
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

          <div className="p-3">
            <button type="submit" className="w-100 p-2 rounded border-0 g-btn">
              Login
            </button>
          </div>
          {errorMessage}
        </form>

        <p className="text-center mb-2">
          New to Car Manager?
          <Link to={"/signup"} className="text-decoration-none text-primary">
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
  );
};

export default Login;
