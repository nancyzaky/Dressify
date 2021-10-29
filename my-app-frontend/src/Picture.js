import React, { useRef } from "react";
import { useDrag } from "react-dnd";
const Picture = ({ pic, drags, filterPics }) => {
  const handleClick = () => {
    if (drag) {
      filterPics(pic);
    }
  };
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "image",
    item: { url: pic },
  }));
  return (
    <img
      src={pic}
      alt="pic"
      ref={drag}
      className={drags ? "drag" : "pics"}
      onClick={handleClick}
    />
  );
};

export default Picture;
