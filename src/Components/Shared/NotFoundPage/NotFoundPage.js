import React from "react";
import { Link } from "react-router-dom";
import "./NotFoundPage.css";
const NotFoundPage = () => {
  return (
    <div className="full-height err-page">
      <div className="error-content">
        <span className="page-404">404</span>
        <p className="text-white">
          We are sorry!! The page you requested was not found.
        </p>
        <div className="mt-4">
          <Link
            to={"/home"}
            className="text-decoration-none px-5 py-2 not-found-link"
          >
            Home
          </Link>
          <Link
            to={"/blogs"}
            className="text-decoration-none px-5 py-2 not-found-link ms-4"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
