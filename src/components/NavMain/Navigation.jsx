import React from "react";
import Burger from "../Burger/Burger";
import * as S from "./Navigation.style";

const { useState } = React;

// import * as S from "./components/NavMain/Navigation.style";

function Nav() {
  const [open, setOpen] = useState(false);
  const toggleVisibility = () => setOpen(!open);

  return (
    <S.Nav>
      <S.NaVLogo>
        <S.NavImage src="img/logo.png" alt="logo" />
      </S.NaVLogo>
      <S.NavBurger onClick={toggleVisibility}>
        {open ? true : false}
        <S.BurgerLine></S.BurgerLine>
        <S.BurgerLine></S.BurgerLine>
        <S.BurgerLine></S.BurgerLine>
      </S.NavBurger>
      {open && <Burger />}
    </S.Nav>
  );
}
export default Nav;
