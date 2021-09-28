import React, { useState, useEffect } from "react";
import { GrPrevious, GrNext } from "react-icons/gr";
const MostFav = () => {
  const [mostFav, setMostFav] = useState([]);
  const [index, setIndex] = useState(0);
  const fetchUrl = () => {
    fetch("http://localhost:9292/bestsellers")
      .then((resp) => resp.json())
      .then((data) => {
        console.log(Object.keys(data));
        setMostFav(Object.keys(data));
      });
  };
  useEffect(() => {
    fetchUrl();
  }, []);
  useEffect(() => {
    if (index > mostFav.length - 1) {
      setIndex(0);
    } else if (index < 0) {
      setIndex(mostFav.length - 1);
    }
  }, [index, mostFav]);
  useEffect(() => {
    let autoSlide = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => {
      return clearInterval(autoSlide);
    };
  }, [index, mostFav]);
  return (
    <section className="most-fav">
      <h3
        style={{
          color: "black",
          textAlign: "center",
          paddingTop: "3rem",
          fontFamily: "Snell Roundhand, cursive",
          fontSize: "2rem",
        }}
      >
        Our Best Sellers
      </h3>
      <div className="center">
        {mostFav.map((fav, favIndex) => {
          let position = "nextSlide";
          if (favIndex === index) {
            position = "activeSlide";
          }
          if (
            favIndex === index - 1 ||
            (index === 0 && favIndex === mostFav.length - 1)
          ) {
            position = "prevSlide";
          }
          return (
            <article className={position} key={favIndex}>
              <img src={fav} alt="fav" />
            </article>
          );
        })}
      </div>
      <section className="btn-cont">
        {/* <button
          className="btn"
          style={{
            marginRight: "8rem",
            marginLeft: "-1rem",
            backgroundColor: "white",
          }}
        > */}
        <GrPrevious size="40px" />
        <GrNext size="40px" />
      </section>
    </section>
  );
};

export default MostFav;
