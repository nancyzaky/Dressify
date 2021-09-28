import React from "react";

const Archived = ({ item }) => {
  return (
    <>
      <ul style={{ paddingBottom: "2rem" }}>
        <img src={item.url} alt="pic" className="pic-small" />
        <li>
          <h5 className="">{item.name}</h5>
          <h5>${item.price}</h5>

        </li>
      </ul>
    </>
  );
};

export default Archived;
