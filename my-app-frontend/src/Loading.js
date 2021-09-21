import React from "react";
import { Ring } from "react-awesome-spinners";

const Loading = () => {
  return (
    <div style={{ alignItems: "center", textAlign: "center" }}>
      <h1 style={{ textAlign: "center", color: "lightBlue" }}>Loading ....</h1>
      <Ring />
    </div>
  );
};

export default Loading;
