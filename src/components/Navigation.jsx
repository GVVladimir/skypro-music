import React from "react";
import Burger from "./Burger";

const { useState } = React;

function Nav() {
  const [visible, setVisible] = useState(false);
  const toggleVisibility = () => setVisible(!visible);

  return (
    <nav className="main__nav nav">
      <div className="nav__logo logo">
        <img className="logo__image" src="img/logo.png" alt="logo" />
      </div>
      <div className="nav__burger burger" onClick={toggleVisibility}>
        {visible ? true : false}
        <span className="burger__line"></span>
        <span className="burger__line"></span>
        <span className="burger__line"></span>
      </div>
      {visible && <Burger />}
    </nav>
  );
}
export default Nav;
