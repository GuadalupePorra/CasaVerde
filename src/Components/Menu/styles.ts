import styled from 'styled-components';

export const Header = styled.header`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem 2rem;
  background-color: rgba(255, 255, 255, 0.56); 
  backdrop-filter: blur(8px);
  z-index: 10;

  @media(min-width: 920px) {
    flex-direction: row;
  }
`;

export const NavMenu = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 12px;

  li {
    list-style: none;
    font-size: 14px;

    @media(min-width: 920px) {
      font-size: 16px;
    }
  }

  li a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.secondary};
    padding: 8px;

    @media(min-width: 920px) {
      padding: 16px;
    }
  }

  @media(min-width: 920px) {
    flex-direction: row;
    justify-content: flex-end;
    gap: 24px;
  }
`;

// Botón hamburguesa
export const BurgerButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 20;

  span {
    height: 0.5rem;
    background-color: #59bb68ff;
    width: 100%;
    border-radius: 2px;
    transition: all 0.3s ease;
  }

  @media(min-width: 920px) {
    display: none;
  }
`;

interface MobileMenuWrapperProps {
  $isOpen: boolean;
}

export const MobileMenuWrapper = styled.div<MobileMenuWrapperProps>`
  display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')};
  position: absolute;
  background-color: rgba(255, 255, 255, 1); 
  top: 100%;
  left: 0;
  width: 100%;
  padding: 1rem;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);

  @media(min-width: 920px) {
    background: none;
    display: flex;
    position: static;
    box-shadow: none;
    padding: 0;
    width: auto;
  }
`;
