import React from "react";

export default function Main(props) {
  return (
    <main className='container d-flex' id="home" style={{height:"100vh"}}>
      <div className='container-fluid d-flex flex-row flex-wrap align-items-center justify-content-around'>
        <figure style={{width:"25rem"}}>
          <img
            src={props.frontMan}
            alt='front man'
            className='rounded img-fluid shadow'></img>
        </figure>
        <div style={{width:"30rem"}}>
          <h1 className='text-dark'>
            My name is Myke and I´m a frontend developper
          </h1>
 
          <p className='text-secondary'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, ut!,
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit
            voluptates quam quo, harum dolorum provident!
          </p>
        </div>
      </div>
    </main>
  );
}
