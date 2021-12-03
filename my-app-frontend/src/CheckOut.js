import React, { useState, useEffect, useContext } from "react";
import Archived from "./Archived";
import { NavContext } from "./Context";

const CheckOut = ({ user }) => {
  const { closeSubMenu } = useContext(NavContext);

  const [archived, setArchived] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:9292/user/${user.id}/archived`)
      .then((resp) => resp.json())
      .then((data) => {
        setArchived(data);
      });
  }, []);
  return (
    <div style={{ backgroundColor: "white" }} onMouseOver={closeSubMenu}>
      <h3>Previous orders</h3>
      <h5>Total Orders: {archived.length} orders</h5>

      <label for="order">order by:</label>
      <select
        id=""
        name=""
        form=""
        onChange={(e) => {
          if (e.target.value === "Recent") {
            fetch(`http://localhost:9292/user/${user.id}/archived/desc`)
              .then((resp) => resp.json())
              .then((data) => {
                setArchived(data);
              });
          } else if ((e.target.value = "oldest")) {
            fetch(`http://localhost:9292/user/${user.id}/archived`)
              .then((resp) => resp.json())
              .then((data) => {
                setArchived(data);
              });
          }
        }}
      >
        <option value="default">Select</option>
        <option value="Recent">Most Recent</option>
        <option value="oldest">oldest</option>
      </select>
      <div>
        {archived.map((arch) => {
          return (
            <>
              <div className="archived" key={arch.id}>
                <h5>
                  Purchase Date:{" "}
                  {`${new Date(arch.created_at).toLocaleString()}`}
                </h5>
                {arch.items.map((item) => {
                  return <Archived item={item} />;
                })}
              </div>
              <p>
                ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
              </p>
              <br></br>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default CheckOut;
