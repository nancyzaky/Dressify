import React, { useState } from "react";
import { useHistory } from "react-router-dom";
const SignUp = (addUser, changeUser) => {
  let history = useHistory();
  const [newUser, setNewUser] = useState("");
  const [newPass, setNewPass] = useState("");
  const handleSignUp = () => {
    let newUserCreated = { user_name: newUser, password: newPass };
    fetch("http://localhost:9292/user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUserCreated),
    })
      .then((resp) => resp.json())
      .then((data) => {
        changeUser(data);
        addUser(data);
      });
    // history.push("/");
  };
  return (
    <div>
      <h3 style={{ textAlign: "center", color: "white" }}>Sign Up</h3>
      <form className="login-cont" type="submit" onSubmit={handleSignUp}>
        <label htmlFor="username" name="name" id="name" className="label">
          Create User Name
        </label>
        <br></br>
        <input
          className="login"
          value={newUser}
          placeholder="Enter User Name"
          onChange={(e) => {
            setNewUser(e.target.value);
          }}
        ></input>
        <br></br>
        <label htmlFor="username" name="name" id="name" className="label">
          Create Password
        </label>
        <br></br>
        <input
          className="login"
          placeholder="Enter User Password"
          value={newPass}
          onChange={(e) => {
            setNewPass(e.target.value);
          }}
        ></input>
        <br></br>
        <button className="btn" onClick={handleSignUp}>
          Sign-Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
