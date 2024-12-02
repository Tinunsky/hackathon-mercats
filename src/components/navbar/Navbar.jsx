import React from "react";
import { NavbarStyled, LogoContainer, TextContainer } from "./NavbarStyled";
import Logo from "../../assets/images/mercaprop.png";

const Navbar = () => {
  return (
    <NavbarStyled>
      <LogoContainer>
        <img src={Logo} alt="Imatge de logotip" />
      </LogoContainer>
      <TextContainer>El teu mercat, a prop.</TextContainer>
    </NavbarStyled>
  );
};

export default Navbar;
