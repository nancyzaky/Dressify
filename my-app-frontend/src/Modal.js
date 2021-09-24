import React, { useState, userRef } from "react";

import { AiOutlineClose } from "react-icons/ai";
import Picture from "./Picture";
import { useDrop } from "react-dnd";
const Modal = ({ closeModal, user }) => {
  const [collection, setCollection] = useState([]);
  const addImg = (url) => {
    setCollection((collection) => [...collection, url]);
    fetch(`http://localhost:9292/user/${user.id}/outfit`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: url }),
    });
  };

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "image",
    drop: (item) => addImg(item.url),
  }));
  return (
    <aside className="modal" ref={drop}>
      <span>
        <AiOutlineClose onClick={closeModal} />
      </span>
      {collection.map((item) => {
        return <Picture pic={item} />;
      })}
    </aside>
  );
};

export default Modal;
