import React, { useState, useEffect, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { NavContext } from "./Context";

const LogIn = ({ changeUser, allUsers, addUser }) => {
  let history = useHistory();
  const [nameVal, setNameVal] = useState("");
  const [logged, setLogged] = useState(false);
  const [passwordVal, setPasswordVal] = useState("");
  const [signUp, setSigUp] = useState(false);
  const { closeSubMenu } = useContext(NavContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    let newUser = { user_name: nameVal, password: passwordVal };
    let result = allUsers.filter((user) => {
      return user.user_name === nameVal;
    });
    if (result.length > 0) {
      changeUser(result[0]);

      //   fetch("http://localhost:9292/user",

      setLogged(true);
      console.log(allUsers);
      history.push("/");
    } else {
      setSigUp(true);
    }
    setNameVal("");
    setPasswordVal("");
  };
  return (
    <>
      <div className="login-all" onMouseOver={closeSubMenu}>
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
          <h3 style={{ marginLeft: "1rem", color: "red", marginTop: "4rem" }}>
            Don't have an Account?Click here:{" "}
            <Link to="/signup">
              <em>Sign-up</em>
            </Link>{" "}
          </h3>
        </section>
        <section style={{ left: "50%" }}>
          {signUp && (
            <h1 style={{ textAlign: "center", color: "red" }}>
              User Name doesn't exist, please sign-up
            </h1>
          )}
        </section>
      </div>
    </>
  );
};

export default LogIn;
