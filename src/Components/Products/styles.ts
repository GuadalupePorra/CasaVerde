'use client';
import styled from "styled-components";

export const SectionContainer = styled.section`
  text-align: center;
  padding: 50px 20px;
`;

export const SubTitle = styled.p`
  font-family: ${({theme})=> theme.fonts.main};
  font-size: 22px;
  font-weight: 600;
  color: ${({theme}) => theme.colors.text};
  margin: 0;
`;

export const MainTitle = styled.h2`
  font-family: ${({theme})=> theme.fonts.secondary};
  font-size: 82px;
  color: ${({theme})=> theme.colors.secondary};
  margin-top: 5px;
  margin-bottom: 40px;
`;

export const Filter = styled.div`
  margin: 3rem 0;
  display: flex; 
  flex-wrap: wrap;
  gap: 3rem;
  justify-content: center;
`;

export const Order = styled.div`
  select {
    height: 3rem;
    font-size: 14px;
  }

  label{
    margin-right: 1rem;
  }

`;


export const PriceForm = styled.form`
  input {
    height: 3rem;
    font-size: 14px;
    margin-right: 8px;
  }

  button {
    padding: 1rem; 
    font-size: 14px;
    background-color: ${({theme})=> theme.colors.primary};
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  label{
    margin-right: 1rem;
  }

`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); // 3 columnas de igual tamaño
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr); // 2 columnas en tablets
  }

  @media (max-width: 540px) {
    grid-template-columns: 1fr; // 1 columna en móviles
  }
`;