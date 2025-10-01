import React from 'react';
import styled from 'styled-components';

type ProductCardProps = {
  name: string;
  price: string;
  imageSrc: string;
};

const ProductCard: React.FC<ProductCardProps> = ({ name, price, imageSrc }) => {
  return (
    <CardContainer>
      <Image src={imageSrc} alt={name} />
      <Content>
        <Name>{name}</Name>
        <Price>{price}</Price>
        <BuyLink href="#">
          Comprar
          <Arrow>→</Arrow>
        </BuyLink>
      </Content>
    </CardContainer>
  );
};

export default ProductCard;

const CardContainer = styled.div`
  display: flex;
  width: 379px;
  height: 200px;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 7px 4px 11px rgb(0 0 0 / 28%);
  transition: transform 0.2s 
  cubic-bezier(0.75, 0.13, 0.96, 0.45);

  &:hover {
    transform: translateY(-5px);
  }

   @media (max-width: 768px){
    width: 340px;
   }
`;

const Image = styled.img`
  width: 180px;
  object-fit: cover;

  @media (max-width: 768px){
    width: 130px;
   }
`;

const Content = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Name = styled.h3`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-style: normal; 
  font-size: 35px;
  margin: 0 5px;
  color: ${({ theme })=> theme.colors.secondary};
`;

const Price = styled.p`
    font-size: 16px;
    margin: 0 0 10px 0;
    color: ${({ theme })=> theme.colors.text};
    text-align: justify;
`;

const BuyLink = styled.a`
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  color: #ffc107;
  text-decoration: none;
  font-weight: bold;
`;

const Arrow = styled.span`
  margin-left: 5px;
`;
