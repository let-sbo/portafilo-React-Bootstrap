import React from "react";
import logo from "./img/logo192.png";
import imgFrontMan from "./img/front-man.jpg";
import HeaderNav from "./componets/HeaderNav";
import SectionProyects from "./componets/SectionProyects";
import Main from "./componets/Main";
import SectionContact from "./componets/SectionContact";
import Footer from "./componets/Footer";

function App() {
  return (
    <>
      <HeaderNav
        navBrand={logo}
        home='#home'
        proyects='#proyects'
        contact='#contact'
        footer='#footer'
      />
      <Main frontMan={imgFrontMan} />
      <SectionProyects />
      <SectionContact/>
      <Footer/>
    </>
  );
}

export default App;
