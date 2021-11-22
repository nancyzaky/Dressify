import React, { useState, userRef, useEffect } from "react";
import ScrollTo from "./ScrollTo";
import { AiOutlineClose } from "react-icons/ai";
import Picture from "./Picture";
import { useDrop } from "react-dnd";
const Modal = ({ closeModal, user }) => {
  const [drags, setDrag] = useState(false);
  const [collection, setCollection] = useState([]);

  const addImg = (url) => {
    setCollection((collection) => [...collection, url]);
    fetch(`http://localhost:9292/user/${user.id}/outfit`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: url }),
    });
    setDrag(true);
  };

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "image",
    drop: (item) => addImg(item),
  }));
  const filterPics = (url) => {
    let collectionNew = collection.filter((item) => {
      return item.url !== url;
    });
    setCollection(collectionNew);
  };
  const handleDrag = () => {
    collection.forEach((pic) => {
      fetch(`http://localhost:9292/user/${user.id}/pic`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: pic.url }),
      })
        .then((resp) => resp.json())
        .then((data) => console.log(data));
    });
  };
  return (
    <>
      <aside className="modal" ref={drop}>
        <span className="close">
          <AiOutlineClose onClick={closeModal} />
        </span>
        {collection.map((item) => {
          console.log(item);
          return (
            <Picture pic={item.url} drags={drags} filterPics={filterPics} />
          );
          <button
            style={{ marginTop: "20rem", color: "white", borderColor: "white" }}
          ></button>;
        })}
        <button
          className="btn"
          style={{ marginTop: "1rem" }}
          onClick={() => {
            setCollection([]);
          }}
        >
          Create Outfit
        </button>
        <button className="btn" onClick={handleDrag}>
          Add all to cart
        </button>
      </aside>
    </>
  );
};

export default Modal;
