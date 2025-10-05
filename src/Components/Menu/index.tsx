'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Header, NavMenu, BurgerButton, MobileMenuWrapper } from './styles';

const Menu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const handleLinkClick = () => setIsOpen(false); // cierra menú al hacer click

  return (
    <Header>
      <div>
        <Image src="/icons/logo.svg" alt="Casa Verde" width={120} height={60} />
      </div>

      <BurgerButton onClick={toggleMenu}>
        <span />
        <span />
        <span />
      </BurgerButton>

      <MobileMenuWrapper $isOpen={isOpen}>
        <NavMenu>
          <li>
            <Link href="#newsletter" onClick={handleLinkClick}>Como hacer</Link>
          </li>
          <li>
            <Link href="#ofertas" onClick={handleLinkClick}>Ofertas</Link>
          </li>
          <li>
            <Link href="/" onClick={handleLinkClick}>Testimonios</Link>
          </li>
          <li>
            <Link href="/" onClick={handleLinkClick}>Vídeos</Link>
          </li>
          <li>
            <Link href="/" onClick={handleLinkClick}><strong>Mi carrito</strong></Link>
          </li>
        </NavMenu>
      </MobileMenuWrapper>
    </Header>
  );
};

export default Menu;
