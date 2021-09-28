import React, { useState, userRef } from "react";
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
  return (
    <>
      <aside className="modal" ref={drop}>
        <span className="close">
          <AiOutlineClose onClick={closeModal} />
        </span>
        {collection.map((item) => {
          return <Picture pic={item.url} drags={drags} />;
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
        <button
          style={{ marginTop: "20rem", color: "white", borderColor: "white" }}
        ></button>
      </aside>
    </>
  );
};

export default Modal;
