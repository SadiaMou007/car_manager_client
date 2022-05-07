import React from "react";
import auth from "../../../Firebase/firebase.init";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import Loading from "../../Loading/Loading";
import { useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
  let errorText;
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  if (user) {
    navigate(from, { replace: true });
  }
  if (loading) {
    return <Loading></Loading>;
  }
  if (error) {
    errorText = <p className="text-danger text-center">{error.message}</p>;
  }
  return (
    <div className="w-75 mx-auto ">
      <button
        onClick={() => signInWithGoogle()}
        className="w-100 p-2 update-btn my-3"
      >
        <FaGoogle /> Sign In with Google
      </button>
      <div> {errorText}</div>
    </div>
  );
};

export default SocialLogin;
