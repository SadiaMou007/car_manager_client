import React from "react";
import auth from "../../../Firebase/firebase.init";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import Loading from "../../Loading/Loading";
import { useLocation, useNavigate } from "react-router-dom";

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
    <div>
      <button onClick={() => signInWithGoogle()}>Sign In with Google</button>
      <div> {errorText}</div>
    </div>
  );
};

export default SocialLogin;
