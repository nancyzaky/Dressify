import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const LogIn = ({ changeUser }) => {
  const [nameVal, setNameVal] = useState("");
  const [passwordVal, setPasswordVal] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    let newUser = { user_name: nameVal, password: passwordVal };
    changeUser(newUser);
    fetch("http://localhost:9292/user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    });

    setNameVal("");
    setPasswordVal("");
  };
  return (
    <>
      <h3>Log In</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username" name="name" id="name">
          User Name
        </label>
        <input
          type="text"
          placeholder="Enter user name"
          value={nameVal}
          onChange={(e) => {
            setNameVal(e.target.value);
          }}
        ></input>

        <label htmlFor="password" name="password" id="password">
          Password
        </label>
        <input
          type="text"
          placeholder="Enter password"
          value={passwordVal}
          onChange={(e) => {
            setPasswordVal(e.target.value);
          }}
        ></input>
        <button>Log In</button>
      </form>
      {/* {user.user_name && <p>{`welcome ${user.user_name}`}</p>} */}
    </>
  );
};

export default LogIn;
