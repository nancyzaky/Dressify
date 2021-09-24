import React, { useState, useEffect } from "react";
import Picture from "./Picture";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
const Cart = ({ user, cart, deleteFromCart, discount, emptyCart }) => {
  const [tot, setTot] = useState(0);
  const [code, setCode] = useState("");
  const [wrongCode, setWrongCode] = useState(false);
  const [codeApplied, setCodeApplied] = useState(false);

  const handleRemove = (productId) => {
    deleteFromCart(productId);
  };
  const handlePay = () => {
    emptyCart();
    fetch(`http://localhost:9292/user/${user.id}/checkout`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: 2 }),
    });
  };
  const handleDiscount = () => {
    if (code !== discount) {
      setWrongCode(true);
      return;
    }
    setCodeApplied(true);
    fetch(`http://localhost:9292/disc/${user.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ discount: "true" }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        setTot((tot) => {
          return data;
        });
      });
  };
  const changeTotal = () => {
    fetch(`http://localhost:9292/total/${user.id}`)
      .then((resp) => resp.json())
      .then((data) =>
        setTot((tot) => {
          return data;
        })
      );
  };
  useEffect(() => {
    changeTotal();
  }, [handleRemove]);
  return (
    <div>
      <h1 style={{ textAlign: "center", color: "white" }}>Shopping Cart</h1>
      <div className="products">
        <ul>
          {cart.map((item) => {
            return (
              <CartItem
                item={item}
                key={item.id}
                handleRemove={handleRemove}
                user={user}
                changeTotal={changeTotal}
              />
            );
          })}
        </ul>
        <section
          style={{
            textAlign: "center",
            backgroundColor: "black",
            height: "400px",
          }}
        >
          <h4 style={{ textAlign: "center", color: "white" }}>Total: ${tot}</h4>
          <h3 style={{ textAlign: "center", color: "white" }}>dicount Code</h3>
          <input
            type="text"
            style={{ marginBottom: "1rem" }}
            value={code}
            onChange={(e) => {
              setCode(e.target.value);
            }}
          ></input>
          <br></br>
          <button className="btn" onClick={handleDiscount}>
            Apply discount
          </button>
          {wrongCode && (
            <p style={{ color: "white" }}>
              Sorry! Wrong Code, Try a different code
            </p>
          )}
          {codeApplied && (
            <p style={{ color: "green" }}>Congrats!! Discount Code Applied.</p>
          )}
          <br></br>
          <button className="btn">
            {" "}
            <Link to="/checkout" onClick={handlePay}>
              Check Out
            </Link>
          </button>
        </section>
      </div>
    </div>
  );
};

export default Cart;
