import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const LogIn = ({ changeUser, allUsers, addUser }) => {
  console.log(allUsers);
  const [nameVal, setNameVal] = useState("");
  const [passwordVal, setPasswordVal] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    let newUser = { user_name: nameVal, password: passwordVal };
    let result = allUsers.filter((user) => {
      return user.user_name === nameVal;
    });
    if (result) {
      console.log(result);
      changeUser(result[0]);
    } else {
      fetch("http://localhost:9292/user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser),
      })
        .then((resp) => resp.json())
        .then((data) => {
          console.log(data);
          changeUser(data);
          console.log(data);
          addUser(data);
        });
    }
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
