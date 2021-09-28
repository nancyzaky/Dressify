import React, { useRef } from "react";
import { useDrag } from "react-dnd";
const Picture = ({ pic, drags }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "image",
    item: { url: pic },
  }));
  return (
    <img src={pic} alt="pic" ref={drag} className={drags ? "drag" : "pics"} />
  );
};

export default Picture;
