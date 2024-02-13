import React, { useState } from 'react';
import * as S from "./styles";

interface BurgerProps {
  open: boolean;
  setOpen: (value: boolean) => void;
}

const Burger: React.FC<BurgerProps> = ({ open, setOpen }) => {
  return (
    <S.StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </S.StyledBurger>
  );
};

interface MenuProps {
  open: boolean;
}

const MobileMenu: React.FC<MenuProps> = ({ open }) => {
  return (
    <S.StyledMenu open={open}>
      <S.MenuList>
        <S.ItemList><a href="#">Início</a></S.ItemList>
        <S.ItemList><a href="#">Sobre Nós</a></S.ItemList>
        <S.ItemList><a href="#">Como doar?</a></S.ItemList>
        <S.ItemList><a href="#">Serviços</a></S.ItemList>
        <S.ItemList><a href="#">Contato</a></S.ItemList>
      </S.MenuList>
    </S.StyledMenu>
  );
};

const DesktopMenu = () => {
  return (
    <S.DesktopMenu>
      <S.MenuList>
        <S.ItemList><a href="#">Início</a></S.ItemList>
        <S.ItemList><a href="#">Sobre Nós</a></S.ItemList>
        <S.ItemList><a href="#">Como doar?</a></S.ItemList>
        <S.ItemList><a href="#">Serviços</a></S.ItemList>
        <S.ItemList><a href="#">Contato</a></S.ItemList>
      </S.MenuList>
    </S.DesktopMenu>
  );
};

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Burger open={open} setOpen={setOpen} />
      <MobileMenu open={open} />
      <DesktopMenu />
    </>
  );
};

export default Navbar;