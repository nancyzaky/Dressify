import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const LogIn = ({ changeUser, allUsers, addUser }) => {
  const [nameVal, setNameVal] = useState("");
  const [logged, setLogged] = useState(false);
  const [passwordVal, setPasswordVal] = useState("");
  const [signUp, setSigUp] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    let newUser = { user_name: nameVal, password: passwordVal };
    let result = allUsers.filter((user) => {
      return user.user_name === nameVal;
    });
    if (result.length > 0) {
      console.log(result);
      changeUser(result[0]);
      // } else {
      //   fetch("http://localhost:9292/user", {
      //     method: "POST",
      //     headers: { "Content-Type": "application/json" },
      //     body: JSON.stringify(newUser),
      //   })
      //     .then((resp) => resp.json())
      //     .then((data) => {
      //       console.log(data);
      //       changeUser(data);
      //       console.log(data);
      //       addUser(data);
      //     });
      // }
      setNameVal("");
      setPasswordVal("");
      setLogged(true);
    } else {
      setSigUp(true);
    }
  };
  return (
    <>
      <h3 style={{ color: "white", textAlign: "center" }}>Log In</h3>
      <div className="login-cont">
        <form onSubmit={handleSubmit}>
          <label htmlFor="username" name="name" id="name" className="label">
            User Name
          </label>
          <br></br>
          <input
            className="login"
            type="text"
            placeholder="Enter user name"
            value={nameVal}
            onChange={(e) => {
              setNameVal(e.target.value);
            }}
          ></input>
          <br></br>
          <label
            htmlFor="password"
            name="password"
            className="label"
            id="password"
          >
            Password
          </label>
          <br></br>
          <input
            className="login"
            type="text"
            placeholder="Enter password"
            value={passwordVal}
            onChange={(e) => {
              setPasswordVal(e.target.value);
            }}
          ></input>
          <br></br>
          <button className="btn" style={{ marginLeft: "40rem" }}>
            Log In
          </button>
        </form>
      </div>
      <section>
        <h5 style={{ marginLeft: "1rem" }}>
          Don't have an Account?Click here:{" "}
          <Link to="/signup">
            <em>Sign-up</em>
          </Link>{" "}
          to Sign up
        </h5>
      </section>
      <section style={{ left: "50%" }}>
        {signUp && (
          <h1 style={{ textAlign: "center", color: "red" }}>
            User Name doesn't exist, please sign-up
          </h1>
        )}
      </section>
    </>
  );
};

export default LogIn;
