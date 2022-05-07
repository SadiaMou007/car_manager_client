import React from "react";
import { Spinner } from "react-bootstrap";

const Loading = () => {
  return (
    <div className="full-height text-center">
      <Spinner animation="border mt-5" variant="secondary" />
    </div>
  );
};

export default Loading;
