import React from "react";
import CardProyects from "./CardProyects";
import proyect1 from "./proyects/1.jpg";
import proyect2 from "./proyects/2.jpg";
import proyect3 from "./proyects/3.jpg";
import proyect4 from "./proyects/4.jpg";
import proyect5 from "./proyects/5.jpg";
import proyect6 from "./proyects/6.jpg";
import proyect7 from "./proyects/7.jpg";
import proyect8 from "./proyects/8.jpg";

export default function SectionProyects() {
  return (
    <section id='proyects' className='container-fluid bg-primary p-5'>
      <div className='row m-3'>
        <h3 className='text-center fs-2'>Proyects</h3>
      </div>
      <div className='row d-flex flex-wrap justify-content-around'>
        <CardProyects key='1' img={proyect1} number={1} />
        <CardProyects key='2' img={proyect2} number={2} />
        <CardProyects key='3' img={proyect3} number={3} />
        <CardProyects key='4' img={proyect4} number={4} />
        <CardProyects key='5' img={proyect5} number={5} />
        <CardProyects key='6' img={proyect6} number={6} />
        <CardProyects key='7' img={proyect7} number={7} />
        <CardProyects key='8' img={proyect8} number={8} />
      </div>
    </section>
  );
}
