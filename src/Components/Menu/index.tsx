'use client';
import React, { useState } from 'react';
import { Header, NavMenu, BurgerButton, MobileMenuWrapper } from './styles';

const Menu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <Header>
      <div>
        <img src="/icons/logo.svg" alt="Logo" />
      </div>

      <BurgerButton onClick={toggleMenu}>
        <span />
        <span />
        <span />
      </BurgerButton>

      <MobileMenuWrapper $isOpen={isOpen}>
        <NavMenu>
          <li><a href="/">Como hacer</a></li>
          <li><a href="/">Ofertas</a></li>
          <li><a href="/">Testimonios</a></li>
          <li><a href="/">Vídeos</a></li>
          <li><a href="/"><strong>Mi carrito</strong></a></li>
        </NavMenu>
      </MobileMenuWrapper>
    </Header>
  );
};

export default Menu;
