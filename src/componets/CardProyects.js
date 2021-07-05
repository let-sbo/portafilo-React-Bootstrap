import React, { useRef } from "react";

export default function CardProyects(props) {
  let refImg = useRef();
  const handlerMouseOver = () => {
    refImg.current.style.opacity = "1";
    refImg.current.style.transform = "scale(1.1)"
  };
  const handlerMouseOut = () => {
    refImg.current.style.opacity = ".3";
    refImg.current.style.transform = "scale(1)"
  };
  return (
    <div
      className='card shadow mt-5'
      style={{ width: "18rem" }}
      onMouseOver={handlerMouseOver}
      onMouseOut={handlerMouseOut}>
      <figure
        className='card-img-top'
        style={{ height: "12rem", overflow: "hidden" }}>
        <img
          src={props.img}
          alt='proyect'
          className='img-fluid'
          style={{ opacity: ".3", transition: ".3s linear" }}
          ref={refImg}></img>
      </figure>
      <div className='card-body'>
        <h3 className='card-title'> My proyect {props.number}</h3>
        <p className='card-text'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt
          omnis natus beatae, voluptate nisi aperiam aspernatur adipisci
          perferendis praesentium rerum.
        </p>
        <button type='button' className='btn btn-outline-success'>
          view
        </button>
      </div>
    </div>
  );
}
