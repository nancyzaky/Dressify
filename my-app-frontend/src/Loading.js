import React from "react";
import { Circle } from "react-awesome-spinners";

const Loading = () => {
  return (
    <div style={{ alignItems: "center", textAlign: "center" }}>
      <h1 style={{ textAlign: "center", color: "lightBlue" }}>Loading ....</h1>
      <Circle color="lightBlue" />
    </div>
  );
};

export default Loading;
